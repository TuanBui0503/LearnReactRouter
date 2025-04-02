import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className="pb-8 pt-12 border-t text-[#0213B0]">
      <div className="grid md:grid-cols-6 xl:grid-cols-8 gap-6 pb-14">
        <div className="flex flex-col gap-2 md:gap-4 xl:col-span-2">
          {/* Trụ sở chính */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold">CÔNG TY CỔ PHẦN SỮA VIỆT NAM</div>
            <div className="text-sm">
              Trụ sở chính: 10, Tân Trào, Phường Tân Phú, Quận 7, Thành Phố Hồ
              Chí Minh, Việt Nam
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div>vinamilk@vinamilk.com.vn</div>
            <div>(028) 54 155 555</div>
            <div>MST: 0300588569</div>
          </div>
        </div>
        {/* Sắm sửa */}
        <div className="flex flex-col">
          <div className="pb-2.5 font-semibold">SẮM SỬA</div>
          <a className="flex py-2 text-sm" href="">
            Bán chạy
          </a>
          <a className="flex py-2 text-sm" href="">
            Ưu đãi
          </a>
          <a className="flex py-2 text-sm" href="">
            Cửa hàng
          </a>
          <a className="flex py-2 text-sm" href="">
            Công bố
          </a>
        </div>
        {/* Luôn để tâm */}
        <div className="flex flex-col">
          <div className="pb-2.5 font-semibold">LUÔN ĐỂ TÂM</div>
          <a className="flex py-2 text-sm" href="">
            Bền vững
          </a>
          <a className="flex py-2 text-sm" href="">
            Công nghệ
          </a>
          <a className="flex py-2 text-sm" href="">
            Nghiên cứu
          </a>
        </div>
        {/* Luôn là Vinamilk */}
        <div className="flex flex-col">
          <div className="pb-2.5 font-semibold">LUÔN LÀ VINAMILK</div>
          <a className="flex py-2 text-sm" href="">
            Từ 1976
          </a>
          <a className="flex py-2 text-sm" href="">
            Người dẫn đường
          </a>
          <a className="flex py-2 text-sm" href="">
            Cùng một nhà
          </a>
          <a className="flex py-2 text-sm" href="">
            Chất Vinamilk
          </a>
        </div>
        {/* Luôn vui khỏe */}
        <div className="flex flex-col">
          <div className="pb-2.5 font-semibold">LUÔN VUI KHỎE</div>
          <Link className="flex py-2 text-sm" to="/dep-da-dep-dang">
            Đẹp da - Đẹp dáng
          </Link>
          <a className="flex py-2 text-sm" href="">
            Thông tin dinh dưỡng
          </a>
        </div>
        {/* Luôn cùng bạn */}
        <div className="flex flex-col">
          <div className="pb-2.5 font-semibold">LUÔN CÙNG BẠN</div>
          <a className="flex py-2 text-sm" href="">
            Truyền thông{' '}
          </a>
          <a className="flex py-2 text-sm" href="">
            Cổ đông
          </a>
          <a className="flex py-2 text-sm" href="">
            Mời vào đội
          </a>
          <a className="flex py-2 text-sm" href="">
            Liên hệ
          </a>
        </div>
        {/* Luôn hỗ trợ */}
        <div className="flex flex-col">
          <div className="pb-2.5 font-semibold">LUÔN HỖ TRỢ</div>
          <a className="flex py-2 text-sm" href="">
            Đổi trả
          </a>
          <a className="flex py-2 text-sm" href="">
            Thanh toán
          </a>
          <a className="flex py-2 text-sm" href="">
            Giao hàng
          </a>
          <a className="flex py-2 text-sm" href="">
            Nhận quà
          </a>
        </div>
      </div>
      {/* icon */}
      <div className="flex text-sm font-medium">
        <div className="pr-1">Bản quyền thuộc về Vinamilk 2023</div>
        <a href="#" className="px-1 underline">
          Điều khoản sử dụng |
        </a>
        <a href="#" className="px-1 underline">
          Chính sách bảo mật
        </a>
      </div>
      <div className="text-sm font-medium">
        Số giấy chứng nhận đăng ký doanh nghiệp: 0300588569. Phạm vi ngày:
        20/11/2003. Nơi cấp: Sở Kế hoạch và Đầu tư vào Thành phố Hồ Chí Minh
      </div>
    </div>
  )
}
