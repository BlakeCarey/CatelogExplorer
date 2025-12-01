import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Toast } from "primereact/toast";

interface ToastContextType {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toast = useRef<Toast>(null);

  const showSuccess = useCallback((message: string) => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  }, []);

  const showError = useCallback((message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 5000,
    });
  }, []);

  const showInfo = useCallback((message: string) => {
    toast.current?.show({
      severity: "info",
      summary: "Info",
      detail: message,
      life: 3000,
    });
  }, []);

  const value = useMemo(
    () => ({ showSuccess, showError, showInfo }),
    [showSuccess, showError, showInfo]
  );

  return (
    <ToastContext.Provider value={value}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
