// store.ts
import { create } from "zustand";
import { User } from "../types";
import axios from "axios";

axios.defaults.withCredentials = true;

interface State {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  updateUser: (_id: string, newTeam: string[]) => void;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

const useStore = create<State>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set(() => ({ user })),
  updateUser: async (id, newFields) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/update/" + id,
        newFields
      );
      const newUser = response.data;
      set(() => ({ user: newUser }));
      //what if we returned tru false based on success status?
    } catch (e) {
      console.error(e);
    }
  },
  signup: async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        username,
        password,
      });

      const { user } = response.data;
      set(() => ({ user, isAuthenticated: true }));
      return true;
    } catch (e) {
      console.error(e);
      return false; //in a real application we should return a more detailed error
    }
  },
  login: async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });

      const { user } = response.data;
      set(() => ({ user, isAuthenticated: true }));
      return true;
    } catch (e) {
      console.error(e);
      return false; //in a real application we should return a more detailed error
    }
  },
  logout: async () => {
    try {
      await axios.post("http://localhost:8000/auth/logout");
      set(() => ({ user: null, isAuthenticated: false }));
    } catch (e) {
      console.error(e);
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get("http://localhost:8000/auth/check-auth");
      const { user } = response.data;
      set(() => ({ user, isAuthenticated: true }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStore;
