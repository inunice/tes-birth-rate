import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Collection from "@/components/Collection";
import Exploration from "@/components/Exploration";
import Modeling from "@/components/Modeling";
import Results from "@/components/Results";
import Conclusion from "@/components/Conclusion";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <NavigationBar currentActive={"overview"} />
      <Header />
      <Overview />
      <Collection />
      <Exploration />
      <Modeling />
      <Results />
      <Conclusion />
      <Team />
    </div>
  );
}
