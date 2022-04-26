import React from "react";

import "react-modal-video/css/modal-video.css";
import useScript from "../../../public/js/custom-hook/useScript.js";

const Video4 = () => {
  useScript('https://kuula.co/share/collection/7qg3w?%20logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=0&thumbs=1')
  React.useEffect(() => {
    console.clear();
  
  }, []);
 
  return (
    <div id="container">
<div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}  id ="kuula"></div>
    </div>
  );
};

export default Video4;
