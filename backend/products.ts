export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  inStock: boolean;
  imageUrl: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
  updatedAt: string;
};

type Entity<T> = {
  [key: string]: T;
};

export class Products {
  private products: Entity<Product> = {
    "1": {
      id: "1",
      name: "Wireless Headphones Pro",
      category: "Electronics",
      price: 129.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 87,
      tags: ["audio", "wireless", "over-ear"],
      inStock: true,
      imageUrl: "/images/items/itm_001-1.jpg",
      gallery: ["/images/items/itm_001-1.jpg", "/images/items/itm_001-2.jpg"],
      shortDescription: "Comfortable wireless headphones with 30h battery.",
      fullDescription:
        "High‑quality over‑ear wireless headphones with noise isolation, comfortable padding, and long battery life.",
      specs: {
        weight: "250g",
        battery: "30h",
        bluetooth: "5.2",
      },
      updatedAt: "2025-01-15T12:30:00Z",
    },
    "2": {
      id: "2",
      name: "4K Webcam",
      category: "Electronics",
      price: 89.99,
      currency: "USD",
      rating: 4.4,
      reviewCount: 156,
      tags: ["camera", "streaming", "video"],
      inStock: true,
      imageUrl: "/images/items/itm_002-1.jpg",
      gallery: ["/images/items/itm_002-1.jpg"],
      shortDescription: "Crystal clear 4K video for streaming and calls.",
      fullDescription:
        "Professional-grade webcam with 4K resolution, auto-focus, and low-light correction.",
      specs: {
        resolution: "4K",
        fps: "30",
        connection: "USB-C",
      },
      updatedAt: "2025-01-14T09:00:00Z",
    },
    "3": {
      id: "3",
      name: "Mechanical Keyboard RGB",
      category: "Electronics",
      price: 159.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 342,
      tags: ["keyboard", "gaming", "rgb"],
      inStock: true,
      imageUrl: "/images/items/itm_003-1.jpg",
      gallery: ["/images/items/itm_003-1.jpg", "/images/items/itm_003-2.jpg"],
      shortDescription: "Premium mechanical keyboard with RGB lighting.",
      fullDescription:
        "Professional mechanical keyboard with hot-swappable switches, customizable RGB lighting, and aluminum frame.",
      specs: {
        switches: "Cherry MX Red",
        connection: "USB-C",
        backlight: "RGB",
      },
      updatedAt: "2025-01-13T11:20:00Z",
    },

    "4": {
      id: "4",
      name: "Running Shoes Pro",
      category: "Clothing & Shoes",
      price: 119.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 234,
      tags: ["shoes", "running", "sports"],
      inStock: true,
      imageUrl: "/images/items/itm_004-1.jpg",
      gallery: ["/images/items/itm_004-1.jpg"],
      shortDescription: "Lightweight running shoes with superior cushioning.",
      fullDescription:
        "Professional running shoes with breathable mesh, responsive cushioning, and durable rubber outsole.",
      specs: {
        weight: "280g",
        drop: "10mm",
        material: "Mesh & Rubber",
      },
      updatedAt: "2025-01-12T14:30:00Z",
    },
    "5": {
      id: "5",
      name: "Cotton T-Shirt Pack",
      category: "Clothing & Shoes",
      price: 29.99,
      currency: "USD",
      rating: 4.3,
      reviewCount: 189,
      tags: ["clothing", "casual", "basics"],
      inStock: true,
      imageUrl: "/images/items/itm_005-1.jpg",
      gallery: ["/images/items/itm_005-1.jpg"],
      shortDescription: "Pack of 3 premium cotton t-shirts.",
      fullDescription:
        "Soft, comfortable cotton t-shirts in classic colors. Machine washable and pre-shrunk.",
      specs: {
        material: "100% Cotton",
        fit: "Regular",
        pack: "3 pieces",
      },
      updatedAt: "2025-01-11T10:15:00Z",
    },

    "6": {
      id: "6",
      name: "Stainless Steel Water Bottle",
      category: "Homeware",
      price: 18.5,
      currency: "USD",
      rating: 4.8,
      reviewCount: 210,
      tags: ["kitchen", "bottle"],
      inStock: false,
      imageUrl: "/images/items/itm_006-1.jpg",
      gallery: ["/images/items/itm_006-1.jpg", "/images/items/itm_006-2.jpg"],
      shortDescription: "Keeps drinks hot or cold for hours.",
      fullDescription:
        "Durable stainless steel insulated bottle perfect for travel and workouts.",
      specs: {
        capacity: "1L",
        material: "Stainless Steel",
      },
      updatedAt: "2025-01-10T15:20:00Z",
    },
    "7": {
      id: "7",
      name: "Smart LED Bulb Set",
      category: "Homeware",
      price: 45.99,
      currency: "USD",
      rating: 4.4,
      reviewCount: 167,
      tags: ["lighting", "smart-home", "led"],
      inStock: true,
      imageUrl: "/images/items/itm_007-1.jpg",
      gallery: ["/images/items/itm_007-1.jpg"],
      shortDescription: "WiFi-enabled color-changing LED bulbs.",
      fullDescription:
        "Set of 4 smart LED bulbs with app control, voice assistant compatibility, and 16 million colors.",
      specs: {
        wattage: "9W",
        lumens: "800",
        connectivity: "WiFi",
      },
      updatedAt: "2025-01-09T16:45:00Z",
    },

    "8": {
      id: "8",
      name: "Facial Cleanser Set",
      category: "Beauty",
      price: 34.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 278,
      tags: ["skincare", "cleanser", "organic"],
      inStock: true,
      imageUrl: "/images/items/itm_008-1.jpg",
      gallery: ["/images/items/itm_008-1.jpg"],
      shortDescription: "Gentle organic facial cleanser for all skin types.",
      fullDescription:
        "Dermatologist-tested facial cleanser with natural ingredients, perfect for daily use.",
      specs: {
        volume: "200ml",
        type: "All skin types",
        ingredients: "Organic",
      },
      updatedAt: "2025-01-08T09:30:00Z",
    },

    "9": {
      id: "9",
      name: "Wireless Gaming Controller",
      category: "Gaming & Media",
      price: 59.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 421,
      tags: ["gaming", "controller", "wireless"],
      inStock: true,
      imageUrl: "/images/items/itm_009-1.jpg",
      gallery: ["/images/items/itm_009-1.jpg"],
      shortDescription: "Premium wireless controller with haptic feedback.",
      fullDescription:
        "High-precision wireless gaming controller with customizable buttons, haptic feedback, and 20-hour battery.",
      specs: {
        battery: "20h",
        connection: "Bluetooth 5.0",
        compatibility: "PC, Console",
      },
      updatedAt: "2025-01-07T13:20:00Z",
    },

    "10": {
      id: "10",
      name: "Yoga Mat Pro",
      category: "Sport & Training",
      price: 39.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 312,
      tags: ["yoga", "fitness", "mat"],
      inStock: true,
      imageUrl: "/images/items/itm_010-1.jpg",
      gallery: ["/images/items/itm_010-1.jpg"],
      shortDescription: "Non-slip premium yoga mat with carrying strap.",
      fullDescription:
        "Extra-thick yoga mat with superior grip, eco-friendly materials, and easy-to-clean surface.",
      specs: {
        thickness: "6mm",
        material: "TPE",
        dimensions: "183cm x 61cm",
      },
      updatedAt: "2025-01-06T11:45:00Z",
    },
    "11": {
      id: "11",
      name: "Adjustable Dumbbells Set",
      category: "Sport & Training",
      price: 149.99,
      currency: "USD",
      rating: 4.8,
      reviewCount: 289,
      tags: ["weights", "fitness", "strength"],
      inStock: true,
      imageUrl: "/images/items/itm_011-1.jpg",
      gallery: ["/images/items/itm_011-1.jpg"],
      shortDescription: "Space-saving adjustable dumbbells 5-25kg.",
      fullDescription:
        "Compact adjustable dumbbell set with quick-change weight system, perfect for home workouts.",
      specs: {
        range: "5-25kg",
        material: "Steel & Rubber",
        pieces: "2",
      },
      updatedAt: "2025-01-05T14:00:00Z",
    },

    "12": {
      id: "12",
      name: "Complete Programming Course Bundle",
      category: "Books & Courses",
      price: 79.99,
      currency: "USD",
      rating: 4.9,
      reviewCount: 512,
      tags: ["programming", "education", "online-course"],
      inStock: true,
      imageUrl: "/images/items/itm_012-1.jpg",
      gallery: ["/images/items/itm_012-1.jpg"],
      shortDescription: "Comprehensive programming course with certification.",
      fullDescription:
        "Master modern programming with this complete bundle covering JavaScript, Python, and React.",
      specs: {
        duration: "40 hours",
        format: "Video + PDF",
        certificate: "Yes",
      },
      updatedAt: "2025-01-04T10:30:00Z",
    },

    "13": {
      id: "13",
      name: "Ergonomic Office Chair",
      category: "Office & Stationery",
      price: 199.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 234,
      tags: ["furniture", "office", "ergonomic"],
      inStock: true,
      imageUrl: "/images/items/itm_013-1.jpg",
      gallery: ["/images/items/itm_013-1.jpg"],
      shortDescription: "Adjustable ergonomic chair with lumbar support.",
      fullDescription:
        "Professional office chair with full adjustability, breathable mesh, and premium cushioning.",
      specs: {
        height: "Adjustable",
        material: "Mesh & Foam",
        warranty: "5 years",
      },
      updatedAt: "2025-01-03T15:20:00Z",
    },

    "14": {
      id: "14",
      name: "Automatic Pet Feeder",
      category: "Pets",
      price: 69.99,
      currency: "USD",
      rating: 4.4,
      reviewCount: 178,
      tags: ["pets", "feeder", "automatic"],
      inStock: true,
      imageUrl: "/images/items/itm_014-1.jpg",
      gallery: ["/images/items/itm_014-1.jpg"],
      shortDescription: "Smart automatic pet feeder with timer.",
      fullDescription:
        "Programmable pet feeder with portion control, voice recording, and smartphone app.",
      specs: {
        capacity: "4L",
        meals: "Up to 6 per day",
        connectivity: "WiFi",
      },
      updatedAt: "2025-01-02T12:00:00Z",
    },

    "15": {
      id: "15",
      name: "Educational Building Blocks Set",
      category: "Toys",
      price: 44.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 456,
      tags: ["toys", "educational", "kids"],
      inStock: true,
      imageUrl: "/images/items/itm_015-1.jpg",
      gallery: ["/images/items/itm_015-1.jpg"],
      shortDescription: "500-piece creative building blocks set.",
      fullDescription:
        "High-quality building blocks for creative play and learning, compatible with major brands.",
      specs: {
        pieces: "500",
        age: "3+",
        material: "ABS Plastic",
      },
      updatedAt: "2025-01-01T09:15:00Z",
    },

    "16": {
      id: "16",
      name: "Smartwatch",
      category: "Electronics",
      price: 149.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 170,
      tags: ["smartwatch", "wearable", "fitness"],
      inStock: true,
      imageUrl: "/images/items/itm_016-1.jpg",
      gallery: ["/images/items/itm_016-1.jpg", "/images/items/itm_016-2.jpg"],
      shortDescription:
        "Water-resistant smartwatch with GPS tracking and health monitoring.",
      fullDescription:
        "Monitor your activity, receive notifications, and control music on the go.",
      specs: {
        batteryLife: "5 days",
        waterResistance: "5ATM",
      },
      updatedAt: "2025-01-16T08:00:00Z",
    },

    "17": {
      id: "17",
      name: "Laptop Cooling Pad",
      category: "Electronics",
      price: 29.99,
      currency: "USD",
      rating: 4.3,
      reviewCount: 60,
      tags: ["laptop", "cooling", "accessory"],
      inStock: true,
      imageUrl: "/images/items/itm_017-1.jpg",
      gallery: ["/images/items/itm_017-1.jpg"],
      shortDescription: "Cooling pad with quiet fans and adjustable height.",
      fullDescription:
        "Keep your laptop cool during extended use and improve performance.",
      specs: {
        fans: "2",
        weight: "600g",
      },
      updatedAt: "2025-01-12T09:30:00Z",
    },

    "18": {
      id: "18",
      name: "Wireless Charger",
      category: "Electronics",
      price: 22.99,
      currency: "USD",
      rating: 4.4,
      reviewCount: 75,
      tags: ["charger", "wireless", "fast-charge"],
      inStock: true,
      imageUrl: "/images/items/itm_018-1.jpg",
      gallery: ["/images/items/itm_018-1.jpg"],
      shortDescription:
        "Fast wireless charging pad compatible with Qi devices.",
      fullDescription:
        "Compact design with non-slip surface and LED charging indicator.",
      specs: {
        output: "10W",
        weight: "150g",
      },
      updatedAt: "2025-01-13T11:25:00Z",
    },

    "19": {
      id: "19",
      name: "Adjustable Laptop Stand",
      category: "Electronics",
      price: 39.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 85,
      tags: ["laptop", "stand", "adjustable"],
      inStock: true,
      imageUrl: "/images/items/itm_019-1.jpg",
      gallery: ["/images/items/itm_019-1.jpg", "/images/items/itm_019-2.jpg"],
      shortDescription:
        "Ergonomic adjustable laptop stand with anti-skid pads.",
      fullDescription:
        "Improves posture by elevating laptop to eye-level and improving airflow.",
      specs: {
        weight: "800g",
        maxLoad: "10kg",
      },
      updatedAt: "2025-01-12T15:45:00Z",
    },
    "20": {
      id: "20",
      name: "Electric Toothbrush",
      category: "Health & Personal Care",
      price: 49.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 110,
      tags: ["health", "toothbrush", "electric"],
      inStock: true,
      imageUrl: "/images/items/itm_020-1.jpg",
      gallery: ["/images/items/itm_020-1.jpg"],
      shortDescription:
        "Rechargeable electric toothbrush with 3 cleaning modes.",
      fullDescription:
        "Provides efficient plaque removal and comes with a travel case.",
      specs: {
        battery: "2 weeks",
        weight: "150g",
      },
      updatedAt: "2025-01-15T13:10:00Z",
    },
    "101": {
      id: "101",
      name: "Smart Air Purifier",
      category: "Appliances",
      price: 199.99,
      currency: "USD",
      rating: 4.3,
      reviewCount: 110,
      tags: ["air", "purifier", "smart"],
      inStock: true,
      imageUrl: "/images/items/itm_101-1.jpg",
      gallery: ["/images/items/itm_101-1.jpg", "/images/items/itm_101-2.jpg"],
      shortDescription: "Efficient air purifier with smartphone control.",
      fullDescription:
        "Removes 99.97% airborne particles, app connectivity, and quiet operation.",
      specs: {
        weight: "3.5kg",
        coverage: "400 sq ft",
      },
      updatedAt: "2025-01-20T10:00:00Z",
    },

    "102": {
      id: "102",
      name: "Car Emergency Kit",
      category: "Automotive & DIY",
      price: 45.99,
      currency: "USD",
      rating: 4.4,
      reviewCount: 58,
      tags: ["car", "emergency", "kit"],
      inStock: true,
      imageUrl: "/images/items/itm_102-1.jpg",
      gallery: ["/images/items/itm_102-1.jpg"],
      shortDescription:
        "Complete automotive emergency kit for roadside safety.",
      fullDescription:
        "Includes jumper cables, flashlight, first aid, and reflective vest.",
      specs: {
        weight: "1.2kg",
        components: "10 items",
      },
      updatedAt: "2025-01-18T08:45:00Z",
    },

    "103": {
      id: "103",
      name: "Baby Stroller",
      category: "Baby & Toddler",
      price: 159.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 85,
      tags: ["baby", "stroller", "toddler"],
      inStock: false,
      imageUrl: "/images/items/itm_103-1.jpg",
      gallery: ["/images/items/itm_103-1.jpg", "/images/items/itm_103-2.jpg"],
      shortDescription:
        "Lightweight and foldable baby stroller for easy travel.",
      fullDescription:
        "Smooth ride stroller with adjustable recline and storage basket.",
      specs: {
        weight: "8kg",
        foldable: "Yes",
      },
      updatedAt: "2025-01-16T14:00:00Z",
    },
    "104": {
      id: "104",
      name: "Lipstick Set",
      category: "Beauty",
      price: 29.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 145,
      tags: ["beauty", "lipstick", "makeup"],
      inStock: true,
      imageUrl: "/images/items/itm_104-1.jpg",
      gallery: ["/images/items/itm_104-1.jpg"],
      shortDescription: "Set of 5 vibrant lipsticks with moisturizing formula.",
      fullDescription:
        "Long-lasting colors with smooth application and rich texture.",
      specs: {
        weight: "15g each",
        shades: "5",
      },
      updatedAt: "2025-01-15T09:30:00Z",
    },

    "105": {
      id: "105",
      name: "Self-Help Book Bundle",
      category: "Books & Courses",
      price: 49.99,
      currency: "USD",
      rating: 4.8,
      reviewCount: 210,
      tags: ["books", "self-help", "courses"],
      inStock: true,
      imageUrl: "/images/items/itm_105-1.jpg",
      gallery: ["/images/items/itm_105-1.jpg"],
      shortDescription: "Collection of top-rated personal development books.",
      fullDescription:
        "Includes 5 best-selling titles covering motivation and productivity.",
      specs: {
        pages: "total 2000",
        format: "paperback",
      },
      updatedAt: "2025-01-17T13:55:00Z",
    },

    "106": {
      id: "106",
      name: "Camping Tent 4-Person",
      category: "Camping & Outdoor",
      price: 120.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 98,
      tags: ["camping", "tent", "outdoor"],
      inStock: true,
      imageUrl: "/images/items/itm_106-1.jpg",
      gallery: ["/images/items/itm_106-1.jpg", "/images/items/itm_106-2.jpg"],
      shortDescription: "Spacious camping tent with weatherproof design.",
      fullDescription:
        "Easy setup tent suitable for family camping trips with ventilation windows.",
      specs: {
        weight: "5.5kg",
        capacity: "4-person",
      },
      updatedAt: "2025-01-18T10:45:00Z",
    },

    "107": {
      id: "107",
      name: "Men's Running Shoes",
      category: "Clothing & Shoes",
      price: 69.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 135,
      tags: ["clothing", "shoes", "running"],
      inStock: true,
      imageUrl: "/images/items/itm_107-1.jpg",
      gallery: ["/images/items/itm_107-1.jpg"],
      shortDescription: "Lightweight and breathable running shoes for men.",
      fullDescription:
        "Features cushioned sole and durable outsole for daily runs.",
      specs: {
        weight: "300g",
        material: "mesh",
      },
      updatedAt: "2025-01-16T11:15:00Z",
    },

    "108": {
      id: "108",
      name: "Gaming Laptop",
      category: "Electronics",
      price: 1249.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 160,
      tags: ["gaming", "electronics", "laptop"],
      inStock: false,
      imageUrl: "/images/items/itm_108-1.jpg",
      gallery: ["/images/items/itm_108-1.jpg", "/images/items/itm_108-2.jpg"],
      shortDescription: "High performance 15-inch gaming laptop with RTX GPU.",
      fullDescription:
        "Latest generation processor, 16GB RAM, 512GB SSD for fast gaming and multitasking.",
      specs: {
        weight: "2.3kg",
        gpu: "NVIDIA RTX 3060",
      },
      updatedAt: "2025-01-14T14:20:00Z",
    },

    "109": {
      id: "109",
      name: "4K Streaming Media Player",
      category: "Gaming & Media",
      price: 59.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 100,
      tags: ["media", "gaming", "streaming"],
      inStock: true,
      imageUrl: "/images/items/itm_109-1.jpg",
      gallery: ["/images/items/itm_109-1.jpg"],
      shortDescription: "Stream movies and games in 4K UHD resolution.",
      fullDescription:
        "Supports multiple streaming apps and features voice remote control.",
      specs: {
        output: "4K",
        ports: "HDMI, USB",
      },
      updatedAt: "2025-01-15T16:00:00Z",
    },

    "110": {
      id: "110",
      name: "Outdoor Patio Set",
      category: "Garden, Pool & Patio",
      price: 499.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 45,
      tags: ["garden", "patio", "outdoor"],
      inStock: true,
      imageUrl: "/images/items/itm_110-1.jpg",
      gallery: ["/images/items/itm_110-1.jpg", "/images/items/itm_110-2.jpg"],
      shortDescription: "Comfortable 5-piece outdoor patio furniture set.",
      fullDescription:
        "Weather-resistant materials with cushioned seating for relaxing outdoors.",
      specs: {
        material: "rattan",
        weight: "20kg",
      },
      updatedAt: "2025-01-17T09:00:00Z",
    },

    "111": {
      id: "111",
      name: "Organic Grocery Basket",
      category: "Groceries & Household",
      price: 59.99,
      currency: "USD",
      rating: 4.9,
      reviewCount: 310,
      tags: ["groceries", "organic", "food"],
      inStock: true,
      imageUrl: "/images/items/itm_111-1.jpg",
      gallery: ["/images/items/itm_111-1.jpg"],
      shortDescription: "Selection of fresh organic fruits and vegetables.",
      fullDescription:
        "Carefully packed seasonal organic produce from local farms.",
      specs: {
        weight: "5kg",
        varieties: "seasonal",
      },
      updatedAt: "2025-01-18T12:00:00Z",
    },

    "112": {
      id: "112",
      name: "Vitamin C Supplement",
      category: "Health & Personal Care",
      price: 19.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 210,
      tags: ["health", "supplement", "vitamin"],
      inStock: true,
      imageUrl: "/images/items/itm_112-1.jpg",
      gallery: ["/images/items/itm_112-1.jpg"],
      shortDescription: "Vitamin C tablets for immune system support.",
      fullDescription:
        "1000mg Vitamin C per tablet with antioxidants and no artificial colors.",
      specs: {
        count: "100 tablets",
        dosage: "1000mg",
      },
      updatedAt: "2025-01-15T10:20:00Z",
    },

    "113": {
      id: "113",
      name: "Ceramic Dinnerware Set",
      category: "Homeware",
      price: 89.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 75,
      tags: ["homeware", "dinnerware", "ceramic"],
      inStock: true,
      imageUrl: "/images/items/itm_113-1.jpg",
      gallery: ["/images/items/itm_113-1.jpg", "/images/items/itm_113-2.jpg"],
      shortDescription: "12-piece ceramic dinnerware set with elegant design.",
      fullDescription:
        "Includes plates, bowls, and mugs suitable for everyday use and special occasions.",
      specs: {
        material: "ceramic",
        weight: "4kg",
      },
      updatedAt: "2025-01-16T12:00:00Z",
    },

    "114": {
      id: "114",
      name: "Red Wine Bottle",
      category: "Liquor",
      price: 22.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 200,
      tags: ["liquor", "wine", "red"],
      inStock: true,
      imageUrl: "/images/items/itm_114-1.jpg",
      gallery: ["/images/items/itm_114-1.jpg"],
      shortDescription: "Bottle of premium Cabernet Sauvignon red wine.",
      fullDescription:
        "Rich aroma with notes of cherries and oak; perfect for dinner.",
      specs: {
        volume: "750ml",
        alcohol: "13.5%",
      },
      updatedAt: "2025-01-14T19:00:00Z",
    },

    "115": {
      id: "115",
      name: "Executive Office Chair",
      category: "Office & Stationery",
      price: 149.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 95,
      tags: ["office", "chair", "furniture"],
      inStock: true,
      imageUrl: "/images/items/itm_115-1.jpg",
      gallery: ["/images/items/itm_115-1.jpg"],
      shortDescription:
        "High back executive office chair with adjustable height.",
      fullDescription:
        "Leather upholstery with lumbar support and smooth rolling casters.",
      specs: {
        maxWeight: "130kg",
        material: "leather",
      },
      updatedAt: "2025-01-17T14:30:00Z",
    },

    "116": {
      id: "116",
      name: "Dog Leash and Collar Set",
      category: "Pets",
      price: 24.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 80,
      tags: ["pets", "dog", "leash"],
      inStock: true,
      imageUrl: "/images/items/itm_116-1.jpg",
      gallery: ["/images/items/itm_116-1.jpg"],
      shortDescription: "Durable nylon leash and collar set for medium dogs.",
      fullDescription:
        "Adjustable collar with reflective strips and sturdy clip leash.",
      specs: {
        length: "120cm",
        collarSize: "M",
      },
      updatedAt: "2025-01-15T09:00:00Z",
    },

    "117": {
      id: "117",
      name: "Home Gym Dumbbell Set",
      category: "Sport & Training",
      price: 89.99,
      currency: "USD",
      rating: 4.8,
      reviewCount: 130,
      tags: ["sport", "training", "dumbbells"],
      inStock: true,
      imageUrl: "/images/items/itm_117-1.jpg",
      gallery: ["/images/items/itm_117-1.jpg", "/images/items/itm_117-2.jpg"],
      shortDescription:
        "Adjustable dumbbell set suitable for strength training.",
      fullDescription:
        "Easy to change weights from 5 to 25 lbs with comfortable grips.",
      specs: {
        weightRange: "5-25 lbs",
        material: "iron",
      },
      updatedAt: "2025-01-18T16:15:00Z",
    },

    "118": {
      id: "118",
      name: "Educational Puzzle Toy",
      category: "Toys",
      price: 19.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 140,
      tags: ["toys", "education", "puzzle"],
      inStock: true,
      imageUrl: "/images/items/itm_118-1.jpg",
      gallery: ["/images/items/itm_118-1.jpg"],
      shortDescription: "Colorful wooden puzzle toy for children 3+ years.",
      fullDescription:
        "Develops problem-solving and fine motor skills in an engaging way.",
      specs: {
        pieces: "30",
        material: "wood",
      },
      updatedAt: "2025-01-16T13:45:00Z",
    },
  };

  public getAllProducts(): Product[] {
    return Object.values(this.products);
  }

  public getProductById(id: string): Product | undefined {
    return this.products[id];
  }
}
