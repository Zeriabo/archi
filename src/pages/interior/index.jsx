/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import Exterior from "../../components/exterior";
import Interior from "../../components/interior";

const Architecure = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Interior />
    </MainLayout>
  );
};

export default Architecure;
