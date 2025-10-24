import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ThongTinGiaoHang() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // lưu tạm thông tin vào localStorage (sau có thể gửi server)
    localStorage.setItem("shippingInfo", JSON.stringify(formData));
    navigate("/thanhtoan");
  };

  return (
    <>
      <Navbar />

      <div className="bg-blue-100 py-4 text-center text-2xl font-bold text-gray-800">
        Thông tin giao hàng
      </div>

      <div className="flex justify-center mt-6">
        <div className="bg-white shadow-md rounded-xl w-[600px] p-8">
          <div className="flex justify-center gap-6 mb-6 border-b pb-2">
            <span className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1">
              1. THÔNG TIN
            </span>
            <span className="font-bold text-gray-400">2. THANH TOÁN</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Tên khách hàng
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Địa chỉ giao hàng
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ nhận hàng"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Ghi chú
              </label>
              <input
                type="text"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Nhập ghi chú (nếu có)"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập địa chỉ email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Xác nhận thông tin
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
