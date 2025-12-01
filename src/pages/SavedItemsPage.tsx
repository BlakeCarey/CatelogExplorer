import { useNavigate } from "react-router-dom";
import Header from "@/components/utilities/Header";
import BottomNavigation from "@/components/utilities/BottomNavigation";
import ProductCard from "@/components/product/ProductCard";
import { useFavorites } from "@/hooks/useFavorites";
import { savedHeaderItems } from "@/shared/constants";
import { Button } from "primereact/button";
import { HeartIcon } from "@heroicons/react/24/outline";

const SavedItemsPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 pb-20 md:pb-0">
      <Header title="Saved Items" headerItems={savedHeaderItems} />

      <div className="px-4 py-4 md:px-8 lg:px-12 md:py-6">
        <output className="text-sm md:text-base text-gray-600 mt-1 px-4 pb-4 md:pb-6 block">
          {favorites.length} {favorites.length === 1 ? "item" : "items"} saved
        </output>
        <div className="max-w-7xl mx-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <HeartIcon className="size-24 mx-auto text-gray-300 mb-4" />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                No saved items yet
              </h2>
              <p className="text-gray-600 mb-6">
                Start exploring and save your favorite products
              </p>
              <Button
                unstyled
                onClick={() => navigate("/search")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                aria-label="Browse products"
              >
                Browse Products
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {favorites.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSaved={isFavorite(product.id)}
                  onProductClick={(prod) => navigate(`/product/${prod.id}`)}
                  onToggleSave={(prod) => toggleFavorite(prod)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default SavedItemsPage;
