
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from 'react';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";

const Plans = ()=> {
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
        // do something on UI element's init event
      },
      onClick: (e, el, pswpInstance) => {
        
        // do something on UI element's click event
      },
    },
  ]
  
  return (
 <div > 
   <h3>Plans</h3>
    <Gallery uiElements={uiElements}>
    <div
      
      style={{
        display: 'grid',
        gridTemplateColumns: '240px 171px 171px',
        gridTemplateRows: '114px 114px',
        gridGap: 12,
        justifyContent:'center',
        columnGap:10
        
      }}
    >

<p>Plans: </p>
    {
     itemData.map((image, i) => {     
                        
             return ( 
             
             <Item
              caption="Interior5"
              alt="Interior5"
            cropped={true}
              original={image.img}
              thumbnail={image.img}
              width="1024"
              height="768">
               {({ ref, open }) => (
         <img ref={ref} onClick={open} src={image.img} />
       )}    
              </Item>) 
          })
       
       }
       </div>
  </Gallery>
  </div>  );
    }
    
    const itemData = [
      
      {
        img: '/assets/images/plans/1.jpeg',
        title: 'plans',
      },
      {
        img: '/assets/images/plans/2.jpeg',
        title: 'plans',
      },
      {},
      {
        img: '/assets/images/plans/3.jpeg',
        title: 'plans',
      },
      {
        img: '/assets/images/plans/4.jpeg',
        title: 'plans',
      },
      
    ];
    
export default Plans;
