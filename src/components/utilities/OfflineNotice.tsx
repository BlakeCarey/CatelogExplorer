import React, { useEffect, useState } from "react";
import { SignalSlashIcon } from "@heroicons/react/24/outline";

const OfflineNotice: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-white px-4 py-3 text-center shadow-lg"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center justify-center gap-2">
        <SignalSlashIcon className="size-5" />
        <span className="font-medium">
          You're offline. Some features may not be available.
        </span>
      </div>
    </div>
  );
};

export default OfflineNotice;
