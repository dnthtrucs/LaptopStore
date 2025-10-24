import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ThanhToan() {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Giả sử giá hàng = 24,990,000đ, giảm 5,200,000đ
  const originalPrice = 24990000;
  const discount = 5200000;
  const total = originalPrice - discount;

  useEffect(() => {
    const savedInfo = localStorage.getItem("shippingInfo");
    if (savedInfo) setShippingInfo(JSON.parse(savedInfo));
  }, []);

  const handlePayment = () => {
    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng ❤️");
    localStorage.removeItem("shippingInfo");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="bg-blue-100 py-4 text-center text-2xl font-bold text-gray-800">
        Thanh Toán
      </div>

      <div className="flex justify-center mt-6">
        <div className="bg-white shadow-md rounded-xl w-[600px] p-8">
          {/* Thanh tiêu đề */}
          <div className="flex justify-center gap-6 mb-6 border-b pb-2">
            <span
              onClick={() => navigate("/giaohang")}
              className="font-bold text-gray-400 cursor-pointer hover:text-blue-500"
            >
              1. THÔNG TIN
            </span>
            <span className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1">
              2. THANH TOÁN
            </span>
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="bg-gray-50 p-5 rounded-lg mb-6 border">
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Nhập mã giảm giá</span>
              <button className="text-blue-500 text-sm hover:underline">
                Áp dụng
              </button>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Số lượng sản phẩm</span>
              <span>01</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tổng tiền hàng</span>
              <span>{originalPrice.toLocaleString("vi-VN")}đ</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Phí vận chuyển</span>
              <span>Miễn phí</span>
            </div>
            <div className="flex justify-between text-gray-700 border-t mt-2 pt-2">
              <span>Giảm giá trực tiếp</span>
              <span>-{discount.toLocaleString("vi-VN")}đ</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800 border-t mt-3 pt-3">
              <span>Tổng tiền</span>
              <span className="text-red-600">
                {total.toLocaleString("vi-VN")}đ
              </span>
            </div>
          </div>

          {/* Phương thức thanh toán */}
          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <p className="font-semibold mb-2 text-gray-800">
              Thông tin thanh toán
            </p>

            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Chọn phương thức thanh toán</option>
              <option value="cod">Thanh toán khi nhận hàng (COD)</option>
              <option value="momo">Ví MoMo</option>
              <option value="bank">Chuyển khoản ngân hàng</option>
              <option value="credit">Thẻ tín dụng/Ghi nợ</option>
            </select>
          </div>

          {/* Tổng tạm tính */}
          <div className="text-center mb-4">
            <p className="text-gray-700 text-sm mb-1">Tổng tiền tạm tính</p>
            <p className="text-2xl font-bold text-red-600">
              {total.toLocaleString("vi-VN")}đ
            </p>
          </div>

          {/* Nút thanh toán */}
          <button
            onClick={handlePayment}
            disabled={!paymentMethod}
            className={`w-full py-3 rounded-md font-semibold transition ${
              paymentMethod
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            THANH TOÁN
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
