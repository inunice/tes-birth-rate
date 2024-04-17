import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <NavigationBar currentActive={"overview"} />
      <Header />
    </div>
  );
}
