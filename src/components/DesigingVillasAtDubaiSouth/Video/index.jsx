import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";
const DubaiVillaVideo1 = () => {
  const uiElements = [
    {
      name: 'custom-button',
      ariaLabel: 'Custom button',
      order: 9,
     
      isButton: true,
      html: {
        isCustomSVG: true,
        inner:
          '<path d="<ICON_PATH>" id="pswp__icn-cstm-btn"/>',
        outlineID: 'pswp__icn-cstm-btn',
      },
      appendTo: 'bar',
      onInit: (el, pswpInstance) => {
      
      },
      onClick: (e, el, pswpInstance) => {

      },
    },
  ]
  React.useEffect(() => {
      console.clear();
    }, [])
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div>
         <h3>Video&apos;s</h3>
      <section
        className="video bg-img parallaxie"
       
      >
        {typeof window !== "undefined" && (
       
<Gallery uiElements={uiElements}>
<div
  style={{
    display: 'grid',
    gridTemplateColumns: '240px 171px 171px',
    gridTemplateRows: '114px 114px',
    gridGap: 12,
    justifyContent:'center',
    columnGap:200
  }}
>
  <p>Desiging Villas at Dubai South</p>
  <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="Jml8usJ7km8"
          onClose={() => setOpen(false)}
        />
 <a
        className="vid valign"
        href="https://youtu.be/Jml8usJ7km8"
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


</div>
</Gallery>
        )}
      
      </section>
      </div>
    );
}

export default DubaiVillaVideo1


