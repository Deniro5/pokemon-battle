import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { RequestWithId } from "../apiTypes";

// Create a custom type for the error
interface MongoError extends Error {
  code?: number;
  keyPattern?: { username?: string };
}

// Function to generate token and set it in a cookie
const generateTokenAndSetCookie = async (
  res: Response,
  userId: string
): Promise<void> => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // The cookie can only be accessed by the server (not JavaScript)
    secure: process.env.NODE_ENV === "production", // Set to true if using https in production
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiry
  });
};

type SignupRequestBody = {
  username: string;
  password: string;
  // Add any other signup fields needed
};

// Handle signup
const handleSignup = async (
  req: Request<unknown, unknown, SignupRequestBody>,
  res: Response
) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    await generateTokenAndSetCookie(res, user._id.toString());

    res.status(200).json({ message: "User created successfully", user });
  } catch (e) {
    const error = e as MongoError;

    if (error.code === 11000 && error.keyPattern && error.keyPattern.username) {
      res.status(400).json({
        message:
          "Username has already been taken. Please try a different username",
      });
      return;
    }

    res.status(500).json({ message: "Server Error" });
    return;
  }
};

// Handle login
const handleLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(401).json({ message: "Incorrect username or password" });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(401).json({ message: "Incorrect username or password" });
      return;
    }

    await generateTokenAndSetCookie(res, user._id.toString());

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server Error" });
    return;
  }
};

// Handle logout
const handleLogout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
    return;
  }
};

// Handle check authentication
const handleCheckAuth = async (req: any, res: Response) => {
  try {
    // userId comes from the validate token function
    const user = await User.findById(req.userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User is authenticated", user });
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
    return;
  }
};

export { handleSignup, handleLogin, handleLogout, handleCheckAuth };
