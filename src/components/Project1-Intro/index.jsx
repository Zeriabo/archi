import React from "react";
import Link from "next/link";

const Project1Intro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
              A new classical villa where architectural items evolve into a modern way <br />
              Architectural Projects inspired from the client demands
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1Intro;
