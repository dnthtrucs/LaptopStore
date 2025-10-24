import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ForgotPassword() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20 mb-20">
        <h1 className="text-3xl font-bold mb-6">Lấy Lại Mật Khẩu</h1>
        {[
          "Tên Truy Cập",
          "Email hoặc Số Điện Thoại",
          "Nhập Mật Khẩu Mới",
          "Nhập Lại Mật Khẩu",
        ].map((ph, i) => (
          <input
            key={i}
            type="text"
            placeholder={ph}
            className="border px-4 py-2 w-80 mb-3 rounded-md"
          />
        ))}
        <button className="bg-[#9cc9e2] px-6 py-2 rounded-md text-lg font-medium hover:bg-[#8ac0dd] transition">
          Hoàn Thành
        </button>
      </div>
      <Footer />
    </>
  );
}