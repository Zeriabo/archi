/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Project1Intro from "../../components/Project1-Intro";
import NextProject from "../../components/Next-Project-of-Exterior";


const ProjectDetails = () => {

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="classical villa"
        fullPath={[
          { id: 1, name: "home", url: "/" }
          // { id: 2, name: "portfolio", url: "/work1" },
          // { id: 3, name: "project details", url: "/project-details" },
        ]}
        image="/assets/images/exterior/project1/1.jpg"
      />
      <Project1Intro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
             
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/exterior/project1/1.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/exterior/project1/2.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
          
            </a>
          </div>
        </div>
      </section>

     

   

      <NextProject />
    </MainLayout>
  );
};

export default ProjectDetails;
