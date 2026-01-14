import { Suspense, useEffect, useState } from "react";
import type Product from "../../types/Product";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Suspense>
    </div>
  );
}
