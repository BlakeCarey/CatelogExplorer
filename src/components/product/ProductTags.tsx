import React from "react";
import { Badge } from "primereact/badge";
import { Product } from "@/shared/interfaces";

interface ProductTagsProps {
  product: Product;
}

const ProductTags: React.FC<ProductTagsProps> = ({ product }) => {
  if (!product.tags || product.tags.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge
            key={tag}
            value={tag}
            className="px-3 py-1 text-gray-900 text-sm rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
