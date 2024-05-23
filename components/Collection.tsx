import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default async function Overview() {
  return (
    <div>
      <div className="my-[200px] flex flex-col items-center justify-center gap-10">
        <SectionTitle title="Collection" />
        <Button
          name="View our repository here!"
          link="https://github.com/inunice/tes-birth-rate"
        />
        <a
          className="text-teal"
          href="https://docs.google.com/document/d/1enEdHeMk50b3VRlD1AZu_6Ux9ikRHa7WwSGKE8lVFJM/edit?usp=sharing"
        >
          Take a look at our data collection process
        </a>
        <a
          className="text-teal"
          href="https://docs.google.com/spreadsheets/d/1nwAFaO6RvoAr0iBZu7_pj_rHSNj9LChn3vYykx4Zfc0/edit?usp=sharing"
        >
          Check out our dataset!
        </a>
      </div>
    </div>
    
  );  
}
