/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import Furniturecomp from "../../components/furniture";

const Furniture = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Furniturecomp />
    </MainLayout>
  );
};

export default Furniture;
