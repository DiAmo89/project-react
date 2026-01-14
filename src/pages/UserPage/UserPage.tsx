import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type User from "../../types/User";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchUser() {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      const data = await res.json();
      setUser(data);
    }
    fetchUser();
  }, [id]);
  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>{user.name}</h2>
      {user.avatar && <img src={user.avatar} alt={user.name} />}
      <p>Email : {user.email}</p>
      <p>Role : {user.role}</p>
      <p>User paswword : {user.password}</p>
    </div>
  );
}
