
import bethungsua from '../assets/promise_cc9c5dc816.png'
export default function Section2 () {
    return (
        <>
        {/* bê thùng sữa */}
      <div className="flex py-44 sm:flex-col sm:py-16 sm:px-8 md:flex-row ">
        <div className=" w-[43%] pr-16 sm:w-full  ">
          <h3 className="text-5xl font-semibold">Lời hứa của Vinamilk</h3>
          <div className="pt-14 flex flex-col gap-20 ">
            {/* nói là làm */}
            <div>
              <div className="flex justify-between pb-4">
                <span>Nói là làm</span>
                <span>01</span>
              </div>
              <hr className="border-t border-indigo-700"></hr>
              <div className="pt-4">
                <p>
                  Tại Vinamilk, sự minh bạch không chỉ là một lời hứa sáo rỗng
                  trên nhãn mác. Chúng tôi không ngừng tìm kiếm các đối tác phù
                  hợp trên toàn thế giới để mang về các nguyên liệu an toàn, đạt
                  chất lượng quốc tế và phương pháp sản xuất tiên tiến nhất.
                  Những quyết định về nguyên vật liệu mà chúng tôi đưa ra luôn
                  vì bạn và vì những người mà bạn để tâm chăm sóc.
                </p>
              </div>
            </div>
            {/* không lòng vòng */}
            <div>
              <div className="flex justify-between pb-4">
                <span>Thật lòng, không lòng vòng</span>
                <span>02</span>
              </div>
              <hr className="border-t border-indigo-700"></hr>
              <div className="pt-4">
                <p>
                  Toàn bộ nội dung truyền thông của chúng tôi đều chân thật và
                  trực diện. Chúng tôi tự hào về chất lượng nguyên liệu của mình
                  nên sẽ luôn minh bạch với bạn. Thành phần nào không ghi trên
                  bao bì, nghĩa là không có trong sản phẩm.
                </p>
              </div>
            </div>
            {/* cải tiến không ngừng */}
            <div>
              <div className="flex justify-between pb-4">
                <span>Cải tiến không ngừng</span>
                <span>03</span>
              </div>
              <hr className="border-t border-indigo-700"></hr>
              <div className="pt-4">
                <p>
                  Trước khi được xuất xưởng và trao đến tay bạn, tất cả sản phẩm
                  Vinamilk đều phải đáp ứng đầy đủ các tiêu chuẩn chất lượng
                  khắt khe nhất của chúng tôi. Nhưng tốt chưa bao giờ là đủ tốt,
                  chúng tôi luôn chủ động thử thách chính mình. Ngày mai sẽ là
                  cơ hội để hoàn thiện và hoàn thiện hơn nữa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[57%] sm:w-full sm:mt-10">
          <img src={bethungsua} alt="" />
        </div>
      </div>
        </>
    )
}