import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 md:px-8">
      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          The page you are looking for does not exist.
        </p>
        <Link to={"/"}>
          <Button className="w-full md:w-auto px-8 py-3 text-sm md:text-base">
            Go back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
