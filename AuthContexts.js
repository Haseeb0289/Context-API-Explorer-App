import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setUserToken(data.token);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
  