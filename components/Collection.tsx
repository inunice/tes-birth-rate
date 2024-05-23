import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default async function Overview() {
  return (
    <div className="my-[200px] flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Collection" />
      <div className="flex flex-col items-center justify-center gap-10">
        <Button
          name="Check out our data collection process!"
          link="https://docs.google.com/document/d/1enEdHeMk50b3VRlD1AZu_6Ux9ikRHa7WwSGKE8lVFJM/edit"
        />
        <Button
          name="View our dataset here!"
          link="https://docs.google.com/document/d/1enEdHeMk50b3VRlD1AZu_6Ux9ikRHa7WwSGKE8lVFJM/edit"
        />
      </div>
    </div>
  );
}
