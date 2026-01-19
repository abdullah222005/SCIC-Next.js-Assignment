import Cookies from "js-cookie";

const AUTH_KEY = "clothique_auth";

export const login = (email: string, password: string) => {
  if (email === "admin@clothique.com" && password === "clothique123") {
    Cookies.set(AUTH_KEY, "true", { expires: 1 });
    return true;
  }
  if (email === "demo@clothique.com" && password === "123456") {
    Cookies.set(AUTH_KEY, "true", { expires: 1 }); 
    return true;
  }
  return false;
};

export const logout = () => {
  Cookies.remove(AUTH_KEY);
};

export const isAuthenticated = () => {
  return Cookies.get(AUTH_KEY) === "true";
};
