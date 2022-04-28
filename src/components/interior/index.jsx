
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from 'react';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";

const Interior = ()=> {
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
  
   <h3>Interior projects</h3>
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
       
     {
          interior1.map((image, i) => {     
                   
           
           return ( <Item key={i}
            caption="Interior1"
            alt="Interior1"
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
  
  <p>Project 2</p>
       
       {
            interior2.map((image, i) => {     
                    
             return ( <Item key={i}
              caption="Interior2"
              alt="Interior2"
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
<p></p>
<p>Project 3</p>
       
       {
            interior3.map((image, i) => {     
            
             return ( <Item key={i}
              caption="Interior3"
              alt="Interior3"
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
<p>Project 4</p>
       
       {
            interior4.map((image, i) => {     
                        
             return ( <Item key={i}
              caption="Interior3"
              alt="Interior3"
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
       <p>Project 5</p>
       
       {
            interior5.map((image, i) => {     
                        
             return ( <Item key={i}
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
    
    const interior1 = [
      {
        img: '/assets/images/interior/interior1/1.jpeg',
        title: 'interior1',
      },
      {
        img:'/assets/images/interior/interior1/2.jpeg',
        title: 'interior1',
      },
      {

      },
      {
        img: '/assets/images/interior/interior1/3.jpeg',
        title: 'interior1',
      },
      {

      }
     
    ];
    
    const interior2 = [
        {
          img: '/assets/images/interior/interior2/6.jpeg',
          title: 'interior1',
        },
        {
          img:'/assets/images/interior/interior2/7.jpeg',
          title: 'interior1',
        },
        {

        },  
       
        {
          img: '/assets/images/interior/interior2/8.jpeg',
          title: 'interior1',
        },
        {

        },
        {

        },
       {}
      ];
      const interior3 = [
        {
          img: '/assets/images/interior/interior3/4.jpeg',
          title: 'interior1',
        },
        {
          img:'/assets/images/interior/interior3/5.jpeg',
          title: 'interior1',
        },
      
    
       
      ];

      const interior4 = [

        {
          img: '/assets/images/interior/interior4/1.jpeg',
          title: 'interior4',
        },
        {
          img:'/assets/images/interior/interior4/2.jpeg',
          title: 'interior4',
        },
        {

        },
        
        {
            img: '/assets/images/interior/interior4/3.jpeg',
            title: 'interior4',
          },
          {

          }
          
      ];
      const interior5 = [

        {
          img: '/assets/images/interior/interior5/1.jpeg',
          title: 'interior5',
        },
        {
          img:'/assets/images/interior/interior5/2.jpeg',
          title: 'interior5',
        },
        {

        },
        
        {
            img: '/assets/images/interior/interior5/3.jpeg',
            title: 'interior5',
          },
          
      ];
export default Interior;
