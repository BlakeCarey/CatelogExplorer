import { useState, useEffect, useCallback, useRef } from "react";
import { Product } from "@/shared/interfaces";

const FAVORITES_KEY = "catalog_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load favorites:", error);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  }, [favorites]);

  const addFavorite = useCallback((product: Product) => {
    setFavorites((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  }, []);

  const removeFavorite = useCallback((productId: string) => {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const toggleFavorite = useCallback((product: Product) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const isFavorite = useCallback(
    (productId: string) => {
      return favorites.some((p) => p.id === productId);
    },
    [favorites]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  };
};
