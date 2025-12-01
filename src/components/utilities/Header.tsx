import React from "react";
import { useNavigate } from "react-router-dom";
import { IHeader } from "@/shared/interfaces";
import { Button } from "primereact/button";

const Header: React.FC<IHeader> = ({ title, headerItems }) => {
  const navigate = useNavigate();

  return (
    <div className=" bg-white border-t border-gray-200 px-4 py-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
            {title}
          </h1>
          <div className="flex items-center max-md:hidden">
            {headerItems.map((item) => {
              return (
                <Button
                  unstyled
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center gap-1 py-2 px-4 cursor-pointer"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.icon}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
