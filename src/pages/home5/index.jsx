import React from "react";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import Intro4 from "../../components/Intro4";
import Portfolio2 from "../../components/Portfolio2";
import Video2 from "../../components/Video2";
import Video4 from "../../components/Video4"


const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout > 
      <Intro4 />
      <Portfolio2 />

      <Video />
      <Video2/>
      <Video4 />
 
    </MainLayout>
  );
};

export default Home5;
