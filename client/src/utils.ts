import validator from "validator";

export const sanitizeUsername = (username: string): string => {
  return validator.escape(username.trim());
};

export const isValidUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  return usernameRegex.test(username);
};
