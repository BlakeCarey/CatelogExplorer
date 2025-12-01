export class Categories {
  private categories: Entity<Category> = {
    0: { id: 0, name: "Appliances", icon: "🔌" },
    1: { id: 1, name: "Automotive & DIY", icon: "🛠️" },
    2: { id: 2, name: "Baby & Toddler", icon: "👶" },
    3: { id: 3, name: "Beauty", icon: "💄" },
    4: { id: 4, name: "Books & Courses", icon: "📚" },
    5: { id: 5, name: "Camping & Outdoor", icon: "🏕️" },
    6: { id: 6, name: "Clothing & Shoes", icon: "👗" },
    7: { id: 7, name: "Electronics", icon: "💻" },
    8: { id: 8, name: "Gaming & Media", icon: "🎮" },
    9: { id: 9, name: "Garden, Pool & Patio", icon: "🌿" },
    10: { id: 10, name: "Groceries & Household", icon: "🛒" },
    11: { id: 11, name: "Health & Personal Care", icon: "🩺" },
    12: { id: 12, name: "Homeware", icon: "🏠" },
    13: { id: 13, name: "Liquor", icon: "🍷" },
    14: { id: 14, name: "Office & Stationery", icon: "📎" },
    15: { id: 15, name: "Pets", icon: "🐾" },
    16: { id: 16, name: "Sport & Training", icon: "🏋️" },
    17: { id: 17, name: "Toys", icon: "🧸" },
  };

  public getCategories(): Category[] {
    return Object.values(this.categories);
  }
}

export type Category = {
  id: number;
  name: string;
  icon: string;
};

type Entity<T> = {
  [key: number]: T;
};
