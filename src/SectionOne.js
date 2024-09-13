import { FaKitchenSet } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";

const SectionOne = () => {
  return (
    <>
      <div
        className="w-full flex flex-column"
        style={{ backgroundColor: "white", zIndex: "10", position: "absolute" }}
      >
        <div className="grid w-8 mx-auto justify-content-between py-8">
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <FaKitchenSet style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Set Đồ Decor Tiện Lợi
            </span>
          </div>
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <GiReceiveMoney style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Giá Cả Hợp Lý
            </span>
          </div>
          <div className="flex flex-column  flex align-items-center justify-content-center col-3">
            <FaTools style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Hỗ Trợ Lắp Đặt
            </span>
          </div>
          <div className="flex flex-column flex align-items-center justify-content-center col-3">
            <FaHeadset style={{ fontSize: "8vh" }} />
            <span className="font-bold text-black text-2xl mt-4">
              Tư Vấn Đa Dạng
            </span>
          </div>
        </div>
        <div
          className="w-full flex py-8 flex-column"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <span className="mx-auto font-bold text-5xl">THÔNG TIN SẢN PHẨM</span>
          <div
            className="w-1 mx-auto mt-5"
            style={{
              borderTop: "4px solid rgb(229, 174, 73)",
              borderRight: "4px solid rgb(229, 174, 73)",
              borderBottom: "4px solid rgb(229, 174, 73)",
              borderLeft: "0px !important",
            }}
          ></div>
          <div className="w-7 mx-auto">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionOne;
