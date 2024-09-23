import { FaKitchenSet } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";

import { GiReceiveMoney } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { BiSolidMessageSquareCheck } from "react-icons/bi";

import anh from "./images/slide02.png";
import demo1 from "./images/demo1.png";
import demo2 from "./images/demo2.png";
import demo3 from "./images/demo3.png";
import demo4 from "./images/demo4.png";
import demo5 from "./images/demo5.png";
import demo6 from "./images/demo6.png";
import spec2 from "./images/spec2.png";
import mem2 from "./images/mem4.png";
import mem1 from "./images/mem1.png";
import mem3 from "./images/mem3.png";
import mem5 from "./images/mem5.png";
import tai1 from "./images/tai1.png";
import tai2 from "./images/tai2.png";
import tai3 from "./images/tai3.png";
import tai4 from "./images/tai4.png";

import "./App.css";
import CircularDemo from "./Carousel";
const SectionOne = () => {
  return (
    <>
      <div
        className="w-full flex flex-column"
        style={{ backgroundColor: "white", zIndex: "10", position: "absolute" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Căn giữa theo chiều ngang
            alignItems: "center",
          }}
        >
          <div
            className="w-3 mx-auto "
            style={{
              borderTop: "4px solid rgb(229, 174, 73)",
              borderRight: "4px solid rgb(229, 174, 73)",
              borderBottom: "4px solid rgb(229, 174, 73)",
              borderLeft: "0px !important",
            }}
          ></div>
          <p
            className="flex justify-content-center mx-auto font-medium text-7xl tieuchi mb-4 w-4"
            // style={{ fontFamily: "monospace" }}
          >
            <span>Quy trình làm việc </span>
          </p>
          <div
            className="w-3 mx-auto  "
            style={{
              borderTop: "4px solid rgb(229, 174, 73)",
              borderRight: "4px solid rgb(229, 174, 73)",
              borderBottom: "4px solid rgb(229, 174, 73)",
              borderLeft: "0px !important",
            }}
          ></div>
        </div>
        <div className="grid w-8 mx-auto justify-content-between py-8">
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <BiSolidMessageSquareCheck
              className="icon-hover"
              style={{ fontSize: "8vh" }}
            />
            <span className="font-bold text-black text-2xl mt-4">
              Tiếp nhận yêu cầu
            </span>
          </div>
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <FaHeadset className="icon-hover" style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Hỗ trợ tư vấn
            </span>
          </div>
          <div className="flex flex-column  flex align-items-center justify-content-center col-3">
            <FaHandHoldingUsd
              className="icon-hover"
              style={{ fontSize: "8vh" }}
            />
            <span className="font-bold text-black text-2xl mt-4">
              Giao dịch sản phẩm
            </span>
          </div>
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <FaTools className="icon-hover" style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Lắp đặt và bảo hành
            </span>
          </div>
        </div>
        <div
          className="w-full flex py-6 flex-column"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <div
            style={{
              backgroundColor: "#e6e6e6",
              display: "flex",
              justifyContent: "center", // Căn giữa theo chiều ngang
              alignItems: "center",
            }}
          >
            <div
              className="w-3 mx-auto "
              style={{
                borderTop: "4px solid rgb(229, 174, 73)",
                borderRight: "4px solid rgb(229, 174, 73)",
                borderBottom: "4px solid rgb(229, 174, 73)",
                borderLeft: "0px !important",
              }}
            ></div>
            <p
              className="flex justify-content-center mx-auto font-medium text-7xl tieuchi mb-4 w-4"
              // style={{ fontFamily: "monospace" }}
            >
              <span>Thông tin sản phẩm </span>
            </p>
            <div
              className="w-3 mx-auto  "
              style={{
                borderTop: "4px solid rgb(229, 174, 73)",
                borderRight: "4px solid rgb(229, 174, 73)",
                borderBottom: "4px solid rgb(229, 174, 73)",
                borderLeft: "0px !important",
              }}
            ></div>
          </div>
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
        <div
          style={{
            backgroundColor: "#e6e6e6",
            display: "flex",
            justifyContent: "center", // Căn giữa theo chiều ngang
            alignItems: "center",
          }}
        >
          <div
            className="w-3 mx-auto  "
            style={{
              borderTop: "4px solid rgb(229, 174, 73)",
              borderRight: "4px solid rgb(229, 174, 73)",
              borderBottom: "4px solid rgb(229, 174, 73)",
              borderLeft: "0px !important",
            }}
          ></div>
          <p
            className="flex justify-content-center mx-auto font-medium text-6xl tieuchi mb-4 w-4"
            // style={{ fontFamily: "monospace" }}
          >
            <span>Tiêu chí của chúng tôi </span>
          </p>
          <div
            className="w-3 mx-auto  "
            style={{
              borderTop: "4px solid rgb(229, 174, 73)",
              borderRight: "4px solid rgb(229, 174, 73)",
              borderBottom: "4px solid rgb(229, 174, 73)",
              borderLeft: "0px !important",
            }}
          ></div>
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
                boxShadow: "inset 0 0 0 1000px rgba(0, 0,0, 0.6)",
              }}
            ></div>
          </div>
          <div
            className="w-full flex py-6 flex-column"
            style={{
              position: "absolute",
              top: "0",
              color: "white",
              zIndex: "3",
              height: "100%",

              // fontFamily: `'Courier New', monospace`,
            }}
          >
            <div className="w-8 mx-auto">
              <div className="grid w-full mb-3">
                <div className="col-6 grid">
                  <div className="col-2">
                    <span className="text-7xl font-bold">01</span>
                  </div>
                  <div className="col-10 p-3 flex flex-column justify-center">
                    <span className="text-2xl py-2 font-medium">
                      Giá cả - Chất lượng đảm bảo
                    </span>
                    <span className="text-md line-height-2">
                      {" "}
                      Các sản phẩm thuộc hệ thống ĐCore luôn được đánh giá cao,
                      giá thành thấp nhưng vẫn giữ được chất lượng và độ đẹp
                      mắt, phù hợp với mọi yêu cầu người dùng. ĐCore tự tin cung
                      cấp cho khách hàng những sản phẩm tốt nhất, bố trí theo
                      set đẹp đẽ để khách hàng có thể lựa chọn một cách thoải
                      mái nhất.
                    </span>
                  </div>
                </div>
                <div
                  className="col-6"
                  style={{
                    display: "flex",
                    justifyContent: "center" /* Căn giữa theo chiều ngang */,
                    alignItems: "center" /* Căn giữa theo chiều dọc */,
                  }}
                >
                  <img width={"80%"} style={{ aspectRatio: "2" }} src={demo2} />
                </div>
              </div>

              <div className="grid w-full mb-3">
                <div
                  className="col-6"
                  style={{
                    display: "flex",
                    justifyContent: "center" /* Căn giữa theo chiều ngang */,
                    alignItems: "center" /* Căn giữa theo chiều dọc */,
                  }}
                >
                  <img width={"80%"} style={{ aspectRatio: "2" }} src={demo2} />
                </div>
                <div className="col-6 grid">
                  <div className="col-2">
                    <span className="text-7xl font-bold">02</span>
                  </div>
                  <div className="col-10 p-3 flex flex-column justify-center">
                    <span className="text-2xl py-2 font-medium">
                      Hỗ trợ Tư Vấn - Lắp Đặt
                    </span>
                    <span className="text-md line-height-2">
                      ĐCore cũng cấp cho khách hàng những dịch vụ tận tâm, tư
                      vấn 24h với đội ngũ tư vấn chuyên nghiệp, những chuyên gia
                      trong lĩnh vực thiết kế nội thất trang trí. Ngoài ra,
                      ĐCore cũng hỗ trợ lắp đặt, giao hàng tận nơi để đảm bảo
                      khách hàng có được trải nghiệm tốt nhất.
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid w-full">
                <div className="col-6 grid">
                  <div className="col-2">
                    <span className="text-7xl font-bold">03</span>
                  </div>
                  <div className="col-10 p-3 flex flex-column justify-center">
                    <span className="text-2xl py-2 font-medium">
                      Chính sách đổi trả - Khuyến mãi
                    </span>
                    <span className="text-md line-height-2">
                      ĐCore cam kết mang đến sự hài lòng cho khách hàng với
                      chính sách đổi trả thuận lợi. Đội ngũ hỗ trợ khách hàng sẽ
                      nhanh chóng xử lý yêu cầu để đảm bảo trải nghiệm mua sắm
                      của bạn là tốt nhất. Chúng tôi cũng liên tục triển khai
                      các chương trình khuyến mãi hấp dẫn nhằm tri ân khách
                      hàng. Với ĐCore, khách hàng luôn là ưu tiên hàng đầu.
                    </span>
                  </div>
                </div>
                <div
                  className="col-6"
                  style={{
                    display: "flex",
                    justifyContent: "center" /* Căn giữa theo chiều ngang */,
                    alignItems: "center" /* Căn giữa theo chiều dọc */,
                  }}
                >
                  <img width={"80%"} style={{ aspectRatio: "2" }} src={demo2} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex py-6 flex-column">
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Căn giữa theo chiều ngang
                alignItems: "center",
              }}
            >
              <div
                className="w-3 mx-auto "
                style={{
                  borderTop: "4px solid rgb(229, 174, 73)",
                  borderRight: "4px solid rgb(229, 174, 73)",
                  borderBottom: "4px solid rgb(229, 174, 73)",
                  borderLeft: "0px !important",
                }}
              ></div>
              <p
                className="flex justify-content-center mx-auto font-medium text-7xl tieuchi mb-4 w-4"
                // style={{ fontFamily: "monospace" }}
              >
                <span> Đội ngũ phát triển </span>
              </p>
              <div
                className="w-3 mx-auto  "
                style={{
                  borderTop: "4px solid rgb(229, 174, 73)",
                  borderRight: "4px solid rgb(229, 174, 73)",
                  borderBottom: "4px solid rgb(229, 174, 73)",
                  borderLeft: "0px !important",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-12 mx-auto flex flex-row ">
          <div
            className="flex flex-column items-center justify-center"
            style={{ width: "40%", padding: "5%" }}
          >
            <div
              style={{ fontFamily: "monospace", fontStyle: "italic" }}
              className="font-bold text-4xl mx-auto"
            >
              "Gặp gỡ đội ngũ trẻ trung, năng động của chúng tôi!"
            </div>
            <span className=" text-xl py-3 line-height-3">
              Chúng tôi là một nhóm những cá nhân đầy đam mê và sáng tạo, luôn
              sẵn sàng đối mặt với thử thách. Với tinh thần đổi mới không ngừng,
              đội ngũ của chúng tôi kết hợp những ý tưởng tươi mới và năng lượng
              trẻ trung để mang đến những giải pháp đột phá. Chúng tôi tin rằng
              sự hợp tác và giao tiếp cởi mở là chìa khóa để đạt được thành
              công, và chúng tôi luôn hướng tới việc xây dựng mối quan hệ bền
              vững với khách hàng.
            </span>
          </div>
          <div className=" flex flex-row" style={{ width: "60%" }}>
            <div
              style={{
                width: "18%",
                marginRight: "2%",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                // style="width: 100%; height: 100%; object-fit: cover;"
                src={mem1}
                alt="Decor Image"
                className="image_ptr"
              />
            </div>
            <div
              style={{
                width: "18%",
                marginRight: "2%",
                marginTop: "5%",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                // style="width: 100%; height: 100%; object-fit: cover;"
                src={mem2}
                alt="Decor Image"
                className="image_ptr"
              />
            </div>
            <div
              style={{
                width: "18%",
                marginRight: "2%",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                // style="width: 100%; height: 100%; object-fit: cover;"
                src={mem3}
                alt="Decor Image"
                className="image_ptr"
              />
            </div>
            <div
              style={{
                width: "18%",
                marginRight: "2%",
                marginTop: "5%",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                // style="width: 100%; height: 100%; object-fit: cover;"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Decor Image"
                className="image_ptr"
              />
            </div>
            <div
              style={{
                width: "18%",
                marginRight: "2%",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                // style="width: 100%; height: 100%; object-fit: cover;"
                src={mem5}
                alt="Decor Image"
                className="image_ptr"
              />
            </div>
          </div>
        </div>
        <div
          className="w-12 mx-auto mt-6"
          style={{
            aspectRatio: 2,
            backgroundImage: `url(${spec2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full flex flex-column"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <div
            style={{
              backgroundColor: "#e6e6e6",
              display: "flex",
              justifyContent: "center", // Căn giữa theo chiều ngang
              alignItems: "center",
            }}
          >
            <div
              className="w-3 mx-auto "
              style={{
                borderTop: "4px solid rgb(229, 174, 73)",
                borderRight: "4px solid rgb(229, 174, 73)",
                borderBottom: "4px solid rgb(229, 174, 73)",
                borderLeft: "0px !important",
              }}
            ></div>
            <p
              className="flex justify-content-center mx-auto font-medium text-7xl tieuchi mb-4 w-4"
              // style={{ fontFamily: "monospace" }}
            >
              <span> Khách hàng nói gì </span>
            </p>
            <div
              className="w-3 mx-auto  "
              style={{
                borderTop: "4px solid rgb(229, 174, 73)",
                borderRight: "4px solid rgb(229, 174, 73)",
                borderBottom: "4px solid rgb(229, 174, 73)",
                borderLeft: "0px !important",
              }}
            ></div>
          </div>
          <div className="py-6 w-11 mx-auto">
            <div>
              <CircularDemo />
            </div>
          </div>
          <div
            className="w-full flex flex-column"
            style={{
              height: "500px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center", // Căn giữa theo chiều ngang
                alignItems: "center",
              }}
            >
              <div
                className="w-3 mx-auto "
                style={{
                  borderTop: "4px solid rgb(229, 174, 73)",
                  borderRight: "4px solid rgb(229, 174, 73)",
                  borderBottom: "4px solid rgb(229, 174, 73)",
                  borderLeft: "0px !important",
                }}
              ></div>
              <p
                className="flex justify-content-center mx-auto font-medium text-7xl tieuchi mb-4 w-4"
                // style={{ fontFamily: "monospace" }}
              >
                <span> Liên hệ với ĐCore</span>
              </p>
              <div
                className="w-3 mx-auto  "
                style={{
                  borderTop: "4px solid rgb(229, 174, 73)",
                  borderRight: "4px solid rgb(229, 174, 73)",
                  borderBottom: "4px solid rgb(229, 174, 73)",
                  borderLeft: "0px !important",
                }}
              ></div>
            </div>
            {/* <div className="grid" style={{ backgroundColor: "white" }}>
              <div className="col-4 flex flex-column p-5">
                LOGO
                <div className="grid">
                  <div className="col-3 p-3">
                    <div
                      className="w-full"
                      style={{
                        backgroundImage: `url(${demo1})`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        // backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div className="col-3 p-3">
                    <img width={"100%"} src={tai2} />
                  </div>
                  <div className="col-3 p-3">
                    <img width={"100%"} src={tai3} />
                  </div>
                  <div className="col-3 p-3">
                    <img width={"100%"} src={tai4} />
                  </div>
                </div>
              </div>
              <div className="col-4 flex flex-column p-5"></div>
              <div className="col-4 flex flex-column p-5"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionOne;
