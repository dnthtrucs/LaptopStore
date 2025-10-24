import React, { useState } from "react";
import { Pencil, Trash2, PlusCircle, Save, X } from "lucide-react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      id: "00001",
      name: "Nguyễn Văn A",
      address: "123 Lê Lợi, Q1, TP.HCM",
      payment: "ATM",
      productCode: "huh89",
      status: "Đã giao",
    },
    {
      id: "00002",
      name: "Trần Thị B",
      address: "45 Nguyễn Huệ, Q1, TP.HCM",
      payment: "ATM",
      productCode: "gcsh08",
      status: "Đang giao",
    },
    {
      id: "00003",
      name: "Lê Văn C",
      address: "56 Trần Phú, Đà Nẵng",
      payment: "COD",
      productCode: "fhie43",
      status: "Hủy đơn",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    id: "",
    name: "",
    address: "",
    payment: "",
    productCode: "",
    status: "",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Đã giao":
        return "bg-green-100 text-green-600";
      case "Đang giao":
        return "bg-purple-100 text-purple-600";
      case "Hủy đơn":
        return "bg-red-100 text-red-600";
      case "Đang xử lý":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  // ✅ Xóa đơn
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa đơn hàng này?")) {
      setOrders(orders.filter((o) => o.id !== id));
    }
  };

  // ✅ Thêm đơn
  const handleAdd = () => {
    setEditingOrder(null);
    setNewOrder({
      id: "",
      name: "",
      address: "",
      payment: "",
      productCode: "",
      status: "Đang xử lý",
    });
    setShowForm(true);
  };

  // ✅ Sửa đơn
  const handleEdit = (order) => {
    setEditingOrder(order);
    setNewOrder(order);
    setShowForm(true);
  };

  // ✅ Lưu đơn (cả thêm & sửa)
  const handleSave = () => {
    if (!newOrder.name || !newOrder.productCode) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editingOrder) {
      // Cập nhật
      setOrders(
        orders.map((o) => (o.id === editingOrder.id ? { ...newOrder } : o))
      );
    } else {
      // Thêm mới
      const newId = String(orders.length + 1).padStart(5, "0");
      setOrders([...orders, { ...newOrder, id: newId }]);
    }

    setShowForm(false);
    setEditingOrder(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          🧾 Quản lý đơn hàng
        </h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <PlusCircle size={18} /> Thêm đơn hàng
        </button>
      </div>

      {/* 🔹 Form thêm/sửa */}
      {showForm && (
        <div className="bg-white shadow-md rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">
            {editingOrder ? "✏️ Sửa đơn hàng" : "➕ Thêm đơn hàng mới"}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tên khách hàng"
              value={newOrder.name}
              onChange={(e) => setNewOrder({ ...newOrder, name: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              value={newOrder.address}
              onChange={(e) =>
                setNewOrder({ ...newOrder, address: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Hình thức thanh toán (VD: ATM, COD)"
              value={newOrder.payment}
              onChange={(e) =>
                setNewOrder({ ...newOrder, payment: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Mã sản phẩm"
              value={newOrder.productCode}
              onChange={(e) =>
                setNewOrder({ ...newOrder, productCode: e.target.value })
              }
              className="border p-2 rounded"
            />
            <select
              value={newOrder.status}
              onChange={(e) =>
                setNewOrder({ ...newOrder, status: e.target.value })
              }
              className="border p-2 rounded"
            >
              <option>Đang xử lý</option>
              <option>Đang giao</option>
              <option>Đã giao</option>
              <option>Hủy đơn</option>
            </select>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <Save size={18} /> Lưu
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingOrder(null);
              }}
              className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              <X size={18} /> Hủy
            </button>
          </div>
        </div>
      )}

      {/* 🔹 Bảng đơn hàng */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">Mã đơn</th>
              <th className="p-3 text-left">Tên khách hàng</th>
              <th className="p-3 text-left">Địa chỉ</th>
              <th className="p-3 text-left">Thanh toán</th>
              <th className="p-3 text-left">Mã sản phẩm</th>
              <th className="p-3 text-left">Trạng thái</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.name}</td>
                <td className="p-3">{order.address}</td>
                <td className="p-3">{order.payment}</td>
                <td className="p-3">{order.productCode}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleEdit(order)}
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-500 hover:text-red-700 mx-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Footer */}
      <div className="text-gray-500 text-sm mt-3">
        Hiển thị {orders.length} đơn hàng
      </div>
    </div>
  );
}
