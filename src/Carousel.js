import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import cus from "./images/cus1.png";
import cus2 from "./images/cus2.png";
import cus3 from "./images/cus3.png";

export default function CircularDemo() {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const products = [
    {
      name: "Cristiano Ronaldo",
      image: cus,
      text: `Thật là một dịch vụ tận tâm chất lượng. Các con tôi tỏ ra thích thú với góc phòng ngủ của chúng nó. ĐCore thật sự tài năng và chắc chắn sẽ nổi tiếng hơn trong tương lai!! Siuuuu! `,
      job: "Phó Goat",
    },
    {
      name: "Kendall Jenner",
      image: cus2,
      text: `Góc phòng của tôi đã được nâng tầm bởi ĐCore. Trước đây nó nhìn khá basic, sau khi nhận được tư vấn của ĐCore cũng như giúp đỡ thiết kế lắp đặt tận tâm, nó đã trở nên thật sự mới mẻ và giúp tôi có cảm hứng khi ở nhà.`,
      job: "Người mẫu",
    },
    {
      name: "Trấn Thành",
      image: cus3,
      text: `ĐCore và đội ngũ trẻ trung nhiệt huyết đã mang lại sự mới mẻ cho gian bếp và ban công nhà tôi. Nhìn mà chỉ thấy Fantastic, wonderful, significant, magnificent, outstanding, class of titans. Thưa quý vị đây là world-class!`,
      job: "Nghệ sĩ",
    },
  ];
  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const productTemplate = (product) => {
    return (
      //   <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
      //     <div className="mb-3">
      //       <img
      //         src={`${product.image}`}
      //         alt={product.name}
      //         className="w-6 shadow-2"
      //       />
      //     </div>
      //     <div>
      //       <h4 className="mb-1">{product.name}</h4>
      //       <h6 className="mt-0 mb-3">${product.price}</h6>
      //       {/* <Tag
      //         value={product.inventoryStatus}
      //         severity={getSeverity(product)}
      //       ></Tag> */}
      //       <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
      //         <Button icon="pi pi-search" className="p-button p-button-rounded" />
      //         <Button
      //           icon="pi pi-star-fill"
      //           className="p-button-success p-button-rounded"
      //         />
      //       </div>
      //     </div>
      //   </div>
      <div
        className="card shadow-6 border-round m-3 text-center py-5 px-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="mb-3">
          <div className="p-4">
            <i
              className="pi pi-star-fill mx-1 text-3xl"
              style={{ color: "#ffc300" }}
            ></i>
            <i
              className="pi pi-star-fill mx-1 text-3xl"
              style={{ color: "#ffc300" }}
            ></i>
            <i
              className="pi pi-star-fill mx-1 text-3xl"
              style={{ color: "#ffc300" }}
            ></i>
            <i
              className="pi pi-star-fill mx-1 text-3xl"
              style={{ color: "#ffc300" }}
            ></i>
            <i
              className="pi pi-star-fill mx-1 text-3xl"
              style={{ color: "#ffc300" }}
            ></i>
          </div>
          <div className="px-8">
            <span className="text-2xl font-medium line-height-3">
              {product?.text}
            </span>
          </div>
          <div className="pt-6 pb-3">
            <img
              style={{
                borderRadius: "50%",
                aspectRatio: "1",
                width: "100px",
              }}
              src={product?.image}
            />
          </div>
          <div className="flex flex-column">
            <span className="text-3xl font-bold" style={{ color: "#a46525" }}>
              {product?.name}
            </span>
            <span className="text-xl">{product?.job}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
