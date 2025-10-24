import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function GioiThieu() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-50 py-3 px-10 text-gray-500 font-semibold text-lg">
        Giới thiệu
      </div>

      <div className="px-10 py-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Banner */}
          <div className="flex gap-3 mb-6">
            <img src="/picture/banner1.png" alt="banner1" className="w-1/3 rounded-md" />
            <img src="/picture/banner2.png" alt="banner2" className="w-1/3 rounded-md" />
            <img src="/picture/banner3.png" alt="banner3" className="w-1/3 rounded-md" />
          </div>

          {/* Tiêu đề */}
          <h2 className="text-center text-lg font-bold mb-4 text-gray-800">
            LAPTOP_online store mang trải nghiệm tốt nhất đến cho khách hàng
          </h2>

          {/* Nội dung giới thiệu */}
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/picture/logo.png" alt="logo" className="w-20 h-20 rounded-full" />
                <div>
                  <h3 className="font-bold text-gray-700">LAPTOP ONLINE STORE</h3>
                  <p className="text-gray-600 text-sm">
                    Laptop.online store – Cửa hàng laptop chính hãng uy tín. Thành lập từ 2021,
                    chuyên cung cấp laptop gaming, học tập và văn phòng chính hãng.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                VPS.Laptop hướng đến mục tiêu mang lại trải nghiệm công nghệ tốt nhất mỗi ngày cho
                khách hàng trên khắp Việt Nam.
              </p>
              <p className="text-gray-700 text-sm">
                Chúng tôi tin rằng công nghệ giúp mọi người kết nối, sáng tạo và tận hưởng cuộc
                sống hiện đại, năng động hơn.
              </p>
            </div>

            {/* Ảnh minh họa */}
            <img src="/picture/laptop.png" alt="laptop" className="w-1/3 rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
