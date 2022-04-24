import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video2 = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section
      className="video bg-img parallaxie"
      style={{ backgroundImage: "url(/assets/img/bg-vid.jpg)" }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        href="https://kuula.co/share/collection/7qg3w?logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=0&thumbs=1"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
      <div className="container">
        <div className="stauts">
          <div className="item">
            <h4>
              3<span>K</span> +
            </h4>
            <h6>Happy Clients</h6>
          </div>
          <div className="item">
            <h4>
              14<span>K</span> +
            </h4>
            <h6>Success Projects</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video2;
