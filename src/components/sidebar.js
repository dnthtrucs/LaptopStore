import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Box,
  Layers,
  Users,
  ShoppingBag,
  Image,
  Globe,
  Percent,
} from "lucide-react";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-[15px] font-medium transition-colors duration-200
    ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          ADMIN
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        <NavLink to="/admin/dashboard" className={linkClasses}>
          <LayoutDashboard size={18} /> Tổng quan
        </NavLink>

        <NavLink to="/admin/products" className={linkClasses}>
          <Box size={18} /> Quản lý sản phẩm
        </NavLink>

        <NavLink to="/admin/users" className={linkClasses}>
          <Users size={18} /> Quản lý tài khoản
        </NavLink>

        <NavLink to="/admin/orders" className={linkClasses}>
          <ShoppingBag size={18} /> Quản lý đơn hàng
        </NavLink>

        <NavLink to="/admin/brands" className={linkClasses}>
          <Image size={18} /> Quản lý thương hiệu
        </NavLink>

        <NavLink to="/admin/vouchers" className={linkClasses}>
          <Percent size={18} /> Quản lý mã giảm giá
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © 2025 Laptop Store
      </div>
    </aside>
  );
};

export default Sidebar;
