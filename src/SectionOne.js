import { FaKitchenSet } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import anh from "./images/slide02.png";
import demo1 from "./images/demo1.png";
import demo2 from "./images/demo2.png";
import demo3 from "./images/demo3.png";
import demo4 from "./images/demo4.png";
import demo5 from "./images/demo5.png";
import demo6 from "./images/demo6.png";
import "./App.css";
const SectionOne = () => {
  return (
    <>
      <div
        className="w-full flex flex-column"
        style={{ backgroundColor: "white", zIndex: "10", position: "absolute" }}
      >
        <div
          className="w-1 mx-auto mt-5"
          style={{
            borderTop: "4px solid rgb(229, 174, 73)",
            borderRight: "4px solid rgb(229, 174, 73)",
            borderBottom: "4px solid rgb(229, 174, 73)",
            borderLeft: "0px !important",
          }}
        ></div>
        <div className="grid w-8 mx-auto justify-content-between py-8">
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <FaKitchenSet className="icon-hover" style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Set Đồ Tiện Lợi
            </span>
          </div>
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <GiReceiveMoney
              className="icon-hover"
              style={{ fontSize: "8vh" }}
            />
            <span className="font-bold text-black text-2xl mt-4">
              Giá Cả Hợp Lý
            </span>
          </div>
          <div className="flex flex-column  flex align-items-center justify-content-center col-3">
            <FaTools className="icon-hover" style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Hỗ Trợ Lắp Đặt
            </span>
          </div>
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <FaHeadset className="icon-hover" style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Tư Vấn Miễn Phí
            </span>
          </div>
        </div>
        <div
          className="w-full flex py-8 flex-column"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <span className="mx-auto font-bold text-5xl ">
            THÔNG TIN SẢN PHẨM
          </span>
          <div
            className="w-1 mx-auto mt-5 "
            style={{
              borderTop: "4px solid rgb(229, 174, 73)",
              borderRight: "4px solid rgb(229, 174, 73)",
              borderBottom: "4px solid rgb(229, 174, 73)",
              borderLeft: "0px !important",
            }}
          ></div>
          <div className="w-7 mx-auto pt-4">
            <span
              className="text-xl justify-content-center"
              style={{
                display: "block",
                textAlign: "center",
                color: "#868686",
              }}
            >
              Chúng tôi cung cấp các set đồ decor tiện lợi, giúp biến hóa không
              gian sống và làm việc một cách dễ dàng và phong cách. Với giá
              thành hợp lý và sự kết hợp hoàn hảo, mọi góc nhỏ trong nhà bạn sẽ
              trở nên ấn tượng và độc đáo hơn bao giờ hết!
            </span>
          </div>
          <div className="w-8 mx-auto pt-6 grid">
            <div className="col-4 flex flex-column">
              <div
                className="w-11 mx-auto image_demo"
                style={{
                  aspectRatio: 1.5,
                  backgroundImage: `url(${demo1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span
                className="font-medium text-black text-xl mt-5 mx-auto"
                style={{ textAlign: "center", fontFamily: "Open Sans" }}
              >
                GÓC LÀM VIỆC
              </span>
            </div>
            <div className="col-4 flex flex-column">
              <div
                className="w-11 mx-auto image_demo"
                style={{
                  aspectRatio: 1.5,
                  backgroundImage: `url(${demo2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span
                className="font-medium text-black text-xl mt-5 mx-auto"
                style={{ textAlign: "center", fontFamily: "Open Sans" }}
              >
                PHÒNG NGỦ
              </span>
            </div>
            <div className="col-4 flex flex-column">
              <div
                className="w-11 mx-auto image_demo"
                style={{
                  aspectRatio: 1.5,
                  backgroundImage: `url(${demo3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span
                className="font-medium text-black text-xl mt-5 mx-auto"
                style={{ textAlign: "center", fontFamily: "Open Sans" }}
              >
                PHÒNG KHÁCH
              </span>
            </div>
          </div>
          <div className="w-8 mx-auto pt-6 grid">
            <div className="col-4 flex flex-column">
              <div
                className="w-11 mx-auto image_demo"
                style={{
                  aspectRatio: 1.5,
                  backgroundImage: `url(${demo4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span
                className="font-medium text-black text-xl mt-5 mx-auto"
                style={{ textAlign: "center", fontFamily: "Open Sans" }}
              >
                GIAN BẾP
              </span>
            </div>
            <div className="col-4 flex flex-column">
              <div
                className="w-11 mx-auto image_demo"
                style={{
                  aspectRatio: 1.5,
                  backgroundImage: `url(${demo5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span
                className="font-medium text-black text-xl mt-5 mx-auto"
                style={{ textAlign: "center", fontFamily: "Open Sans" }}
              >
                PHÒNG TẮM
              </span>
            </div>
            <div className="col-4 flex flex-column">
              <div
                className="w-11 mx-auto image_demo"
                style={{
                  aspectRatio: 1.5,
                  backgroundImage: `url(${demo6})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span
                className="font-medium text-black text-xl mt-5 mx-auto"
                style={{ textAlign: "center", fontFamily: "Open Sans" }}
              >
                BAN CÔNG
              </span>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className=" w-full" style={{ zIndex: "10" }}>
            {/* <div className="overlay h-screen"></div> */}
            <div
              className="h-screen w-full opacity-90"
              style={{
                backgroundImage: `url(${anh})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.4)",
              }}
            ></div>
          </div>
          <div
            className="w-full flex py-4 flex-column"
            style={{
              position: "absolute",
              top: "0",
              color: "white",
              zIndex: "3",
              height: "100%",

              // fontFamily: `'Courier New', monospace`,
            }}
          >
            <p className="mx-auto font-medium text-5xl ">
              <span>TIÊU CHÍ CỦA </span>
              <span
                className="font-bold text-7xl"
                style={{ fontFamily: "fangsong" }}
              >
                ĐCORE
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionOne;
