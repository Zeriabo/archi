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
        title="Classical Villa"
        fullPath={[
          { id: 1, name: "home", url: "/" }
          
        ]}
        image="/assets/images/portfolio/interior1/8.jpg"
      />
      <Project1Intro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
             
            </a>
            
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/1.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/2.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/3.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/4.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/5.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/6.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/7.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior1/8.jpg" />
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
