import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home/HomePage";
import HomePage from './pages/HomePage'
import NotFoundPage from "./pages/NotFound";
import "swiper/css/bundle";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
