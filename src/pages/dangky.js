import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20 mb-20">
        <h1 className="text-3xl font-bold mb-6">Đăng Ký</h1>
        {["Nhập tên tài khoản", "Nhập Email", "Nhập mật khẩu", "Nhập lại mật khẩu"].map(
          (ph, i) => (
            <input
              key={i}
              type={ph.includes("mật") ? "password" : "text"}
              placeholder={ph}
              className="border px-4 py-2 w-80 mb-3 rounded-md"
            />
          )
        )}
        <button className="bg-[#9cc9e2] px-6 py-2 rounded-md text-lg font-medium hover:bg-[#8ac0dd] transition">
          Đăng Ký Ngay
        </button>
      </div>
      <Footer />
    </>
  );
}