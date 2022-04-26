import React from "react";
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";


const Portfolio2 = () => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);
  return (
    <section className="portfolio full-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 cluom current" data-tab="tab-1">
            <div className="info">
              <h6 className="custom-font">Exterior</h6>
              <h5>Exterior Designs</h5>
            </div>
            <div className="more">
              <Link href="/exterior-project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-2">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Classical Villa</h5>
            </div>
            <div className="more">
              <Link href="/interior1-project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-3">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Interior Project2</h5>
            </div>
            <div className="more">
              <Link href="/interior2-project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-4">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Interior Project3</h5>
            </div>
            <div className="more">
              <Link href="/interior3-project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
        
        </div>
      </div>
      <div className="glry-img">
        <div
          id="tab-1"
          className="bg-img tab-img current"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/01.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-2"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/02.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-3"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/03.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-4"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/04.jpg)` }}
          data-overlay-dark="2"
        ></div>
         <div
          id="tab-5"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/04.jpg)` }}
          data-overlay-dark="2"
        ></div>
      </div>
    </section>
  );
};

export default Portfolio2;
