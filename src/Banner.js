// import anh from "./images/slide01.png";
import anh from "./images/banner2.png";
import logo from "./images/main_logo.png";
import "./App.css";
import { Button } from "@mui/material";

const Banner = () => {
  return (
    // <div
    //   className="h-screen w-full opacity-90"
    //   style={{
    //     backgroundImage: `url(${anh})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // ></div>
    <div>
      <div className=" w-full" style={{ position: "relative" }}>
        <div className="overlay h-screen"></div>
        <div
          className="h-screen w-full opacity-90"
          style={{
            backgroundImage: `url(${anh})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div
        className="w-full "
        style={{
          position: "absolute",
          top: "0",
          color: "white",
          zIndex: "3",
          height: "100%",

          // fontFamily: `'Courier New', monospace`,
        }}
      >
        <div className="grid py-4 border-bottom-1">
          <div className="col-2"></div>
          <div className="col-8 flex justify-content-between align-item-center">
            <div
              className="text-white font-bold text-4xl flex items-center justify-center"
              // style={{ height: "50" }}
            >
              <img src={logo} style={{ height: "60px" }} />
            </div>
            <div className="flex flex-column">
              <span className="text-white text-xl">Hotline: 0396968327</span>
              <span className="text-white text-xl">
                Email: dcore4tpf@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap align-items-center justify-content-center flex-column"
          style={{ height: "80%" }}
        >
          <span className="text-8xl font-bold">TRANG TRÍ DỄ DÀNG</span>
          <p>
            <span className="text-5xl font-bold" style={{ color: "black" }}>
              THIẾT KẾ THÔNG MINH ,
            </span>
            <span
              className="text-5xl font-bold"
              style={{ color: "rgb(229, 174, 73)" }}
            >
              KHÔNG GIAN SỐNG TRỌN VẸN
            </span>
          </p>
          <button
            className="px-6 py-3 text-lg font-bold btn"
            style={{
              // backgroundColor: "rgb(229, 174, 73)",
              color: "white",
              borderRadius: "30px",
              border: "none",
            }}
          >
            TÌM HIỂU THÊM
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
