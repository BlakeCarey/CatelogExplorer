import React from "react";
import { Message } from "primereact/message";
import LoaderIcon from "@/components/icons/LoaderIcon";

interface InfoProps {
  text: string;
  isLoading?: boolean;
  color?: "secondary" | "success" | "info" | "warn" | "error" | "contrast";
}

const Info: React.FC<InfoProps> = ({ text, color, isLoading }) => {
  return (
    <div className="flex items-center justify-center">
      <Message
        className="rounded-lg! border-2!"
        severity={color}
        content={
          <div className="flex items-center">
            {isLoading && (
              <LoaderIcon
                className="w-5 h-5 animate-spin mr-2"
                aria-hidden="true"
              />
            )}
            <span className="text-sm font-medium">{text}</span>
          </div>
        }
      />
    </div>
  );
};

export default Info;
