import React, { useState } from "react";
import { Search, Plus, Upload, Pencil, Trash2, Bell, Save, X } from "lucide-react";

export default function AdminProducts() {
  const [products, setProducts] = useState([
    {
      id: "001",
      name: "MacBook Air M2",
      quantity: 5,
      description: "Apple M2 8 GPU 16GB 256GB",
      price: "22.990.000đ",
      salePrice: "21.990.000đ",
      brand: "Apple",
      image: "/picture/sp1.png",
    },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    description: "",
    price: "",
    salePrice: "",
    brand: "",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);

  // ✅ Xóa sản phẩm
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // ✅ Thêm hoặc lưu sản phẩm
  const handleSave = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...newProduct, id: editingProduct.id } : p
        )
      );
      setEditingProduct(null);
    } else {
      const newId = String(products.length + 1).padStart(3, "0");
      setProducts([...products, { ...newProduct, id: newId }]);
    }

    setNewProduct({
      id: "",
      name: "",
      quantity: "",
      description: "",
      price: "",
      salePrice: "",
      brand: "",
      image: "",
    });
    setShowForm(false);
  };

  // ✅ Sửa sản phẩm
  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
    setShowForm(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f9f9fc] min-h-screen">
      {/* 🔹 Topbar */}
      <header className="flex items-center justify-between bg-white px-6 py-3 border-b shadow-sm">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-80">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Tìm sản phẩm..."
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            📦 Quản lý sản phẩm
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowForm(true);
                setEditingProduct(null);
                setNewProduct({
                  id: "",
                  name: "",
                  quantity: "",
                  description: "",
                  price: "",
                  salePrice: "",
                  brand: "",
                  image: "",
                });
              }}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <Plus size={18} /> Thêm mới
            </button>
            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              <Upload size={18} /> Nhập/xuất file Excel
            </button>
          </div>
        </div>

        {/* 🔹 Form thêm/sửa sản phẩm */}
        {showForm && (
          <div className="bg-white shadow rounded-xl p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">
              {editingProduct ? "✏️ Sửa sản phẩm" : "➕ Thêm sản phẩm mới"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tên sản phẩm"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Số lượng"
                value={newProduct.quantity}
                onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Giá tiền"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Giá ưu đãi"
                value={newProduct.salePrice}
                onChange={(e) => setNewProduct({ ...newProduct, salePrice: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Thương hiệu"
                value={newProduct.brand}
                onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Đường dẫn hình ảnh (VD: /picture/sp1.png)"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="border p-2 rounded"
              />
            </div>
            <textarea
              placeholder="Mô tả sản phẩm"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="border p-2 rounded w-full mt-3"
            ></textarea>

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
                  setEditingProduct(null);
                }}
                className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                <X size={18} /> Hủy
              </button>
            </div>
          </div>
        )}

        {/* 🔹 Product Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-3 border-b">STT</th>
                <th className="p-3 border-b">Tên sản phẩm</th>
                <th className="p-3 border-b">Số lượng</th>
                <th className="p-3 border-b">Mô tả</th>
                <th className="p-3 border-b">Giá</th>
                <th className="p-3 border-b">Giá ưu đãi</th>
                <th className="p-3 border-b">Thương hiệu</th>
                <th className="p-3 border-b">Hình ảnh</th>
                <th className="p-3 border-b text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} className="hover:bg-gray-50 border-b text-gray-700">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.quantity}</td>
                  <td className="p-3 max-w-[200px] truncate">{p.description}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3 text-green-600">{p.salePrice}</td>
                  <td className="p-3">{p.brand}</td>
                  <td className="p-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 object-contain border rounded-md"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleEdit(p)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
