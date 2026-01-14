import { useParams } from "react-router-dom";

export default function CarPage() {
  const { model } = useParams();
  return <div>Car with model {model}</div>;
}
