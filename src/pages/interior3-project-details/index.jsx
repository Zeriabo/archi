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
        title="Interior project"
        fullPath={[
          { id: 1, name: "home", url: "/" }
          
        ]}
        image="/assets/images/portfolio/interior3/1.jpeg"
      />
      <Project1Intro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            
            
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior3/1.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior3/2.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior3/3.jpeg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/images/portfolio/interior3/4.jpeg" />
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
