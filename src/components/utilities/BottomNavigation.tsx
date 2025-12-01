import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { navItems } from "@/shared/constants";

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2 md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = isActive ? item.iconSolid : item.icon;

          return (
            <Button
              unstyled
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 py-2 px-4"
              aria-label={`Navigate to ${item.label}`}
            >
              <Icon
                className={`size-6 ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
