import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/app/Header";
import Overview from "@/app/Overview";
import Collection from "@/app/Collection";
import Exploration from "@/app/Exploration";
import Modeling from "@/app/Modeling";
import Results from "@/app/results";
import Conclusion from "@/app/Conclusion";
import Team from "@/app/Team";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div id="top">
        <Header />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="exploration">
        <Exploration />
      </div>
      <div id="modeling">
        <Modeling />
      </div>
      <div id="results">
        <Results />
      </div>
      <div id="conclusion">
        <Conclusion />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
}
