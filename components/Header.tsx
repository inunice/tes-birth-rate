import "@/app/globals.css";

export default async function Header() {
  return (
    <div className="bg-eggshell mx-[250px] my-[200px] flex flex-row items-center justify-center gap-20">
      <p className="text-[70px] mx-[200px]">logo</p>
      <div>
        <p className="text-[50px] font-inter tracking-tight">
          Hello, we are <span className="font-bold">TES</span>!
        </p>
        <p className="text-lg">
          This is our project, <span className="font-bold">Mother!</span>, a
          data science project dedicated to analyzing the dynamics surrounding
          child birth statistics and socioeconomic factors, particularly
          focusing on the influence of economic status and geographic location
          in the Philippines. Through our findings, we aim to promote equitable
          access to healthcare services and facilitate informed family planning
          decisions.
        </p>
      </div>
    </div>
  );
}
