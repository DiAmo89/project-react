import ProductList from "../../components/ProductList/ProductList";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">Featured Products</h1>
        <p className="text-xl opacity-90 max-w-2xl">
          Discover our curated collection of amazing products. Browse through
          thousands of items carefully selected just for you.
        </p>
      </div>

      {/* Products List */}
      <ProductList />

      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
