import { useNavigate } from "react-router-dom";
import { Category } from "@/shared/interfaces";

export const useCategoryNavigation = () => {
  const navigate = useNavigate();

  const navigateToCategory = (category: Category) => {
    navigate(`/search?category=${encodeURIComponent(category.name)}`);
  };

  return { navigateToCategory };
};
