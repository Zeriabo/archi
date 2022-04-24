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
      style={{ backgroundImage: "url(/assets/images/videoCover/2.png)" }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="FKdVWVp4IUE"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        href="https://www.youtube.com/watch?v=FKdVWVp4IUE"
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
      
    </section>
  );
};

export default Video2;
