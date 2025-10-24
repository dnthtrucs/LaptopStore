import React, { useState } from "react";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export default function AdminVouchers() {
  const [vouchers, setVouchers] = useState([
    { id: "00001", name: "Giảm giá sốc", discount: "Giảm 10%", code: "Giamgia", date: "02/08-03/08" },
    { id: "00002", name: "Giảm giá đơn hè", discount: "Giảm 20k", code: "OK", date: "02/08-03/08" },
    { id: "00003", name: "Giảm thời trang", discount: "Giảm 15%", code: "ABC", date: "02/08-03/08" },
    { id: "00004", name: "Giảm chơi", discount: "Giảm 15%", code: "Giamsau", date: "02/08-03/08" },
  ]);

  const [editingVoucher, setEditingVoucher] = useState(null);
  const [form, setForm] = useState({ name: "", discount: "", code: "", date: "" });

  const handleAdd = () => {
    const newVoucher = {
      id: String(vouchers.length + 1).padStart(5, "0"),
      ...form,
    };
    if (!form.name || !form.discount || !form.code || !form.date) {
      alert("Vui lòng nhập đầy đủ thông tin mã giảm giá!");
      return;
    }
    setVouchers([...vouchers, newVoucher]);
    setForm({ name: "", discount: "", code: "", date: "" });
  };

  const handleEdit = (voucher) => {
    setEditingVoucher(voucher);
    setForm(voucher);
  };

  const handleSave = () => {
    setVouchers(
      vouchers.map((v) =>
        v.id === editingVoucher.id ? { ...editingVoucher, ...form } : v
      )
    );
    setEditingVoucher(null);
    setForm({ name: "", discount: "", code: "", date: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa mã giảm giá này?")) {
      setVouchers(vouchers.filter((v) => v.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">🎟️ Quản lý mã giảm giá</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <PlusCircle size={18} /> Thêm mới
        </button>
      </div>

      {/* Bảng danh sách */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Tên mã giảm giá</th>
              <th className="p-3 text-left">% hoặc tiền giảm</th>
              <th className="p-3 text-left">Mã giảm</th>
              <th className="p-3 text-left">Thời gian áp dụng</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.map((voucher) => (
              <tr
                key={voucher.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{voucher.id}</td>
                <td className="p-3">{voucher.name}</td>
                <td className="p-3">{voucher.discount}</td>
                <td className="p-3">{voucher.code}</td>
                <td className="p-3">{voucher.date}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleEdit(voucher)}
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(voucher.id)}
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

      {/* Form thêm / sửa */}
      <div className="bg-white mt-6 p-5 rounded-xl shadow-md w-2/3 mx-auto">
        <h2 className="text-lg font-semibold mb-4">
          {editingVoucher ? "✏️ Chỉnh sửa mã giảm giá" : "➕ Thêm mã giảm giá mới"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Tên mã giảm giá"
            className="border rounded-md px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="% hoặc số tiền giảm"
            className="border rounded-md px-3 py-2"
            value={form.discount}
            onChange={(e) => setForm({ ...form, discount: e.target.value })}
          />
          <input
            type="text"
            placeholder="Mã giảm"
            className="border rounded-md px-3 py-2"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
          />
          <input
            type="text"
            placeholder="Thời gian áp dụng (vd: 02/08-03/08)"
            className="border rounded-md px-3 py-2"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>

        <div className="mt-4 flex justify-end gap-3">
          {editingVoucher ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Lưu thay đổi
              </button>
              <button
                onClick={() => {
                  setEditingVoucher(null);
                  setForm({ name: "", discount: "", code: "", date: "" });
                }}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Hủy
              </button>
            </>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Thêm mã
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
