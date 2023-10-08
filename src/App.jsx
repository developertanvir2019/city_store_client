import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthProvider from "./components/shared/ValueProvider/AuthProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes} />
          <ReactQueryDevtools />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
