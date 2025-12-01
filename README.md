# Catalog Explorer

A responsive product catalog browsing application built with React and TypeScript. This application enables users to browse products, search, filter items, view detailed product information and finally save favorite items with local persistence.

## Features

- **Product Browsing**: View products in a responsive grid layout across multiple categories
- **Advanced Search & Filtering**: Search products by name, filter by category, sort by various criteria, and filter by stock availability
- **Product Details**: View comprehensive product information including images, specifications, ratings, and reviews
- **Favorites/Watchlist**: Save favorite products with localStorage persistence across browser sessions
- **Shareable URLs**: All search, filter, and sort states are synced with the URL for easy sharing
- **Responsive Design**: Mobile-first design that works seamlessly on all screen sizes
- **Accessibility**: Full keyboard navigation, ARIA labels, and screen reader support
- **Error Handling**: Graceful handling of network errors with clear user feedback
- **Mock API**: Custom REST API implementation using MSW (Mock Service Worker)

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4 + PrimeReact UI Components
- **State Management**: Redux Toolkit with RTK Query
- **Routing**: React Router v7
- **Mock API**: MSW (Mock Service Worker)
- **Icons**: Heroicons
- **Data Persistence**: localStorage

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)

You can verify your installations by running:

```bash
node --version
npm --version
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd catalog-explorer
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- React and React DOM
- TypeScript
- Vite
- Tailwind CSS
- PrimeReact
- Redux Toolkit
- React Router
- MSW (Mock Service Worker)
- And all other dependencies listed in package.json

## Running the Application Locally

### Development Mode

To run the application in development mode with hot module replacement:

```bash
npm run dev
```

The application will start on [http://localhost:5173](http://localhost:5173) (or the next available port).

**What happens in development mode:**
- Vite dev server starts with HMR (Hot Module Replacement)
- MSW intercepts API calls and serves mock data
- TypeScript compilation happens on-the-fly
- Tailwind CSS processes styles in real-time

### Linting

To check for code quality issues:

```bash
npm run lint
```

This runs ESLint on all TypeScript and TSX files with strict rules.

## Building for Production

### Create Production Build

To create an optimized production build:

```bash
npm run build
```

**What happens during the build:**
1. TypeScript compiler (\`tsc\`) checks for type errors
2. Vite bundles and optimizes the application:
   - Minifies JavaScript and CSS
   - Tree-shakes unused code
   - Optimizes assets
   - Generates source maps
3. Output is created in the \`dist/\` directory

The build process will fail if there are any TypeScript errors or linting issues.

### Build Output

After a successful build, you'll find:
- \`dist/index.html\` - Main HTML file
- \`dist/assets/\` - Bundled and minified JavaScript, CSS, and other assets
- \`dist/mockServiceWorker.js\` - MSW service worker for the mock API

## Running the Production Build Locally

After building, you can preview the production build locally:

```bash
npm run preview
```

This starts a local server (usually on [http://localhost:4173](http://localhost:4173)) that serves the production build from the \`dist/\` directory.

**Important Notes:**
- The preview server simulates a production environment
- The MSW service worker will intercept API calls just like in development
- This is useful for testing the production build before deployment

## API Endpoints

The application uses MSW to mock the following REST API endpoints:

### Get All Products
```
GET /api/products
Returns: Product[]
```

### Get Product by ID
```
GET /api/products/:id
Returns: Product
```

### Get All Categories
```
GET /api/categories
Returns: Category[]
```

## Data Models

### Product
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  category: string;
  tags: string[];
  inStock: boolean;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  updatedAt: string;
}
```

### Category
```typescript
interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
```

## Features in Detail

### 1. Browse Products
- Grid layout with responsive columns (1 on mobile, 2 on tablet, 3 on desktop)
- Product cards show key information: image, name, price, rating, stock status
- Category-based navigation from the home page
- Infinite scrolling capable architecture

### 2. Search & Filter
- **Search**: Real-time text search across product names
- **Category Filter**: Filter by product category
- **Sort Options**:
  - Name (A-Z)
  - Price (Low to High)
  - Price (High to Low)
  - Rating (High to Low)
