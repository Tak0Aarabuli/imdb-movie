import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("fake_jwt");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    const fakeToken = Math.random().toString(36).substring(2);

    // 30s
    Cookies.set("fake_jwt", fakeToken, { expires: 1 / 2880 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("fake_jwt");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
