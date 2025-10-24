import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Tài khoản mẫu để test phân quyền
    if (username === "admin" && password === "123456") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username,
          role: "admin",
          token: "admin-token",
        })
      );
      navigate("/admin/dashboard"); // điều hướng admin
    } else if (username === "user" && password === "123456") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username,
          role: "user",
          token: "user-token",
        })
      );
      navigate("/nguoidung"); // điều hướng user
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20 mb-20">
        <h1 className="text-3xl font-bold mb-6">Đăng Nhập</h1>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Tên Tài Khoản"
          className="border px-4 py-2 w-80 mb-3 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật Khẩu"
          className="border px-4 py-2 w-80 mb-5 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-[#9cc9e2] px-6 py-2 rounded-md text-lg font-medium hover:bg-[#8ac0dd] transition"
        >
          Đăng Nhập
        </button>

        <div className="mt-4 text-blue-600 text-sm text-center">
          <Link to="/forgot" className="hover:underline">
            Quên Mật Khẩu?
          </Link>
          <br />
          <Link to="/register" className="hover:underline">
            Tạo Tài Khoản Ngay
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
