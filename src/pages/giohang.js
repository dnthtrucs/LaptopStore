import { useCart } from "../context/ctgiohang";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

export default function GioHang() {
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();
  const navigate = useNavigate();

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^\d]/g, ""));
    return sum + priceNumber * item.quantity;
  }, 0);

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
        › <span className="text-gray-700 cursor-default">Giỏ Hàng</span>
      </div>

      <div className="px-10 py-10 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">🛒 Giỏ Hàng Của Bạn</h1>

          {cartCount === 0 ? (
            <div className="text-center text-gray-600 py-20">
              <p>Giỏ hàng của bạn đang trống!</p>
              <button
                onClick={() => navigate("/")}
                className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <>
              {/* Danh sách sản phẩm */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-4"
                  >
                    {/* Ảnh và tên */}
                    <div className="flex items-center gap-4 w-2/5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-20 h-20 object-contain rounded-lg border"
                      />
                      <div>
                        <h2 className="font-semibold text-gray-800 text-sm">
                          {item.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {item.selectedColor} • {item.selectedStorage}
                        </p>
                        <p className="text-sm text-red-600 font-medium mt-1">
                          {item.price}
                        </p>
                      </div>
                    </div>

                    {/* Số lượng */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                        }
                        className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* Thành tiền */}
                    <div className="w-32 text-right text-red-600 font-semibold">
                      {(
                        parseFloat(item.price.replace(/[^\d]/g, "")) *
                        item.quantity
                      ).toLocaleString("vi-VN")}
                      ₫
                    </div>

                    {/* Xóa */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Xóa
                    </button>
                  </div>
                ))}
              </div>

              {/* Tổng tiền */}
              <div className="mt-8 flex justify-between items-center border-t pt-6">
                <button
                  onClick={() => navigate("/")}
                  className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  ← Tiếp tục mua hàng
                </button>

                <div className="text-right">
                  <p className="text-gray-700 mb-1">
                    Tổng sản phẩm:{" "}
                    <span className="font-semibold">{cartCount}</span>
                  </p>
                  <p className="text-xl font-bold text-red-600">
                    Tổng tiền: {totalPrice.toLocaleString("vi-VN")}₫
                  </p>
                  <button
  onClick={() => navigate("/giaohang")}
  className="mt-3 bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition"
>
  Thanh Toán
</button>

                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
