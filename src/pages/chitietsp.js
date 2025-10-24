import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { useCart } from "../context/ctgiohang";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Laptop ASUS TUF Gaming F16 FX607VJ-RL034W",
      specs: "CORE 5-210H | ETX 3050",
      price: "21.490.000₫",
      colors: ["Đen", "Bạc", "Xanh"],
      storage: ["256GB", "512GB", "1TB"],
      img: "/picture/sp1.png",
      desc: "Laptop ASUS TUF - Gaming dòng laptop gaming giá rẻ, mạnh mẽ với card đồ họa RTX 3050 và thiết kế sang trọng.",
    },
    {
      id: 2,
      name: "Laptop Acer Gaming Aspire 7 A715-59G-57TU",
      specs: "i5-1245H | RTX 3050",
      price: "18.990.000₫",
      colors: ["Xám", "Bạc"],
      storage: ["512GB", "1TB"],
      img: "/picture/sp2.png",
      desc: "Laptop Acer Gaming - dòng laptop gaming giá rẻ, mạnh mẽ với card đồ họa RTX 3050 và thiết kế sang trọng.",
    },
    {
      id: 3,
      name: "Laptop HP 15-FC0086AU A6VV9PA",
      specs: "R5-7430U | AMD Radeon",
      price: "12.390.000₫",
      colors: ["Đen"],
      storage: ["512GB", "1TB"],
      img: "/picture/sp3.png",
      desc: "Laptop HP 15 – với thiết kế mỏng nhẹ, hiệu năng ổn định, phù hợp cho sinh viên và nhân viên văn phòng.",
    },
    {
      id: 4,
      name: "Laptop ASUS VivoBook Go 14 E1404FA-NK177W",
      specs: "R5-7520U | AMD Radeon",
      price: "11.890.000₫",
      colors: ["Bạc", "Xám"],
      storage: ["512GB", "1TB"],
      img: "/picture/sp4.png",
      desc: "Laptop ASUS VivoBook Go 14 – laptop cao cấp dành cho dân văn phòng, thiết kế tinh tế, cấu hình mạnh mẽ.",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  // ✅ Di chuyển useState lên đây và kiểm tra null an toàn
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedStorage, setSelectedStorage] = useState(product?.storage[0] || "");

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">Sản phẩm không tồn tại!</p>
    );
  }

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      color: selectedColor,
      storage: selectedStorage,
      quantity: 1,
    };
    addToCart(item);
    alert("🛒 Đã thêm sản phẩm vào giỏ hàng!");
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-blue-100 py-2 px-10 text-sm">
        <span
          onClick={() => navigate("/")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Trang Chủ
        </span>{" "}
        › <span className="text-gray-700 cursor-default">{product.name}</span>
      </div>

      {/* Nội dung chi tiết */}
      <div className="flex flex-col md:flex-row px-10 py-10 gap-10 bg-gray-50 min-h-screen">
        {/* Hình ảnh */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="rounded-lg shadow-md w-3/4 object-contain"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.desc}</p>
          <p className="font-medium text-gray-700 mb-2">Cấu hình: {product.specs}</p>

          {/* Chọn màu */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Màu sắc:</p>
            <div className="flex gap-3 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedColor === color
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-400 text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Chọn dung lượng */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Dung lượng:</p>
            <div className="flex gap-3 flex-wrap">
              {product.storage.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedStorage(size)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedStorage === size
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-400 text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Giá */}
          <p className="text-3xl font-bold text-red-600 mb-6">{product.price}</p>

          {/* Nút hành động */}
          <div className="flex gap-4">
            <button
            onClick={() => navigate("/giaohang")}
            className="flex-1 bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Mua Ngay
            </button>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-400 text-black py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Thêm Vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
