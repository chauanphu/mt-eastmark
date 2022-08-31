import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home/HomePage";
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import "swiper/css/bundle";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShopPage />}>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
