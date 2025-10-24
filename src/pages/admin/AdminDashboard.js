import React from "react";
import {
  Users,
  ShoppingBag,
  Box,
  BarChart3,
  Bell,
  Search,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col flex-1 bg-[#f9f9fc] min-h-screen">
      {/* 🔹 Topbar */}
      <header className="flex items-center justify-between bg-white px-6 py-3 border-b shadow-sm">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-96">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm text-gray-600"
          />
        </div>

        <div className="flex items-center gap-5">
          <Bell className="text-gray-600 cursor-pointer" />
          <img
            src="https://flagcdn.com/w40/vn.png"
            alt="VN"
            className="w-6 h-4 rounded-sm border"
          />
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=47"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm leading-tight">
              <p className="font-medium">Mai mờ</p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* 🔹 Main content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        {/* 🔸 Cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Số người dùng</p>
              <h2 className="text-3xl font-semibold mt-2">804</h2>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Users size={28} />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Số đơn hàng</p>
              <h2 className="text-3xl font-semibold mt-2">542</h2>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">
              <ShoppingBag size={28} />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Số loại sản phẩm</p>
              <h2 className="text-3xl font-semibold mt-2">23</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-lg text-green-600">
              <Box size={28} />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Số sản phẩm</p>
              <h2 className="text-3xl font-semibold mt-2">222</h2>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg text-orange-500">
              <BarChart3 size={28} />
            </div>
          </div>
        </div>

        {/* 🔸 Charts Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Bar chart placeholder */}
          <div className="col-span-2 bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Thống Kê Doanh Số Đơn Hàng</h3>
              <button className="text-sm text-blue-600 border px-3 py-1 rounded hover:bg-blue-50">
                Lọc kết quả
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center text-gray-400">
              (Biểu đồ doanh số)
            </div>
          </div>

          {/* Donut chart placeholder */}
          <div className="bg-white p-5 rounded-2xl shadow flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="3"
                  strokeDasharray="25, 75"
                  strokeDashoffset="25"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeDasharray="20, 80"
                  strokeDashoffset="45"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="3"
                  strokeDasharray="15, 85"
                  strokeDashoffset="65"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-semibold text-gray-700">Đơn hàng</span>
                <span className="text-xl font-bold">32</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🔸 Progress Section */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-4">Dự Án</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p>Server Migration <span className="float-right text-gray-500">20%</span></p>
              <div className="bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-red-400 h-2 rounded-full w-[20%]" />
              </div>
            </div>

            <div>
              <p>Sales Tracking <span className="float-right text-gray-500">40%</span></p>
              <div className="bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-yellow-400 h-2 rounded-full w-[40%]" />
              </div>
            </div>

            <div>
              <p>Customer Database <span className="float-right text-gray-500">60%</span></p>
              <div className="bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-blue-400 h-2 rounded-full w-[60%]" />
              </div>
            </div>

            <div>
              <p>Payout Details <span className="float-right text-gray-500">80%</span></p>
              <div className="bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-green-400 h-2 rounded-full w-[80%]" />
              </div>
            </div>

            <div>
              <p>Account Setup <span className="float-right text-gray-500">100%</span></p>
              <div className="bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-emerald-500 h-2 rounded-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
