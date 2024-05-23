import "@/app/globals.css";

export default async function Header() {
  return (
    <div className="mx-[250px] my-[200px] flex flex-row items-center justify-center gap-1">
      <p className="text-[70px] mx-[200px]">logo</p>
      <div>
        <h1 className="text-[60px] font-urbanist tracking-tight">
          Hello, we are{" "}
          <span
            className="font-semibold 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-naples-yellow via-bittersweet to-teal
            animate-text
            "
          >
            TES
          </span>
          !
        </h1>
        <p className="text-lg w-[550px]">
          This is our project,{" "}
          <span
            className="font-semibold 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-naples-yellow via-bittersweet to-teal
            animate-text
            "
          >
            Mother!
          </span>
          , a data science adventure dedicated to analyzing the dynamics
          surrounding child birth statistics and socioeconomic factors,
          particularly focusing on the influence of economic status and
          geographic location in the Philippines. Through our findings, we aim
          to promote equitable access to healthcare services and facilitate
          informed family planning decisions.
        </p>
        <div className="flex gap-2 mt-[50px] justify-end">
          <div className="px-3 py-1 bg-english-violet rounded-lg">
            <span className="opacity-60 font-inter text-white">WFV Spring</span>
          </div>
          <div className="px-3 py-1 bg-teal rounded-lg">
            <span className="opacity-60 font-inter font-black">
              Ayen Manguan
            </span>
          </div>

          <div className="px-3 py-1 bg-bittersweet rounded-lg">
            <span className="opacity-60 font-inter font-black">
              Elijah Mejilla
            </span>
          </div>
          <div className="px-3 py-1 bg-naples-yellow rounded-lg">
            <span className="opacity-60 font-inter font-black">
              Jose Tomanan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
