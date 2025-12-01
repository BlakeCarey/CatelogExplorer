import { useGetProductsQuery } from "@/services/products";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFavorites } from "./useFavorites";

export const useSearchHooks = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");
  const [inStockOnly, setInStockOnly] = useState(
    searchParams.get("inStock") === "true"
  );
  const [showFilters, setShowFilters] = useState(false);

  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCategory) params.set("category", selectedCategory);
    if (sortBy) params.set("sort", sortBy);
    if (inStockOnly) params.set("inStock", "true");
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedCategory, sortBy, inStockOnly, setSearchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          product.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, inStockOnly, sortBy]);

  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category))).sort();
  }, [products]);

  const sortyByOptions = [
    { label: "Default", value: "" },
    { label: "Name (A-Z)", value: "name" },
    { label: "Price (Low to High)", value: "price-asc" },
    { label: "Price (High to Low)", value: "price-desc" },
    { label: "Rating (High to Low)", value: "rating" },
  ];

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortBy("");
    setInStockOnly(false);
  };

  return {
    navigate,
    showFilters,
    setShowFilters,
    filteredProducts,
    isLoading,
    error,
    isFavorite,
    toggleFavorite,
    uniqueCategories,
    sortyByOptions,
    handleClearFilters,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    inStockOnly,
    setInStockOnly,
  };
};
