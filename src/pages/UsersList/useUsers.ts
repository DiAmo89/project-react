import { useState, useEffect } from "react";
import type User from "../../types/User";

export default function useUsers() {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      const arr = await res.json();
      setUser(arr);
    }
    fetchUsers();
  }, []);
  return { users };
}
