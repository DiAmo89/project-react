import type { FC } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

export const ProductCard: FC<Product> = (product) => {
  return (
    <Link
      to={ROUTES.PRODUCT(product.id)}
      className="group block h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-purple-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
            View Details
          </span>
          {product.category?.name && (
            <span className="text-xs text-gray-500 capitalize">
              {product.category.name}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
