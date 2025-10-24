import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";

export default function TrangChu() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const brands = [
    { name: "ASUS", img: "/picture/asus.png" },
    { name: "Lenovo", img: "/picture/lenovo.png" },
    { name: "MSI", img: "/picture/msi.png" },
    { name: "Acer", img: "/picture/acer.png" },
    { name: "Dell", img: "/picture/dell.png" },
    { name: "LG", img: "/picture/lg.png" },
    { name: "Gigabyte", img: "/picture/gigabyte.png" },
    { name: "Masstel", img: "/picture/masstel.png" },
  ];

  const needs = [
    { name: "Văn phòng", img: "/picture/vanphong.png" },
    { name: "Gaming", img: "/picture/gaming.png" },
    { name: "Mỏng nhẹ", img: "/picture/mongnhe.png" },
    { name: "Đồ họa - kỹ thuật", img: "/picture/dohoa.png" },
    { name: "Sinh viên", img: "/picture/sinhvien.png" },
    { name: "Cảm ứng", img: "/picture/camung.png" },
    { name: "Laptop AI", img: "/picture/ai.png" },
  ];

  const products = [
    {
      id: 1,
      name: "Laptop ASUS TUF Gaming F16 FX607VJ-RL034W",
      specsTop: "CORE 5-210H | ETX 3050",
      specsBottom: "16GB | 512GB | 16” WUXGA",
      discount: "12%",
      price: "21.490.000₫",
      oldPrice: "24.490.000₫",
      promo: "S-Student giảm thêm 356.700đ",
      offer: "Giảm 3% tới 500K, Tặng bộ quà lên tới 1,6 triệu...",
      rating: 4.8,
      img: "/picture/sp1.png",
    },
    {
      id: 2,
      name: "Laptop Acer Gaming Aspire 7 A715-59G-57TU",
      specsTop: "i5-1245H | RTX 3050",
      specsBottom: "16GB | 512GB | 15.6” Full HD",
      discount: "7%",
      price: "18.990.000₫",
      oldPrice: "20.490.000₫",
      promo: "S-Student giảm thêm 400.000đ",
      offer: "Giảm 5% tới 700K, Tặng chuột không dây + balo",
      rating: 5,
      img: "/picture/sp2.png",
    },
    {
      id: 3,
      name: "Laptop HP 15-FC0086AU A6VV9PA",
      specsTop: "R5-7430U | AMD Radeon",
      specsBottom: "8GB | 512GB | 15.6” Full HD",
      discount: "18%",
      price: "12.390.000₫",
      oldPrice: "15.190.000₫",
      promo: "S-Student giảm thêm 500.000đ",
      offer: "Tặng tai nghe + giảm 1 triệu khi trả góp 0%",
      rating: 4.9,
      img: "/picture/sp3.png",
    },
    {
      id: 4,
      name: "Laptop ASUS VivoBook Go 14 E1404FA-NK177W",
      specsTop: "R5-7520U | AMD Radeon",
      specsBottom: "16GB | 512G | 14” Full HD",
      discount: "18%",
      price: "11.890.000₫",
      oldPrice: "14.490.000₫",
      promo: "S-Student giảm thêm 600.000đ",
      offer: "Giảm 5% khi thanh toán qua VNPAY + Tặng balo Dell",
      rating: 5,
      img: "/picture/sp4.png",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />

      {}
      <div className="bg-blue-100 py-2 px-10 flex items-center text-sm font-medium text-gray-700">
        <span
          onClick={() => navigate("/")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Trang Chủ
        </span>
      </div>

      {/* Nội dung chính */}
      <div className="px-10 py-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Thương hiệu */}
          <h2 className="text-xl font-bold mb-4">Thương Hiệu</h2>
          <div className="flex flex-wrap gap-6 mb-8 items-center justify-start">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="cursor-pointer hover:scale-110 transition"
                title={brand.name}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-20 h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Chọn theo nhu cầu */}
          <h2 className="text-xl font-bold mb-4">Chọn Theo Nhu Cầu</h2>
          <div className="grid grid-cols-7 mb-10 gap-2">
            {needs.map((need) => (
              <div
                key={need.name}
                className="w-28 h-28 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                title={need.name}
              >
                <img
                  src={need.img}
                  alt={need.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Sản phẩm nổi bật */}
          <h2 className="text-xl font-bold mb-4">Nổi Bật Nhất</h2>
          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative border border-gray-200 rounded-2xl shadow-sm bg-white p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Góc giảm giá & trả góp */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                  Giảm {product.discount}
                </div>
                <div className="absolute top-2 right-2 bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                  Trả góp 0%
                </div>

                {/* Ảnh sản phẩm */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-md mx-auto mb-3 w-56 h-40 object-contain hover:scale-105 transition-transform"
                />

                {/* Cấu hình */}
                <p className="text-sm font-bold text-center text-red-600">
                  {product.specsTop}
                </p>
                <p className="text-sm font-semibold text-center text-black mb-2">
                  {product.specsBottom}
                </p>

                {/* Tên sản phẩm */}
                <h3 className="font-semibold text-gray-800 text-center text-sm leading-tight mb-1">
                  {product.name}
                </h3>

                {/* Giá */}
                <div className="text-center mt-2">
                  <p className="text-red-600 font-bold text-lg">
                    {product.price}
                  </p>
                  <p className="text-gray-400 text-sm line-through">
                    {product.oldPrice}
                  </p>
                </div>

                {/* Dòng S-Student */}
                <p className="bg-purple-100 text-purple-800 text-xs text-center font-medium mt-2 py-1 rounded-md">
                  {product.promo}
                </p>

                {/* Ưu đãi thêm */}
                <p className="bg-gray-100 text-gray-700 text-xs text-center mt-2 px-2 py-1 rounded-md">
                  {product.offer}
                </p>

                {/* Đánh giá + yêu thích */}
                <div className="flex justify-between items-center mt-3 px-4">
                  <div className="flex items-center text-yellow-500 text-sm">
                    <span className="text-lg mr-1">★</span>
                    {product.rating}
                  </div>

                  {/* Nút yêu thích */}
                  <div
                    className="flex items-center text-sm cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // tránh mở trang chi tiết
                      toggleFavorite(product.id);
                    }}
                  >
                    <span
                      className={`text-base mr-1 transition ${
                        favorites.includes(product.id)
                          ? "text-red-500"
                          : "text-blue-500"
                      }`}
                    >
                      {favorites.includes(product.id) ? "❤️" : "♡"}
                    </span>
                    <span
                      className={`${
                        favorites.includes(product.id)
                          ? "text-red-500"
                          : "text-blue-500"
                      }`}
                    >
                      Yêu thích
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nút xem thêm */}
          <div className="flex justify-center mt-8">
            <button
  onClick={() => navigate("/sanpham")}
  className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
>
  Xem Thêm
</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
