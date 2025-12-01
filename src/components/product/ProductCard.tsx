import { HeartIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  StarIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { Product } from "@/shared/interfaces";
import { Button } from "primereact/button";
import ImageWithFallback from "@/components/utilities/ImageWithFallback";

interface ProductCardProps {
  product: Product;
  isSaved?: boolean;
  onProductClick?: (product: Product) => void;
  onToggleSave?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSaved = false,
  onProductClick,
  onToggleSave,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 shadow-sm flex items-center gap-4 hover:shadow-md transition">
      <Button
        unstyled
        onClick={() => onProductClick?.(product)}
        className="flex-1 flex cursor-pointer items-center gap-2"
        aria-label={`View details for ${product.name}`}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
          <ImageWithFallback
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            fallback={<PhotoIcon className="size-20" aria-hidden="true" />}
          />
        </div>

        <div className="flex-1 min-w-0 lg:max-w-52 text-left">
          <h3 className="font-medium text-gray-900 text-sm md:text-base lg:text-lg truncate whitespace-normal">
            {product.name}
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mt-1">
            {product.currency} ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-1">
            <StarIcon className="text-yellow-400 size-5" aria-hidden="true" />
            <span className="text-sm md:text-base text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          {!product.inStock && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </Button>

      {onToggleSave && (
        <Button
          unstyled
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(product);
          }}
          className="p-2 shrink-0 cursor-pointer"
          aria-label={isSaved ? "Remove from favorites" : "Add to favorites"}
        >
          {isSaved ? (
            <HeartIconSolid className="size-6 md:size-7 text-red-500" />
          ) : (
            <HeartIcon className="size-6 md:size-7 text-gray-400 hover:text-red-500 transition" />
          )}
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
