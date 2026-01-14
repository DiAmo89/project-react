import { useEffect, useState } from "react";
import type User from "../../types/User";
import { UserCard } from "../../components/UserCard/UserCard";

export default function UsersList() {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      const arr = await res.json();
      setUser(arr);
    }
    fetchUsers();
  }, []);
  
  if (!users) return <p>Loading...</p>;
  return (
    <div>
      {users.map((user: User) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
