import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LienHe() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-50 py-3 px-10 text-gray-500 font-semibold text-lg">
        Liên Hệ
      </div>

      <div className="px-10 py-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-blue-700 font-bold text-xl mb-6">Zalo</h2>

          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-6">
            {/* Thông tin Zalo */}
            <div className="flex flex-col items-center w-1/2">
              <img src="/picture/logo.png" alt="logo" className="w-24 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">LAPTOP ONLINE STORE</h3>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                Nhắn tin
              </button>
              <p className="text-gray-600 text-sm mt-4 text-center">
                Cảm ơn Quý khách đã theo dõi Zalo OA của LaptopStore. Rất mong được phục vụ Quý
                khách trong thời gian sắp tới.
              </p>
            </div>

            {/* QR Zalo */}
            <div className="flex flex-col items-center w-1/2">
              <img src="/picture/qr.png" alt="QR Zalo" className="w-48" />
              <p className="text-gray-600 text-xs mt-2 text-center">
                Mở Zalo, bấm quét QR để xem trên điện thoại
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
