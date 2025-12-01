import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const ProductNotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button
          unstyled
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ProductNotFound;
