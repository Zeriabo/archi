import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('iframe');
     script.class="ku-embed";
     script.allowFullscreen;
    script.src = url;
    script.async = true;
    script.allow="xr-spatial-tracking; gyroscope; accelerometer" 
    script.height="600"
    script.with="100%"
console.log(url);

  const div= document.getElementById("kuula");
  div.appendChild(script);
  }, [url]);
};

export default useScript;