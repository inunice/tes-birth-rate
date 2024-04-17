import "@/app/globals.css";

export default async function NavBar() {
  return (
    <div className="bg-eggshell max-w-full h-screen px-[30px] py-[80px] flex flex-row items-center justify-center gap-20 flex-wrap">
      <p className="max-w-[70vh] text-[70px] font-bagnard text-persian-red text-right leading-none">
        logo
      </p>
      <div>
        <p className="text-[50px] font-inter tracking-tight">
          Hello, we are <span className="font-bold">TES</span>!
        </p>
        <p className="max-w-[70vh] text-lg text-eerie-black">
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
