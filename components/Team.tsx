import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";

export default async function Team() {
  return (
    <div className="my-[200px] flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Team" />
      <div className="flex w-[60%] justify-center gap-5">
        <div className="border p-4 rounded-lg bg-teal w-1/3">
          <h2 className="text-xl font-bold">Ayen Manguan</h2>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            deserunt molestiae odio accusamus deleniti modi, reprehenderit amet
            optio ut asperiores laborum obcaecati totam quas aliquam eaque
            minima veniam, nobis molestias.
          </p>
        </div>
        <div className="border p-4 rounded-lg bg-bittersweet w-1/3">
          <h2 className="text-xl font-bold">Elijah Mejilla</h2>
          <p className="mt-2">This is the second card.</p>
        </div>
        <div className="border p-4 rounded-lg bg-naples-yellow  w-1/3">
          <h2 className="text-xl font-bold">Jose Tomanan</h2>
          <p className="mt-2">This is the third card.</p>
        </div>
      </div>
    </div>
  );
}
