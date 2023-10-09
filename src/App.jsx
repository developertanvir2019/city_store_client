import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { Provider } from "react-redux";

import AuthProvider from "./components/shared/ValueProvider/AuthProvider";
import { store } from "./app/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
