import { createContext } from "react";
import type User from "../types/User";

interface AuthContextType {
    user: User| undefined,
    setUser: (user:User)=>void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);