import { useState, useEffect } from "react";
import type User from "../../types/User";
import { useParams } from "react-router-dom";

export default function useById() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  async function fetchUser(id: string | undefined) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      const userData = await res.json();
      setUser(userData);
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUser(id);
  }, [id]);

  return { user, message };
}
