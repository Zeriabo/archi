/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import Graphics from "../../components/graphics";

const Graphic = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Graphics />
    </MainLayout>
  );
};

export default Graphic;
