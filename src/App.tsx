import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import VehicleDetail from "./pages/VehicleDetail";
import Cart from "./pages/Cart";
import PurchaseSummary from "./pages/PurchaseSummary";
import PaymentForm from "./pages/PaymentForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<VehicleDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<PaymentForm />} />
          <Route path="/summary" element={<PurchaseSummary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
