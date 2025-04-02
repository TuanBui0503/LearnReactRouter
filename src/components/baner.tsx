import herobanner from '../assets/hero_Banner_fb7add5c1f.png'

export default function Banner() {
  return (
    <>
      <div>
        <img src={herobanner} alt="" />
      </div>
      <div className="container py-10 sm:py-16 md:py-28 ">
        <h4 className="text-3xl font-semibold mt-2 text-center cursor-pointer">
          Táo bạo. Quyết tâm
        </h4>
        <h2 className="font-bold text-5xl text-center">Luôn là chính mình.</h2>
        <div className="w-full pt-10">
          <ol>
            <li className="border-solid border-b-2 border-indigo-700 p-6 group relative">
              <span className="items-center">01</span>
              <span className="ml-16 font-medium hover:text-2xl p-4 transition-all duration-100">
                Thông điệp từ giám đốc
                <span className="absolute right-0 top-1/2 opacity-0 group-hover:opacity-100">
                  ↓
                </span>
              </span>
            </li>
            <li className="border-solid border-b-2 border-indigo-700 p-6 group relative">
              <span className="items-center">02</span>
              <span className="ml-16 font-medium hover:text-2xl p-4 transition-all duration-100">
                Lời hứa Vinamilk
                <span className="absolute right-0 top-1/2 opacity-0 group-hover:opacity-100">
                  ↓
                </span>
              </span>
            </li>
            <li className="border-solid border-b-2 border-indigo-700 p-6 group relative">
              <span className="items-center">03</span>
              <span className="ml-16 font-medium hover:text-2xl p-4 transition-all duration-100">
                Những cột mốc không quên
                <span className="absolute right-0 top-1/2 opacity-0 group-hover:opacity-100">
                  ↓
                </span>
              </span>
            </li>
            <li className="border-solid border-b-2 border-indigo-700 p-6 group relative">
              <span className="items-center">04</span>
              <span className="ml-16 font-medium hover:text-2xl p-4 transition-all duration-50">
                Người dẫn đường
                <span className="absolute right-0 top-1/2 opacity-0 group-hover:opacity-100">
                  ↓
                </span>
              </span>
            </li>
            <li className="border-solid border-b-2 border-indigo-700 p-6 group relative">
              <span className="items-center">05</span>
              <span className="ml-16 font-medium hover:text-2xl p-4 transition-all duration-100">
                Cùng một nhà
                <span className="absolute right-0 top-1/2 opacity-0 group-hover:opacity-100">
                  ↓
                </span>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}
