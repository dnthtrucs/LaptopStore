import { Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "../context/ctgiohang"; // ✅ hook giỏ hàng

export default function Navbar() {
  const { cartCount } = useCart(); // ✅ tổng sản phẩm trong giỏ hàng

  return (
    <header className="bg-[#b7e1f3] flex items-center justify-between px-10 py-1 shadow-md">
      <div className="flex items-center gap-6">
        {/* 🖼️ Logo */}
        <Link to="/">
          <img
            src="/picture/logo.png"
            alt="Logo"
            className="w-20 h-20 object-contain rounded-full cursor-pointer"
          />
        </Link>

        {/* 🔗 Thanh điều hướng */}
        <nav className="flex gap-3">
          <Link
            to="/"
            className="bg-white text-gray-700 font-medium rounded-full px-5 py-2 hover:bg-gray-100 transition"
          >
            Trang Chủ
          </Link>
          <Link
            to="/sanpham"
            className="bg-white text-gray-700 font-medium rounded-full px-5 py-2 hover:bg-gray-100 transition"
          >
            Sản Phẩm
          </Link>
          <Link
            to="/gioithieu"
            className="bg-white text-gray-700 font-medium rounded-full px-5 py-2 hover:bg-gray-100 transition"
          >
            Giới Thiệu
          </Link>
          <Link
            to="/lienhe"
            className="bg-white text-gray-700 font-medium rounded-full px-5 py-2 hover:bg-gray-100 transition"
          >
            Liên Hệ
          </Link>
        </nav>
      </div>

      {/* 🔍 Thanh tìm kiếm + icon người dùng + giỏ hàng */}
      <div className="flex items-center gap-6">
        {/* Ô tìm kiếm */}
        <div className="relative">
          <input
            type="text"
            placeholder="Bạn muốn tìm gì..."
            className="px-5 py-2 rounded-full border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="absolute right-1 top-1.5 bg-blue-400 text-white px-3 py-1.5 rounded-full hover:bg-blue-500 transition">
            <Search size={18} />
          </button>
        </div>

        {/* Icon người dùng và giỏ hàng */}
        <div className="flex gap-4 text-gray-700 relative">
          <Link to="/login">
            <User className="cursor-pointer hover:text-blue-600" />
          </Link>

          <Link to="/giohang" className="relative">
            <ShoppingCart className="cursor-pointer hover:text-blue-600" />
            {/* 🛒 Hiển thị số lượng giỏ hàng */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
