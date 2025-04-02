import ceo from '../assets/ceo_avatar_93167cc483.png'
export default function Section1 () {
    return (
        <>
          <div className="flex w-full sm:flex-col md:flex-row ">
        <div
          className=" flex justify-center py-10 w-[57%] px-6 sm:w-full"
          style={{ backgroundColor: `rgb(2, 19, 176)` }}
        >
          <img src={ceo} alt="" />
        </div>
        <div className="py-10 px-4 flex flex-col w-[43%] px-8 sm:w-full ">
          <h3 className="text-5xl">
            Thông điệp <br />
            Từ Tổng giám đốc
          </h3>
          <div className="flex justify-between mt-8 pb-5">
            <span>Bà.Mai Kiều Liên</span>
            <span>
              Tổng giám đốc công ty sữa <br /> Vinamilk Việt Nam
            </span>
          </div>
          <hr className="border-t border-indigo-700"></hr>
          <div className="pt-8">
            <h5 className="text-xl py-4">
              Muốn có sản phẩm đi đầu thì phải luôn sáng tạo. Sáng tạo là yếu tố
              sống còn.
            </h5>
            <p className="py-4">
              Năm 1976, chúng tôi bắt đầu cuộc hành trình với rất nhiều khó
              khăn, nhưng đích đến vô cùng xứng đáng: để dinh dưỡng là quyền lợi
              của tất cả trẻ em Việt Nam. Không có chuyên gia tư vấn, không có
              nguồn vốn, điều chúng tôi có nhiều nhất lúc đó là quyết tâm thực
              hiện bằng được mục tiêu của mình. Chúng tôi vượt qua bao sự hoài
              nghi để chứng minh rằng chúng ta hoàn toàn có thể tạo ra những sản
              phẩm dinh dưỡng cao cho mọi người, mọi nhà. Hơn ai hết, chúng tôi
              tin cái khó mới là cái đáng để làm, và sẽ không ai thay mình làm.
            </p>
            <p className="py-4">
              Từ nhà máy sữa bột trẻ em đầu tiên được khôi phục bằng năng lực kỹ
              thuật thuần Việt vào năm 1989, đến trang trại và nhà máy sữa tiên
              phong đạt chứng nhận trung hoà carbon tại Đông Nam Á. Từ công thức
              sữa bột Dielac đầu tiên được nghiên cứu để phù hợp với thể trạng
              trẻ em Việt Nam, đến danh mục hơn 200 sản phẩm cho mọi lứa tuổi.
              Vinamilk hướng đến người tiêu dùng bằng tất cả sự quyết tâm của
              mình, để mỗi sản phẩm đều là một lời hứa - rằng bạn có thể chăm
              sóc tốt cho bản thân và cả người mình thương quý.
            </p>
            <p className="py-4">
              Ngày mai còn rất nhiều thử thách và những bài học mới. Tôi và tập
              thể Vinamilk luôn sẵn sàng tư duy lại mọi điều đã biết, mày mò
              những cách làm mới. Vinamilk sẽ luôn tiến về phía trước, cùng bạn,
              và vì bạn.
            </p>
          </div>
        </div>
      </div>
        </>
    )
}