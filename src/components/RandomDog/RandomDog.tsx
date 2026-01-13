import { useEffect, useState } from "react";

export default function RandomDog() {
  const [image, setImage] = useState<string>("");
  async function fetchDogImage() {
    console.log("fetch");
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    // console.log(data);
    setImage(data.message);
  }
  useEffect(() => {
    fetchDogImage();
  }, []);
  return <div className="dogi">
    <img src={image} alt="Photo random dog" />
  </div>;
}
