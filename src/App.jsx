import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Landing Pages
import Home from "./pages/Landing/Home";
import About from "./pages/Landing/About";
import Projects from "./pages/Landing/Projects";
import Clients from "./pages/Landing/Clients";
import Contact from "./pages/Landing/Contact";
import NewsletterSection from "./pages/Landing/Newsletter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin Pages
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import NotFound from "./components/NotFound";

// Create a Protected Route for Admin
const ProtectedRoute = ({ children }) => {
  const isAdmin = !!localStorage.getItem("admin");
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<NewsletterSection />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch all - 404 */}
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
