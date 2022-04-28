import React from "react";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import Intro4 from "../../components/Intro4";
import Video4 from "../../components/Video4"
import Portfolio2 from "../../components/Portfolio2"
import Services3 from "../../components/Services3"
import Exterior from "../../components/exterior";
import Interior from "../../components/interior";
import Plans from "../../components/plans";
import Kuula1 from "../../components/TilalAlFurjan";
import InteriorVilla360 from "../../components/InteriorVilla360"
import DubaiVillaVideo1 from "../../components/DesigingVillasAtDubaiSouth/Video";
import DubaiVillaVideo2 from "../../components/DesigingVillasAtDubaiSouth/Video2";
import Video2 from "../../components/DesigingVillasAtDubaiSouth/Video2";
import ModernVillaAtDubai from "../../components/ModernVillaAtDubai";
const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout > 
      <Intro4 />
      <Services3 bigTitle grid />
      <Exterior />
      <Interior />
      <Plans />
      <Kuula1 />
      <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
      <DubaiVillaVideo1 />
      <Video2/>
      <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
      <ModernVillaAtDubai />

 
      {/* <Portfolio2/>
      <Video />
      <Video2/>
      <Video4 /> */}
 
    </MainLayout>
  );
};

export default Home5;