- **Stock Filter**: Show only in-stock items
- **URL Sync**: All filters and search terms are synced with URL query parameters

### 3. Product Details
- Full product information page
- Image gallery with main image and thumbnails
- Product specifications table
- Customer ratings and reviews
- Add to favorites functionality
- Breadcrumb navigation

### 4. Saved Items
- Add/remove products from favorites
- View all saved items in a dedicated page
- Persistence using localStorage
- Toast notifications for user feedback

### 5. Responsive Navigation
- Top navigation bar on desktop with home and favorites links
- Bottom navigation bar on mobile for easy thumb access
- Smooth transitions between views

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators on all interactive elements
- Screen reader compatible
- Color contrast ratios meet WCAG AA standards
- Skip links for keyboard users
- Descriptive alt text for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The application can be deployed to any static hosting service:

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload the dist/ directory to Netlify
```

### GitHub Pages
```bash
npm run build
# Copy contents of dist/ to your GitHub Pages repository
```

### Custom Server
```bash
npm run build
# Serve the dist/ directory with any static file server
# Example with serve:
npx serve dist
```

## Environment Configuration

The application currently doesn't require environment variables, but you can add them by creating a \`.env\` file:

```env
VITE_API_URL=http://localhost:3000/api
```

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### MSW Service Worker Not Installing
If you see MSW-related errors:
1. Clear browser cache
2. Delete \`public/mockServiceWorker.js\`
3. Run \`npx msw init public/\`
4. Restart the dev server

### Build Failures
If the build fails:
1. Check for TypeScript errors: \`npx tsc --noEmit\`
2. Check for linting errors: \`npm run lint\`
3. Clear the cache: \`rm -rf node_modules dist && npm install\`

### Slow Performance
If the application feels slow:
1. Check browser DevTools Performance tab
2. Ensure you're not running dev tools in production mode
3. Check that service worker is properly registered

## Additional Notes for Reviewers

### Mock API Implementation
- The application uses MSW (Mock Service Worker) to intercept network requests
- MSW runs in the browser and provides a realistic API experience
- The mock data includes 50+ products across 8 categories
- The service worker is configured to bypass non-API requests (like route navigation)

### State Management
- Redux Toolkit is used for global state management
- RTK Query handles API caching and data fetching
- Local state is used for UI-specific concerns
- Favorites are persisted in localStorage and synced with global state

### Code Quality
- Full TypeScript coverage with strict mode enabled
- ESLint configured with React and TypeScript rules
- Component-based architecture with clear separation of concerns
- Custom hooks for reusable logic
- Consistent code style throughout

### Performance Optimizations
- Vite for fast development and optimized production builds
- React 18 features (concurrent rendering, automatic batching)
- Memoization where appropriate
- Lazy loading ready architecture (can be easily added)
- Optimized re-renders with proper React patterns

### Testing the Application
While automated tests are not included, you can manually test:
1. **Search**: Type in the search bar and verify real-time filtering
2. **Filters**: Toggle filters and verify URL updates
3. **Favorites**: Add/remove favorites and refresh the page to verify persistence
4. **Responsive**: Resize the browser window to test mobile/tablet/desktop layouts
5. **Accessibility**: Tab through the interface and test with a screen reader
6. **Error Handling**: Disable the service worker in DevTools to simulate network errors(NB: Test this with prod build)

### Known Limitations
- No pagination implemented (all products load at once)
- No product reviews/comments functionality
- No user authentication
- No cart/checkout functionality
- Image lazy loading not implemented
- No unit/integration tests

### Future Improvements
With more time, I would add:
- Virtualized list rendering for better performance with large datasets
- Skeleton loading states
- Image lazy loading and optimization
- Unit and integration tests with Vitest/Testing Library
- More sophisticated error boundaries
- Product comparison feature
- Recently viewed items
- Toast Notifications for saved items

## License

This project is created for educational/interview purposes.

## Contact

For questions or feedback, please open an issue in the repository.
