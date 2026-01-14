import type { FC } from "react";
import type User from "../../types/User";
import { Link } from "react-router-dom";

export const UserCard: FC<User> = (user) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>
        <Link to={`/app-route/users/${user.id}`}>{user.name}</Link>
      </h3>
      <img src={user.avatar} alt={user.name} />
      <p>{user.email}</p>
      <p>{user.role}</p>
      <p>{user.password}</p>
    </div>
  );
};
