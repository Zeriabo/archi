import React from "react";
import Team2 from "../../components/Team2";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import Blogs4 from "../../components/Blogs4";
import Intro4 from "../../components/Intro4";
import Services3 from "../../components/Services3";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import Video2 from "../../components/Video2";
import Video3 from "../../components/Video3"
import Video4 from "../../components/Video4"
import Video5 from "../../components/Video5"

const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout > 
      <Intro4 />
      <Services3 bigTitle grid />
      <Portfolio2 />

      <Video />
      <Video2/>
      <Video4 />
 
    </MainLayout>
  );
};

export default Home5;
