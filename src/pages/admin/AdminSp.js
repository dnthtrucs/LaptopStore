import React, { useState } from "react";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export default function AdminProductTypes() {
  const [brands, setBrands] = useState([
    { id: "00001", name: "MacBook", img: "/picture/macbook.png" },
    { id: "00002", name: "Asus", img: "/picture/asus.png" },
    { id: "00003", name: "MSI", img: "/picture/msi.png" },
    { id: "00004", name: "Dell", img: "/picture/dell.png" },
    { id: "00005", name: "HP", img: "/picture/hp.png" },
    { id: "00006", name: "Acer", img: "/picture/acer.png" },
    { id: "00007", name: "Gigabyte", img: "/picture/gigabyte.png" },
    { id: "00008", name: "Lenovo", img: "/picture/lenovo.png" },
  ]);

  const [form, setForm] = useState({ name: "", img: "" });
  const [editingBrand, setEditingBrand] = useState(null);

  const handleAdd = () => {
    if (!form.name || !form.img) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const newBrand = {
      id: String(brands.length + 1).padStart(5, "0"),
      ...form,
    };
    setBrands([...brands, newBrand]);
    setForm({ name: "", img: "" });
  };

  const handleEdit = (brand) => {
    setEditingBrand(brand);
    setForm(brand);
  };

  const handleSave = () => {
    setBrands(
      brands.map((b) => (b.id === editingBrand.id ? { ...b, ...form } : b))
    );
    setEditingBrand(null);
    setForm({ name: "", img: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa thương hiệu này không?")) {
      setBrands(brands.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          🖥️ Quản lý loại sản phẩm
        </h1>
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
              <th className="p-3 text-left">Hình ảnh</th>
              <th className="p-3 text-left">Tên thương hiệu</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr
                key={brand.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{brand.id}</td>
                <td className="p-3">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-24 h-10 object-contain border rounded-md p-1 bg-white"
                  />
                </td>
                <td className="p-3 font-medium text-gray-800">{brand.name}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleEdit(brand)}
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(brand.id)}
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
          {editingBrand ? "✏️ Chỉnh sửa thương hiệu" : "➕ Thêm thương hiệu mới"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Tên thương hiệu"
            className="border rounded-md px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Đường dẫn ảnh (VD: /picture/asus.png)"
            className="border rounded-md px-3 py-2"
            value={form.img}
            onChange={(e) => setForm({ ...form, img: e.target.value })}
          />
        </div>

        <div className="mt-4 flex justify-end gap-3">
          {editingBrand ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Lưu thay đổi
              </button>
              <button
                onClick={() => {
                  setEditingBrand(null);
                  setForm({ name: "", img: "" });
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
              Thêm loại
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
