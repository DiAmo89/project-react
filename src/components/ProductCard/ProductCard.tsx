import type { FC } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";

export const ProductCard: FC<Product> = (product) => {
  return (
    <div>
      <h3>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </h3>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.price}</p>
    </div>
  );
};
