import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastProvider } from "@/contexts/ToastContext";
import AppRoutes from "@/routes/Routes";
import OfflineNotice from "@/components/utilities/OfflineNotice";

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <OfflineNotice />
        <AppRoutes />
      </ToastProvider>
    </Provider>
  );
}
