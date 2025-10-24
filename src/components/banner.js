import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  const leftBanners = [
    { img: "/picture/banner1.png", link: "/products/banner1" },
    { img: "/picture/banner2.png", link: "/products/banner2" },
    { img: "/picture/banner3.png", link: "/products/banner3" },
  ];

  const rightBanners = [
    { img: "/picture/banner2.png", link: "/products/banner2" },
    { img: "/picture/banner3.png", link: "/products/banner3" },
    { img: "/picture/banner1.png", link: "/products/banner1" },
  ];

  // Chỉ số ảnh hiện tại
  const [index, setIndex] = useState(0);

  // Tự động đổi ảnh sau 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % leftBanners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 mt-6 px-10">
      {/* Banner bên trái */}
      <div
        onClick={() => navigate(leftBanners[index].link)}
        className="w-full rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      >
        <img
          src={leftBanners[index].img}
          alt="Banner trái"
          className="w-full h-[180px] object-cover rounded-lg transition-all duration-700"
        />
      </div>

      {/* Banner bên phải */}
      <div
        onClick={() => navigate(rightBanners[index].link)}
        className="w-full rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      >
        <img
          src={rightBanners[index].img}
          alt="Banner phải"
          className="w-full h-[180px] object-cover rounded-lg transition-all duration-700"
        />
      </div>
    </div>
  );
}
