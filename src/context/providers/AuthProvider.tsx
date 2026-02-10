import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "../AuthContext";
import type User from "../../types/User";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
