import { Suspense, useEffect, useState } from "react";
import type Product from "../../types/Product";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts() {
    try {
      const res = await fetch(
        "https://api.escuelajs.co/api/v1/products?limit=12",
      );
      if (!res.ok) throw new Error("Failed to fetch products");
      const arr = await res.json();
      setProducts(arr);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Featured Products
        </h2>
        <p className="text-gray-600">
          Discover our collection of amazing products
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <span className="ml-4 text-lg text-gray-600">
            Loading products...
          </span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="text-center text-gray-600 py-12">No products available</p>
      )}

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-12">
            <p className="text-gray-600">Loading...</p>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
