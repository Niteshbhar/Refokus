import React from "react";
import Product from "./product";

function Products() {
  const products = [
    {
      title: "arqitel",
      description:
        "lorem ipsum dolor sit amet, consectetur adip occ occurence velit sed diam non pro id pro gravida vel aug commodo just",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "lorem ipsum dolor sit amet, consectetur adip occ occurence velit sed diam non pro id pro gravida vel aug commodo just",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "lorem ipsum dolor sit amet, consectetur adip occ occurence velit sed diam non pro id pro gravida vel aug commodo just",
      live: true,
      case: true,
    },
    {
      title: "yahoo",
      description:
        "lorem ipsum dolor sit amet, consectetur adip occ occurence velit sed diam non pro id pro gravida vel aug commodo just",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-28">
      {" "}
      {products.map((elem, index) => (
        <Product data={elem} key={index} />
      ))}
    </div>
  );
}

export default Products;
