import { useGetCategoriesQuery } from "@/services/categories";
import { useCategoryNavigation } from "@/hooks/useCategoryNavigation";
import { homeHeaderItems } from "@/shared/constants.tsx";
import Header from "@/components/utilities/Header";
import BottomNavigation from "@/components/utilities/BottomNavigation";
import CategoryCard from "@/components/category/CategoryCard";
import Loader from "@/components/utilities/Loader";
import Info from "@/components/utilities/Info";

const Home = () => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  const { navigateToCategory } = useCategoryNavigation();
  const categoriesData = categories || [];

  if (isLoading) {
    return <Loader text="Loading categories..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <Info
          text="Unable to Load Categories. We're having trouble connecting to the server. Please check your
            internet connection and try again."
          color="error"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 pb-20 md:pb-0">
      <Header title="Catalogs" headerItems={homeHeaderItems} />

      <div className="px-4 py-6 md:px-8 lg:px-12 md:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
            Browse Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categoriesData.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
                onCategoryClick={() => navigateToCategory(category)}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Home;
