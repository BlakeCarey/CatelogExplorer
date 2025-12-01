import { useParams } from "react-router-dom";
import BottomNavigation from "@/components/utilities/BottomNavigation";
import { useGetProductByIdQuery } from "@/services/products";
import { useFavorites } from "@/hooks/useFavorites";
import Loader from "@/components/utilities/Loader";
import ProductNotFound from "@/components/product/ProductNotFount";
import { Button } from "primereact/button";
import ProductDetailsHeader from "@/components/product/ProductDetailsHeader";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductRating from "@/components/product/ProductRating";
import ProductDescription from "@/components/product/ProductDescription";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductTags from "@/components/product/ProductTags";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id || "");
  const { isFavorite, toggleFavorite } = useFavorites();

  const productIsFavorite = product ? isFavorite(product.id) : false;

  if (isLoading) {
    return <Loader text="Loading product..." />;
  }

  if (error || !product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 pb-20 md:pb-0">
      <ProductDetailsHeader
        product={product}
        productIsFavorite={productIsFavorite}
        toggleFavorite={toggleFavorite}
      />

      <div className="px-4 py-6 md:px-8 lg:px-12 md:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <ProductImageGallery product={product} />

            <div className="bg-white rounded-lg p-6 md:p-8 space-y-4 md:space-y-6">
              <ProductInfo product={product} />
              <ProductRating product={product} />
              <ProductDescription product={product} />
              <ProductSpecifications product={product} />
              <ProductTags product={product} />

              <Button
                unstyled
                onClick={() => toggleFavorite(product)}
                className={`w-full py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg transition mt-6 md:mt-8 ${
                  productIsFavorite
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                aria-pressed={productIsFavorite}
              >
                {productIsFavorite
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ProductDetailsPage;
