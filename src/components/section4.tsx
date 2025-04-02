import { useState } from 'react'
export default function Section4() {
  const [Active, setActive] = useState('button1')

  return (
    <>
      {/* Người dẫn đường */}
      <div className="md:py-28 sm:py-16 ">
        <h3 className="md:text-5xl font-semibold text-center sm:text-3xl">
          Người dẫn đường
        </h3>
        <div className="pt-12">
          {/* 2 nút ban điều hành + quản trị */}
          <div className="flex justify-center ">
            <div className="inline-flex justify-center py-2 p-2 border border-solid border-blue-800 rounded-md">
              <button
                onClick={() => setActive('button1')}
                className={`w-full px-20 py-2 font-medium ${
                  Active === 'button1'
                    ? 'bg-blue-800 text-white'
                    : 'bg-[#FFFFF1] text-[#0213B0]'
                }`}
              >
                <span>Ban điều hành</span>
              </button>
              <button
                onClick={() => setActive('button2')}
                className={`w-full px-20 py-2 font-medium whitespace-nowrap ${
                  Active === 'button2'
                    ? 'bg-blue-800 text-white '
                    : 'bg-[#FFFFF1] text-[#0213B0]'
                }`}
              >
                <span>Hội đồng quản trị</span>
              </button>
            </div>
          </div>
          {/* ban quản trị */}
          {Active === 'button1' && (
            <div className="pt-12">
              <div className="flex flex-wrap border-b border-solid border-blue-800">
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Bà</span>
                    <h5 className="text-xl font-medium">Mai Kiều Liên</h5>
                    <span className="text-sm italic">Tổng giám đốc</span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm font-medium">Ông</span>
                    <h5 className="text-xl font-medium">Đoàn Quốc Khánh</h5>
                    <span className="text-sm italic">
                      Quyền Giám đốc Điều hành Phát triển vùng nguyên liệu
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Bà</span>
                    <h5 className="text-xl font-medium">Bùi Thị Hương</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Nhân sự & Hành chính, Đối ngoại
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl font-medium">Nguyễn Quốc Khánh</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Nghiên cứu và Phát triển
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap ">
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl font-medium">Lê Thành Liên</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Tài chính
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl font-medium">Nguyễn Quang Trí</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Marketing
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl font-medium">Lê Hoàng Minh</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Sản xuất
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4"></div>
              </div>
            </div>
          )}
          {/* button2 */}
          {Active === 'button2' && (
            <div className="pt-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-14 sm:grid-cols-2">
                {/* HÀNG 1 */}
                <div className="w-full pt-4">
                  <div className="mx-4 pb-4 border-b border-solid border-blue-800">
                    <span className="px-4 font-medium">ỦY BAN CHIẾN LƯỢC</span>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Bà</span>
                        <h5 className="text-xl font-medium">Mai Kiều Liên</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban chiến lược <br /> Thành viên HĐQT
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Lee Meng Tat</h5>
                        <span className="text-sm italic">
                          Thành viên Uỷ ban chiến lược <br /> Thành viên HĐQT
                          không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Bà</span>
                        <h5 className="text-xl font-medium">Đặng Thị Thu Hà</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban chiến lược <br /> Thành viên HĐQT
                          không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Alain Xavier Cany</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban chiến lược <br /> Thành viên HĐQT
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Lê Thành Liêm</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban chiến lược <br /> Thành viên HĐQT
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Hàng 2 */}
                <div className="w-full pt-4">
                  <div className="mx-4 pb-4 border-b border-solid border-blue-800">
                    <span className="px-4 font-medium">UỶ BAN NHÂN SỰ</span>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Nguyễn Hạnh Phúc</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban Nhân sự <br /> Thành viên HĐQT (Thành viên độc lập)
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Bà </span>
                        <h5 className="text-xl font-medium">Mai Kiều Liên</h5>
                        <span className="text-sm italic">
                          Thành viên Uỷ ban Nhân sự <br /> Thành viên HĐQT
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Lee Meng Tat</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban Nhân sự <br /> Thành viên HĐQT
                          không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Bà</span>
                        <h5 className="text-xl font-medium">Đặng Thu Hà</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban Nhân sự <br /> Thành viên HĐQT không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
                {/* Hàng 3 */}
                <div className="w-full pt-4">
                  <div className="mx-4 pb-4 border-b border-solid border-blue-800">
                    <span className="px-4 font-medium">ỦY BAN LƯƠNG THƯỞNG </span>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Bà</span>
                        <h5 className="text-xl font-medium">Tiêu Yến Trinh</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban Lương thưởng <br /> Thành viên HĐQT độc lập
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông </span>
                        <h5 className="text-xl font-medium">Nguyễn Hạnh Phúc</h5>
                        <span className="text-sm italic">
                          Thành viên Uỷ ban Lương Thưởng <br /> Thành viên HĐQT (Thành viên độc lập)
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Michael Chye Hin Fah</h5>
                        <span className="text-sm italic">
                        Thành viên Uỷ ban Lương Thưởng <br /> Thành viên HĐQT
                          không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Hoàng Ngọc Thạch</h5>
                        <span className="text-sm italic">
                        Thành viên Uỷ ban Lương Thưởng <br /> Thành viên HĐQT
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
                {/* Hàng 4 */}
                <div className="w-full pt-4">
                  <div className="mx-4 pb-4 border-b border-solid border-blue-800">
                    <span className="px-4 font-medium">ỦY BAN KIỂM TOÁN</span>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Đỗ Lê Hùng</h5>
                        <span className="text-sm italic">
                          Chủ tịch Uỷ ban Kiểm toán <br /> Thành viên HĐQT độc lập
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông </span>
                        <h5 className="text-xl font-medium">Michael Chye Hin Fah</h5>
                        <span className="text-sm italic">
                          Thành viên Uỷ ban Kiểm toán <br /> Thành viên HĐQT không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Hoàng Ngọc Thạch</h5>
                        <span className="text-sm italic">
                        Thành viên Uỷ ban Kiểm toán <br /> Thành viên HĐQT
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="md:w-full sm:w-[50%] p-2 sm:p-4">
                      <button className="flex flex-col w-full gap-2 p-4 text-left">
                        <span className="text-sm">Ông</span>
                        <h5 className="text-xl font-medium">Alain Xavier Cany</h5>
                        <span className="text-sm italic">
                        Thành viên Uỷ ban Kiểm toán <br /> Thành viên HĐQT không điều hành
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
