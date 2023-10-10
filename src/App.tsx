import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import VehicleDetail from "./pages/VehicleDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail/:id",
    element: <VehicleDetail />
  }
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
