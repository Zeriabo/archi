import React from "react";
import Link from "next/link";

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Best Features.</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-home"></span>
            <h6 className="mb-20">Architecture</h6>
            <p>
             
Exterior architectural feature means the architectural elements embodying style, design, general arrangement, and components of all the outer surfaces of an improvement, including, but not limited to, the architectural style, design, arrangement, massing, texture, painted and unpainted surfaces and materials.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-kitchen-2"></span>
            <h6 className="mb-20">Interior Design</h6>
            <p>
             bla bla bla
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-plan"></span>
            <h6 className="mb-20">3D Modeling</h6>
            <p>
            3D models are used for a variety of mediums including video games, movies, architecture, illustration, engineering, and commercial advertising. The 3D modeling process produces a digital object capable of being fully animated, making it an essential process for character animation and special effects.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Services5;
