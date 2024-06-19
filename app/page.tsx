import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/app/Header";
import Overview from "@/app/Overview";
import Collection from "@/app/Collection";
import Exploration from "@/app/Exploration";
import Modeling from "@/app/Modeling";
import Results from "@/app/Results";
import Conclusion from "@/app/Conclusion";
import Team from "@/app/Team";

const components = [
  { id: "top", Component: Header },
  { id: "overview", Component: Overview },
  { id: "collection", Component: Collection },
  { id: "exploration", Component: Exploration },
  { id: "modeling", Component: Modeling },
  { id: "results", Component: Results },
  { id: "conclusion", Component: Conclusion },
  { id: "team", Component: Team },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavigationBar />
      {components.map(({ id, Component }) => (
        <div key={id} id={id} className="w-full flex justify-center">
          <Component />
        </div>
      ))}
    </div>
  );
}
