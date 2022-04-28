/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Demos = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <style jsx>{`
        .works-header {
          min-height: 85vh;
          position: relative;
        }

        .works-header:after {
          content: "";
          position: absolute;
          top: 50px;
          left: 50px;
          right: 50px;
          bottom: 50px;
          background: #999;
          opacity: 0.2;
        }

        .works-header:before {
          background: #000;
        }

        .masonery .container-fluid {
          padding: 0 80px;
        }

        .masonery .item-img {
          position: relative;
          box-shadow: 0px 5px 10px rgba(50, 50, 50, 0.2);
          background: #333;
          padding: 15px;
          border-radius: 5px;
        }

        .masonery .item-img img {
          border-radius: 10px;
          overflow: hidden;
        }

        .masonery .gallery .items {
          padding: 0 40px;
          margin-top: 80px;
          text-align: center;
        }

        .masonery .gallery .items h6 {
          margin: 25px 0 15px;
          font-size: 17px;
          font-weight: 400;
          font-family: "Jost", sans-serif;
          text-align: center;
        }

        .masonery .item-img .new {
          padding: 10px 30px;
          background: #75dab4;
          position: absolute;
          top: 0;
          left: -60px;
          width: 200px;
          transform: rotate(-30deg);
          font-size: 13px;
        }
      `}</style>
      <header
        className="works-header fixed-slider hfixd valign bg-img"
        data-background=""
        style={{ backgroundImage: "url(/demos/bg.png)" }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 static text-center">
              <div className="capt mt-50">
                <div className="parlx">
                  <h1 className="mb-10"></h1>
                  <p className="ls10 text-u">
                    Creative Architecture Interior Template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main-content">
        <section className="masonery section-padding pt-50 sub-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="gallery full-width">
                

                <div className="col-lg-4 col-md-6 items">
                  <Link href="/home5">
                    <a target="_blank">
                      <div
                        className="item-img wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <img src="/demos/2.png" alt="image" />
                        <div className="cont">
                          <h6>Creative Architecture</h6>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                
           

                
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <div className="title">
                    <h5>Contact Us</h5>
                  </div>
                  <ul>
                    <li>
                      <span className="icon pe-7s-map-marker"></span>
                      <div className="cont">
                        <h6>Officeal Address</h6>
                        <p>504 White St . Dawsonville, GA 30534 , New York</p>
                      </div>
                    </li>
                    <li>
                      <span className="icon pe-7s-mail"></span>
                      <div className="cont">
                        <h6>Email Us</h6>
                        <p>Int.arch.Mohammad.alsheyah@gmail.com</p>
                      </div>
                    </li>
                    <li>
                      <span className="icon pe-7s-call"></span>
                      <div className="cont">
                        <h6>Call Us</h6>
                        <p>+87986451666</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <div className="title">
                    <h5>Recent News</h5>
                  </div>
                  <ul>
                    <li>
                      <div className="img">
                        <img src="/assets/img/blog/1.jpg" alt="" />
                      </div>
                      <div className="sm-post">
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                        <span className="date">14 Jan 2022</span>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img src="/assets/img/blog/2.jpg" alt="" />
                      </div>
                      <div className="sm-post">
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                        <span className="date">14 Jan 2022</span>
                      </div>
                    </li>
                    <li>
                      <div className="subscribe">
                        <input type="text" placeholder="Type Your Email" />
                        <span className="subs pe-7s-paper-plane"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <div className="logo">
                    <img src="/assets/images/logo/logo.png" alt="" />
                  </div>
                  <div className="social">
                    <Link href="#">
                      <a>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a>
                        <i className="fab fa-youtube"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="copy-right">
                    <p>
                      © 2022, Made with passion by
                      <Link href="https://github.com/Zeriabo">Zeriab</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Demos;
