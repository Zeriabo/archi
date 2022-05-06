
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from 'react';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";

const InteriorVilla360 = ()=> {
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
  
  return (
 <div > 
  

  
  
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
        <p>Interior Villa 360</p>
        <iframe width="600" height="500"  allow="vr,gyroscope,accelerometer,fullscreen" scrolling="no" allowFullScreen={true}  src={kuula[0].src}></iframe>
        

  
 
    </div>
  </Gallery>
 
  </div>  );
    }
    
    const kuula = [
      {
        src: 'https://kuula.co/share/collection/7qg3w? logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=0&thumbs=1',
        title: 'Interior Villa 360 tour at Tilal al Furjan',
      },
      
      {
        src:'https://kuula.co/share/collection/7qg3w? logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=0&thumbs=1',
        title: '2',
      },
    ];
  
 
  
export default InteriorVilla360;
