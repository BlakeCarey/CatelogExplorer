import React from "react";
import { Message } from "primereact/message";
import LoaderIcon from "@/components/icons/LoaderIcon";

const Loader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <Message
        severity="secondary"
        content={
          <div className="flex items-center text-blue-600">
            <LoaderIcon
              className="w-5 h-5 animate-spin mr-2"
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{text}</span>
          </div>
        }
      />
    </div>
  );
};

export default Loader;
