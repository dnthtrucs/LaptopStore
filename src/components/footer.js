export default function Footer() {
  return (
    <footer className="bg-[#b7e1f3] mt-10 px-10 py-6 text-sm text-gray-700">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Về Chúng Tôi</h3>
          <p>
            LaptopStore – chuyên cung cấp laptop chính hãng, đa dạng mẫu mã từ văn
            phòng, học tập đến gaming cao cấp. Chúng tôi cam kết mang đến sản phẩm
            chất lượng, giá cả cạnh tranh và dịch vụ bảo hành uy tín.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Đường Dẫn</h3>
          <ul>
            <li>Trang Chủ</li>
            <li>Sản Phẩm</li>
            <li>Liên Hệ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Thông Tin Liên Hệ</h3>
          <ul>
            <li>📍 125A Lê Thanh Nghị, Hai Bà Trưng, Hà Nội</li>
            <li>📞 +84 912345678</li>
            <li>📧 laptopstorevn@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#9cc9e2] mt-8 pt-2 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} LaptopStore. All rights reserved.
      </div>
    </footer>
  );
}
