import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Image } from "primereact/image";
import ImageWithFallback from "@/components/utilities/ImageWithFallback";
import { Product } from "@/shared/interfaces";

interface ProductImageGalleryProps {
  product: Product;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  product,
}) => {
  return (
    <div className="bg-white rounded-lg p-8 md:p-12 lg:p-16">
      <div className="flex justify-center mb-4">
        <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            fallback={<PhotoIcon className="size-20" aria-hidden="true" />}
          />
        </div>
      </div>
      {product.gallery && product.gallery.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {product.gallery.map((img, idx) => (
            <div
              key={img}
              className="shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden"
            >
              <Image
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
