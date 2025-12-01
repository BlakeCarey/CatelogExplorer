import { Category } from "@/shared/interfaces";
import { Button } from "primereact/button";

interface CategoryCardProps {
  category: Category;
  onCategoryClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onCategoryClick,
}) => {
  return (
    <Button
      unstyled
      key={category.id}
      onClick={() => onCategoryClick?.()}
      className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition flex flex-col items-center gap-3 cursor-pointer"
    >
      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-3xl md:text-4xl lg:text-5xl" aria-hidden="true">
          {category.icon}
        </div>
      </div>
      <span className="text-sm md:text-base font-medium text-gray-900 text-center">
        {category.name}
      </span>
    </Button>
  );
};

export default CategoryCard;
