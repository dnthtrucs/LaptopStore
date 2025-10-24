import React from "react";
import Sidebar from "../components/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - chỉ xuất hiện 1 lần */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
