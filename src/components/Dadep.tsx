import Blog1 from '../assets/Blog_1.jpg'
import Blog2 from '../assets/Blog_2.jpg'
import Blog3 from '../assets/Blog_3.jpg'
import Blog4 from '../assets/Blog_4.jpg'
import Footer from './Footer'
export default function Dadep() {
  return (
    <>
      <div className="flex flex-col p-4 px-6 gap-6 pb-20 w-full text-[#0213B0]">
        <h2 className="text-center text-6xl font-semibold">
          Đẹp da - Đẹp dáng
        </h2>
        <div className="flex">
          <div className="grid pt-10 gap-6 grid-cols-4">
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <img
                  className="w-full h-60 object-cover"
                  src={Blog1}
                  alt="bolog1"
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className='text-xs'>Đẹp da - Đẹp dáng</span>
                <h5 className='font-semibold text-lg'>
                  TOP 10+ Nước ép trái cây giúp giảm cân hiệu quả nhanh chóng
                </h5>
                <span>16/08/2024</span>
              </div>
            </div>
            {/* cột 2 */}
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <img
                  className="w-full h-60 object-cover"
                  src={Blog2}
                  alt="bolog1"
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className='text-xs'>Đẹp da - Đẹp dáng</span>
                <h5 className='font-semibold text-lg'>
                  Điểm danh 15 loại nước ép cho da mịn màng, hồng hào tự nhiên
                </h5>
                <span>16/08/2024</span>
              </div>
            </div>
            {/* cột 3 */}
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <img
                  className="w-full h-60 object-cover"
                  src={Blog3}
                  alt="bolog1"
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className='text-xs'>Đẹp da - Đẹp dáng</span>
                <h5 className='font-semibold text-lg'>
                 Uống trà atiso trị mụn được không? 5 lợi ích làm đẹp da
                </h5>
                <span>16/08/2024</span>
              </div>
            </div>
            {/* cột 4 */}
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <img
                  className="w-full h-60 object-cover"
                  src={Blog4}
                  alt="bolog1"
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className='text-xs'>Đẹp da - Đẹp dáng</span>
                <h5 className='font-semibold text-lg'>
                  Ăn sữa chua có đẹp da không? 8 lợi ích dưỡng da từ sữa chua nên biết
                </h5>
                <span>16/08/2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
