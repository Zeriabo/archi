/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Architecture is a visual art,",
          second: "and the building speak for themeselves",
        }}
        // title = "text",
        content="."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
