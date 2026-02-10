import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type Product from "../../types/Product";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-red-900 mb-3">Product Not Found</h2>
        <p className="text-red-800 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">🛍️ Product Details</h1>
        <p className="text-lg opacity-90">View full information about this product</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <span className="text-4xl">🖼️</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title & Price */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h2>
            <p className="text-5xl font-bold text-blue-600 mb-4">${product.price}</p>
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                🛒 Add to Cart
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-all">
                ❤️ Wishlist
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📝 Description</h3>
            <p className="text-gray-700 leading-relaxed line-clamp-4">
              {product.description || "No description available"}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
              <p className="text-sm text-green-700 font-semibold">Category</p>
              <p className="text-lg font-bold text-green-900">
                {product.category?.name || "N/A"}
              </p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <p className="text-sm text-purple-700 font-semibold">Product ID</p>
              <p className="text-lg font-bold text-purple-900">#{product.id}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Images */}
      {product.images && product.images.length > 1 && (
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🖼️ More Images</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${product.title} ${idx}`}
                className="w-full h-40 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      )}

      {/* Related Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
          <p className="text-4xl mb-3">✨</p>
          <h4 className="font-bold text-blue-900 mb-2">High Quality</h4>
          <p className="text-blue-800 text-sm">Premium products guaranteed</p>
        </div>
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
          <p className="text-4xl mb-3">🚚</p>
          <h4 className="font-bold text-green-900 mb-2">Fast Shipping</h4>
          <p className="text-green-800 text-sm">Delivered to your door quickly</p>
        </div>
        <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
          <p className="text-4xl mb-3">💯</p>
          <h4 className="font-bold text-purple-900 mb-2">Satisfaction</h4>
          <p className="text-purple-800 text-sm">100% guaranteed satisfaction</p>
        </div>
      </div>

      {/* Back Button */}
      <div>
        <Link
          to="/products"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
