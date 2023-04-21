import React from "react";

const Services = () => {
  return (
    <section className="services section-padding pb-0">
      <div className="container">
        <div className="section-head">
          <h3>Services</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <span className="icon flaticon-sketch"></span>
              <h6>Design &amp; Planning</h6>
              <p>
                Our architectural company offers design and planning services
                for exterior and interior work, working closely with clients to
                create personalized and functional spaces. We consider factors
                such as landscape, climate, natural light, and acoustics, and
                utilize 3D modeling and rendering software to create detailed
                designs. Also, we offer project management services to ensure
                efficient construction processes and oversee construction to
                address any issues that may arise.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <span className="icon flaticon-furniture"></span>
              <h6>Furniture &amp; Decor</h6>
              <p>
                Our experienced designers work closely with clients to create
                custom-made furniture and decorative elements that reflect their
                individual style and preferences. We take into consideration
                factors such as functionality, materials, and aesthetics to
                create designs that are both practical and visually appealing.
                Our team also utilizes the latest design tools and software to
                create detailed 3D models and renderings, allowing clients to
                visualize their designs and make informed decisions. Overall,
                our furniture and decoration design services offer a
                comprehensive approach to creating personalized and functional
                spaces.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon flaticon-home-1"></span>
              <h6>Exterior Design</h6>
              <p>
                Our company specialized in exterior architectural projects, from
                design to execution, including studying elevations, selecting
                durable and visually appealing materials, designing lighting,
                and obtaining necessary permits. We work closely with clients to
                create personalized and functional spaces that integrate with
                the environment and oversee the execution of the project to
                ensure a smooth and successful outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
