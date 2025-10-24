import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function NguoiDung() {
  const navigate = useNavigate();

  // Dữ liệu giả lập người dùng (sau này có thể lấy từ API)
  const [user, setUser] = useState({
    name: "Đoàn Thị Thanh Trúc",
    phone: "0123456789",
    email: "thanhtruc@example.com",
    gender: "Nữ",
    birthday: "01/01/2000",
    address: "123 Nguyễn Trãi, TP.HCM",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    alert("Cập nhật thông tin thành công!");
  };

  const handleLogout = () => {
    // Xóa dữ liệu user (nếu có session/localStorage)
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-50 py-3 px-10 text-gray-500 font-semibold text-lg">
        Thông Tin Người Dùng – {user.name}
      </div>

      <div className="px-10 py-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Thông tin người dùng */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
            <div>
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.phone}</p>
              <p className="text-gray-400 text-xs">
                Cập nhật lần sau 01/01/2026
              </p>
            </div>

            <div className="flex gap-10 text-center">
              <div>
                <h4 className="font-semibold text-lg">0</h4>
                <p className="text-gray-600 text-sm">Tổng số đơn hàng đã mua</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">0đ</h4>
                <p className="text-gray-600 text-sm">Tổng số tiền đã tích lũy</p>
              </div>
            </div>
          </div>

          {/* Bảng nội dung */}
          <div className="flex">
            {/* Menu trái */}
            <div className="w-1/4 pr-6 border-r border-gray-200">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="font-semibold">Tổng quan</li>
                <li>Lịch sử mua hàng</li>
                <li>Tra cứu bảo hành</li>
                <li>Tìm kiếm cửa hàng</li>
                <li>Thông tin tài khoản</li>
                <li>Địa chỉ</li>
                <li>Góp ý</li>
                <li
                  className="text-red-600 font-semibold cursor-pointer hover:underline"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </li>
              </ul>
            </div>

            {/* Nội dung phải */}
            <div className="flex-1 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Thông Tin Tài Khoản</h3>
                <button
                  onClick={handleEditToggle}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                >
                  {isEditing ? "Hủy" : "Chỉnh sửa"}
                </button>
              </div>

              {/* Hiển thị / Chỉnh sửa */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
                <div>
                  <label className="block text-gray-700 text-sm">
                    Họ và tên:
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{user.name}</p>
                  )}

                  <label className="block mt-2 text-gray-700 text-sm">
                    Giới tính:
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{user.gender}</p>
                  )}

                  <label className="block mt-2 text-gray-700 text-sm">
                    Ngày sinh:
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{user.birthday}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm">
                    Số điện thoại:
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{user.phone}</p>
                  )}

                  <label className="block mt-2 text-gray-700 text-sm">
                    Email:
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{user.email}</p>
                  )}

                  <label className="block mt-2 text-gray-700 text-sm">
                    Địa chỉ:
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{user.address}</p>
                  )}
                </div>
              </div>

              {/* Nút lưu khi chỉnh sửa */}
              {isEditing && (
                <div className="mt-4 text-right">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
