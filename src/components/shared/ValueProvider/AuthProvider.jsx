/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [fetchCart, setFetchCart] = useState(false);

  const authInfo = {
    title,
    setTitle,
    category,
    setCategory,
    fetchCart,
    setFetchCart,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
