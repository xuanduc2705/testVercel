import anh from "./images/banner2.png";
const SectionTwo = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6d5545",
    padding: "50px",
    height: "100vh",
    color: "#fff",
  };

  const contentStyle = {
    width: "50%",
  };

  const imageStyle = {
    width: "45%",
    display: "flex",
    flexDirection: "column",
  };

  const imageItemStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  };

  const sectionStyle = {
    marginBottom: "40px",
  };

  const numberTitleStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>KHÔNG GIAN HOÀN HẢO</h1>
        <div style={sectionStyle}>
          <div style={numberTitleStyle}>01</div>
          <h2>Nội thất sang trọng</h2>
          <p>
            Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp
            dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung
            của bạn trong kết quả tìm kiếm. Những mô tả được viết tốt kèm theo
            các từ khóa phù hợp có thể tăng lượt xem vì chúng giúp landing page
            của bạn hiển thị tốt trong kết quả tìm kiếm.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={numberTitleStyle}>02</div>
          <h2>Không gian thoải mái</h2>
          <p>
            Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp
            dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung
            của bạn trong kết quả tìm kiếm. Những mô tả được viết tốt kèm theo
            các từ khóa phù hợp có thể tăng lượt xem vì chúng giúp landing page
            của bạn hiển thị tốt trong kết quả tìm kiếm.
          </p>
        </div>
      </div>
      <div style={imageStyle}>
        <img
          style={imageItemStyle}
          src="https://via.placeholder.com/400x200"
          alt="Sofa"
        />
        <img
          style={imageItemStyle}
          src="https://via.placeholder.com/400x200"
          alt="Phòng khách"
        />
      </div>
    </div>
  );
};
export default SectionTwo;
