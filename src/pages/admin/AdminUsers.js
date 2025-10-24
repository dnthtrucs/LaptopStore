import React, { useState } from "react";
import { Search, Bell, Plus, Upload, Edit, Trash2, Save, X } from "lucide-react";

export default function AdminUsers() {
  const [users, setUsers] = useState([
    {
      id: "00001",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      phone: "0123456789",
      address: "123 Lê Lợi, Q1, TP.HCM",
      role: "Người dùng",
    },
    {
      id: "00002",
      name: "Trần Thị B",
      email: "tranthib@gmail.com",
      phone: "0987654321",
      address: "45 Nguyễn Huệ, Q1, TP.HCM",
      role: "Người dùng",
    },
    {
      id: "00003",
      name: "Lê Văn C",
      email: "levanc@gmail.com",
      phone: "0912345678",
      address: "56 Trần Phú, Đà Nẵng",
      role: "Admin",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "Người dùng",
  });
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 Thêm người dùng
  const handleAddUser = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const newUser = {
      ...formData,
      id: String(users.length + 1).padStart(5, "0"),
    };
    setUsers([...users, newUser]);
    resetForm();
  };

  // 🔹 Sửa người dùng
  const handleEditUser = (user) => {
    setIsEditing(true);
    setFormData(user);
  };

  // 🔹 Lưu chỉnh sửa
  const handleSaveEdit = () => {
    setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
    resetForm();
    setIsEditing(false);
  };

  // 🔹 Xóa người dùng
  const handleDeleteUser = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa tài khoản này không?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  // 🔹 Reset form
  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      role: "Người dùng",
    });
  };

  return (
    <div className="flex flex-col flex-1 bg-[#f9f9fc] min-h-screen">
      {/* 🔹 Topbar */}
      <header className="flex items-center justify-between bg-white px-6 py-3 border-b shadow-sm">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-96">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
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

      {/* 🔹 Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Quản lý tài khoản</h1>

        {/* Nút thao tác */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex gap-3">
            <button
              onClick={handleAddUser}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <Plus size={18} /> Thêm mới
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              <Upload size={18} /> Xuất file
            </button>
          </div>
        </div>

        {/* Bảng danh sách người dùng */}
        <div className="bg-white rounded-2xl shadow p-4">
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-50 border-b text-gray-500">
                <th className="p-3 text-left font-medium">ID</th>
                <th className="p-3 text-left font-medium">Họ tên</th>
                <th className="p-3 text-left font-medium">Email</th>
                <th className="p-3 text-left font-medium">Số điện thoại</th>
                <th className="p-3 text-left font-medium">Địa chỉ</th>
                <th className="p-3 text-left font-medium">Quyền hạn</th>
                <th className="p-3 text-center font-medium">Sửa / Xóa</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.phone}</td>
                  <td className="p-3">{u.address}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        u.role === "Admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleEditUser(u)}
                      className="text-blue-500 hover:text-blue-700 mr-3"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(u.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Phân trang */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <p>Showing 1–09 of {users.length}</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                &lt;
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Form thêm / sửa người dùng */}
        <div className="bg-white mt-6 p-5 rounded-xl shadow-md w-3/4 mx-auto">
          <h2 className="text-lg font-semibold mb-4">
            {isEditing ? "✏️ Chỉnh sửa người dùng" : "➕ Thêm người dùng mới"}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Họ tên"
              className="border rounded-md px-3 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              className="border rounded-md px-3 py-2"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              className="border rounded-md px-3 py-2"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <select
              className="border rounded-md px-3 py-2"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="Người dùng">Người dùng</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="mt-4 flex justify-end gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveEdit}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  <Save size={16} /> Lưu thay đổi
                </button>
                <button
                  onClick={() => {
                    resetForm();
                    setIsEditing(false);
                  }}
                  className="flex items-center gap-2 bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  <X size={16} /> Hủy
                </button>
              </>
            ) : (
              <button
                onClick={handleAddUser}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <Plus size={16} /> Thêm tài khoản
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
