import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";

export default function SanPham() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

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
    {
      id: 5,
      name: "Laptop Lenovo LOQ Gaming 15IRH8",
      specsTop: "i7-13620H | RTX 4050",
      specsBottom: "16GB | 1TB SSD | 15.6” FHD 144Hz",
      discount: "10%",
      price: "27.990.000₫",
      oldPrice: "30.990.000₫",
      promo: "S-Student giảm thêm 700.000đ",
      offer: "Tặng chuột Logitech + balo + tai nghe gaming",
      rating: 4.9,
      img: "/picture/sp1.png",
    },
    {
      id: 6,
      name: "Laptop Dell Inspiron 14 5430",
      specsTop: "i7-1360P | Intel Iris Xe",
      specsBottom: "16GB | 512GB | 14” FHD+ IPS",
      discount: "6%",
      price: "22.790.000₫",
      oldPrice: "24.190.000₫",
      promo: "S-Student giảm thêm 350.000đ",
      offer: "Giảm 2% khi thanh toán MoMo + Tặng túi chống sốc",
      rating: 4.7,
      img: "/picture/sp2.png",
    },
    {
      id: 7,
      name: "Laptop MSI Modern 14 C13M-607VN",
      specsTop: "i5-1335U | Iris Xe Graphics",
      specsBottom: "16GB | 512GB | 14” FHD IPS",
      discount: "8%",
      price: "14.990.000₫",
      oldPrice: "16.290.000₫",
      promo: "S-Student giảm thêm 300.000đ",
      offer: "Tặng chuột không dây + giảm thêm 3% khi trả góp",
      rating: 4.6,
      img: "/picture/sp3.png",
    },
    {
      id: 8,
      name: "Laptop Gigabyte G5 MF-H2VN333SH",
      specsTop: "i5-12500H | RTX 4050",
      specsBottom: "16GB | 512GB | 15.6” FHD 144Hz",
      discount: "9%",
      price: "25.690.000₫",
      oldPrice: "27.990.000₫",
      promo: "S-Student giảm thêm 500.000đ",
      offer: "Tặng balo cao cấp + chuột gaming",
      rating: 4.8,
      img: "/picture/sp4.png",
    },
    {
      id: 9,
      name: "Laptop Apple MacBook Air M2 2024",
      specsTop: "Chip Apple M2 | GPU 8-core",
      specsBottom: "8GB | 256GB | 13.6” Retina",
      discount: "5%",
      price: "27.990.000₫",
      oldPrice: "29.490.000₫",
      promo: "Giảm 1 triệu khi thanh toán qua VNPAY",
      offer: "Tặng bao da + giảm thêm 3% cho sinh viên",
      rating: 5,
      img: "/picture/sp1.png",
    },
    {
      id: 10,
      name: "Laptop ASUS Zenbook 14 OLED UX3405MA",
      specsTop: "Core Ultra 7 155H | Intel Arc",
      specsBottom: "32GB | 1TB SSD | 14” 3K OLED",
      discount: "12%",
      price: "33.990.000₫",
      oldPrice: "38.990.000₫",
      promo: "Tặng bao da + Chuột Logitech M331",
      offer: "Giảm 5% khi thanh toán bằng thẻ tín dụng",
      rating: 4.9,
      img: "/picture/sp2.png",
    },
    {
      id: 11,
      name: "Laptop HP Pavilion Aero 13-be2006AU",
      specsTop: "R7-7840U | Radeon 780M",
      specsBottom: "16GB | 512GB | 13.3” WUXGA",
      discount: "14%",
      price: "19.490.000₫",
      oldPrice: "22.490.000₫",
      promo: "Giảm thêm 500.000đ cho học sinh - sinh viên",
      offer: "Tặng chuột không dây + túi chống sốc",
      rating: 4.8,
      img: "/picture/sp3.png",
    },
    {
      id: 12,
      name: "Laptop Dell XPS 13 Plus 9320",
      specsTop: "i7-1360P | OLED Touch 3.5K",
      specsBottom: "16GB | 1TB SSD | 13.4”",
      discount: "10%",
      price: "45.990.000₫",
      oldPrice: "50.990.000₫",
      promo: "Giảm 2 triệu khi thanh toán qua MoMo",
      offer: "Tặng chuột + túi da cao cấp",
      rating: 5,
      img: "/picture/sp4.png",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />

      {/* Breadcrumb */}
      <div className="bg-blue-100 py-2 px-10 flex items-center text-sm font-medium text-gray-700">
        <span
          onClick={() => navigate("/")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Trang Chủ
        </span>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Sản Phẩm</span>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="px-10 py-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">Danh Mục Sản Phẩm</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative border border-gray-200 rounded-2xl shadow-sm bg-white p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                  Giảm {product.discount}
                </div>
                <div className="absolute top-2 right-2 bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                  Trả góp 0%
                </div>

                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-md mx-auto mb-3 w-56 h-40 object-contain hover:scale-105 transition-transform"
                />

                <p className="text-sm font-bold text-center text-red-600">
                  {product.specsTop}
                </p>
                <p className="text-sm font-semibold text-center text-black mb-2">
                  {product.specsBottom}
                </p>

                <h3 className="font-semibold text-gray-800 text-center text-sm leading-tight mb-1">
                  {product.name}
                </h3>

                <div className="text-center mt-2">
                  <p className="text-red-600 font-bold text-lg">
                    {product.price}
                  </p>
                  <p className="text-gray-400 text-sm line-through">
                    {product.oldPrice}
                  </p>
                </div>

                <p className="bg-purple-100 text-purple-800 text-xs text-center font-medium mt-2 py-1 rounded-md">
                  {product.promo}
                </p>

                <p className="bg-gray-100 text-gray-700 text-xs text-center mt-2 px-2 py-1 rounded-md">
                  {product.offer}
                </p>

                <div className="flex justify-between items-center mt-3 px-4">
                  <div className="flex items-center text-yellow-500 text-sm">
                    <span className="text-lg mr-1">★</span>
                    {product.rating}
                  </div>

                  <div
                    className="flex items-center text-sm cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
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
          <div className="flex justify-center mt-10">
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
