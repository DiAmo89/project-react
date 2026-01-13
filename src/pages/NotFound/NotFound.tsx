import { Link } from "react-router-dom";
import RandomDog from "../../components/RandomDog/RandomDog";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Back to home page</Link>
      <RandomDog/>

    </div>
  );
}
