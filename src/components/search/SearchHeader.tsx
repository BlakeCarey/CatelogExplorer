import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { HeartIcon, HomeIcon } from "@heroicons/react/24/outline";

const SearchHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-3 mb-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 flex-1">
        Search
      </h1>
      <div className="flex items-center max-md:hidden">
        <Button
          unstyled
          onClick={() => navigate("/")}
          aria-label="Go home"
          className="gap-1 py-2 px-4 cursor-pointer"
        >
          <HomeIcon className="size-6 md:size-7 text-gray-900" />
        </Button>
        <Button
          unstyled
          onClick={() => navigate("/saved")}
          aria-label="Go to saved items"
          className="gap-1 py-2 px-4 cursor-pointer"
        >
          <HeartIcon className="size-6 md:size-7 text-gray-900" />
        </Button>
      </div>
    </div>
  );
};

export default SearchHeader;
