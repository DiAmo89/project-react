import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be inside AuthProvider");
  }

  return context;
};

export default useAuth;
