/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import Plans from "../../components/plans";

const Architecure = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Plans />
    </MainLayout>
  );
};

export default Architecure;
