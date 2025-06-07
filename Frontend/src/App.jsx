import { Toaster } from "sonner";
import { AuthContextProvider } from "./context/AuthContext";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
