import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type Product from "../../types/Product";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      {product.images?.[0] && (
        <img src={product.images[0]} alt={product.title} />
      )}
      <p>Price: {product.price}</p>
    </div>
  );
}
