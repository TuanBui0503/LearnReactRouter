import thongnhat from '../assets/nhamaysuathongnhat.png'
import nmsuasaigon from '../assets/suasaigon.png'
import conbo from '../assets/conbo.png'
import nhamay from '../assets/nhâmy.png'
export default function Section3 () {
    return (
        <>
        {/* Những cột mốc không quên */}
      <div className="px-4 md:py-14 bg-blue-800 text-white">
        <div className="py-32">
          <h3 className="text-5xl font-semibold pb-16 border-solid border-b">
            <span className="sm:text-3xl">Những cột mốc</span>
            <br />
            <span className="sm:text-3xl">Không quên</span>
          </h3>
          <div className="flex gap-2 ">
            <div className="md:w-[25%]  sm:w-[50%] pt-6">
              <span>1976</span>
              <p className="pr-8 mt-2 text-sm">
                VinaMilk được thành lập với tên Công ty sữa - Cà phê Miền Nam và
                tiếp quản 3 nhà máy sữa Thống Nhất, nhà máy sữa Trường Thọ, nhà
                máy sữa bột Dialac
                <img className="mt-6 w-full" src={thongnhat} alt="" />
              </p>
            </div>
            <div className="md:w-[25%]  sm:w-[50%] pt-6">
              <span>2003</span>
              <p className="pr-8 mt-2 text-sm">
                Cổ phần hóa và đổi tên thành CTCP Sữa Việt Nam VinaMilk khánh
                thành Nhà máy sữa Bình Định. <br />
                Khánh thành Nhà máy sữa Sài Gòn
                <img className="mt-6 w-full" src={nmsuasaigon} alt="" />
              </p>
            </div>
            <div className="md:w-[25%]  sm:w-[50%] pt-6">
              <span>2006</span>
              <p className="pr-8 mt-2 text-sm">
                Niêm yết trên sàn chứng khoán TP.HCM (HOSE) <br />
                VinaMilk khánh thành trang trại bò sữa đầu tiên tại Tuyên Quang
                <img className="mt-6 w-full" src={conbo} alt="" />
              </p>
            </div>
            <div className="md:w-[25%]  sm:w-[50%] pt-6">
              <span>2010</span>
              <p className="pr-8 mt-2 text-sm">
                Đầu tư 10 triệu USD nắm giữ 19,3% cổ phần của Miraka Limited tại
                New Zealand và tăng lên 22,81% vào năm 2015. <br />
                Năm 2022, Miraka là công ty liên kết với tỷ lệ sở hữu 16,96% do
                Miraka tiến hành tăng vốn.
                <img className="mt-6 w-full" src={nhamay} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}