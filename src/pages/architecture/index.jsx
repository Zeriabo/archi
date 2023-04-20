/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import Exterior from "../../components/exterior";

const Architecure = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Exterior />
    </MainLayout>
  );
};

export default Architecure;
