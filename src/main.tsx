import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "@/App.tsx";
import ErrorBoundary from "@/components/utilities/ErrorBoundary";
import "@/styles/index.css";
import "primereact/resources/themes/nano/theme.css";

async function enableMocking() {
  const { worker } = await import("../backend/create-backend");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ErrorBoundary>
  );
});
