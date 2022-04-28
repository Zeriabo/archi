
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from 'react';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";

const Exterior = ()=> {
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
   <h3>Exterior projects</h3>
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
        <p>Project 1</p>
    <Item 
      caption="Project1"
      alt="Project1"
    cropped={true}
      original={itemData[0].img}
      thumbnail={itemData[0].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[0].img} />
      )}
    </Item>
    <Item
      original={itemData[1].img}
      thumbnail={itemData[1].img}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[1].img} />
      )}
    </Item>

    <p>Project 2</p>
    <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[2].img}
      thumbnail={itemData[2].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[2].img} />
      )}
    </Item>
    <div></div>
 

 <p>Project 3</p>
 <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[3].img}
      thumbnail={itemData[3].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[3].img} />
      )}
    </Item>
    <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[4].img}
      thumbnail={itemData[4].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[4].img} />
      )}
    </Item>
    <p>Project 4</p>
 <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[5].img}
      thumbnail={itemData[5].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[5].img} />
      )}
    </Item>
    <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[6].img}
      thumbnail={itemData[6].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[6].img} />
      )}
    </Item>
    <div></div>
    <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[7].img}
      thumbnail={itemData[7].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[7].img} />
      )}
    </Item>
    <div>
<p></p>
    </div>
    <p>Project 5</p>
 <Item
      caption="Project1"
      alt="Project2"
    cropped={true}
      original={itemData[8].img}
      thumbnail={itemData[8].img}
      width="1024"
      height="768"
     
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={itemData[8].img} />
      )}
    </Item>
<div></div>
    </div>
  </Gallery>
  </div>  );
    }
    
    const itemData = [
      {
        img: '/assets/images/exterior/project1/1.jpg',
        title: 'project1',
      },
      {
        img: '/assets/images/exterior/project1/2.jpg',
        title: 'project1',
      },
      {
        img: '/assets/images/exterior/project2/1.jpeg',
        title: 'project2',
      },
      {
        img: '/assets/images/exterior/project3/1.jpeg',
        title: 'project3',
      },
      {
        img: '/assets/images/exterior/project3/2.jpeg',
        title: 'project3',
      },
      {
        img: '/assets/images/exterior/project4/1.jpeg',
        title: 'project4',
      },
      {
        img: '/assets/images/exterior/project4/2.jpeg',
        title: 'project4',
      },
      {
        img: '/assets/images/exterior/project4/3.jpeg',
        title: 'project4',
      },
      {
        img: '/assets/images/exterior/project5/1.jpeg',
        title: 'project5',  
      },
    ];
    
export default Exterior;
