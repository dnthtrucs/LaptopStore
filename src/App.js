import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/ctgiohang";

// Trang người dùng
import Home from "./pages/trangchu";
import Login from "./pages/dangnhap";
import Register from "./pages/dangky";
import ForgotPassword from "./pages/quenmk";
import ProductDetail from "./pages/chitietsp";
import CartPage from "./pages/giohang";
import ThongTinGiaoHang from "./pages/ttgiaohang";
import ThanhToan from "./pages/thanhtoan";
import LienHe from "./pages/lienhe";
import GioiThieu from "./pages/gioithieu";
import SanPham from "./pages/sanpham";
import ThongTinNguoiDung from "./pages/nguoidung";

// Bảo vệ route
import ProtectedRoute from "./components/protectedRoute";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";

// Layout và Trang admin
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminVouchers from "./pages/admin/AdminVouchers";
import AdminSp from "./pages/admin/AdminSp";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {/* === Public routes === */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          {/* === User routes === */}
          <Route
            path="/"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route
            path="/sanpham"
            element={
              <UserRoute>
                <SanPham />
              </UserRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <UserRoute>
                <ProductDetail />
              </UserRoute>
            }
          />
          <Route
            path="/giohang"
            element={
              <UserRoute>
                <CartPage />
              </UserRoute>
            }
          />
          <Route
            path="/giaohang"
            element={
              <UserRoute>
                <ThongTinGiaoHang />
              </UserRoute>
            }
          />
          <Route
            path="/thanhtoan"
            element={
              <UserRoute>
                <ThanhToan />
              </UserRoute>
            }
          />
          <Route
            path="/lienhe"
            element={
              <UserRoute>
                <LienHe />
              </UserRoute>
            }
          />
          <Route
            path="/gioithieu"
            element={
              <UserRoute>
                <GioiThieu />
              </UserRoute>
            }
          />
          <Route
            path="/nguoidung"
            element={
              <UserRoute>
                <ThongTinNguoiDung />
              </UserRoute>
            }
          />

          {/* === Admin routes === */}
          <Route
  path="/admin/*"
  element={
    <AdminRoute>
      <AdminLayout>
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="vouchers" element={<AdminVouchers />} />
          <Route path="brands" element={<AdminSp />} />
        </Routes>
      </AdminLayout>
    </AdminRoute>
  }
/>


        </Routes>
      </CartProvider>
    </Router>
  );
}
