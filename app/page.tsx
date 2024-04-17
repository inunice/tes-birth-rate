import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div>
      <NavigationBar currentActive={"overview"} />
      <Header />

      <Overview />
    </div>
  );
}
