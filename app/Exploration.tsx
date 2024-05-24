import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default async function Exploration() {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Exploration" />
      <Button
        className="ml-auto"
        name="Take a look at our full exploration tour!"
        link="https://colab.research.google.com/drive/1yBrVKPBKlfGQR4bbGP-N8Q9ZNd9hW0yD?usp=sharing"
      />
    </div>
  );
}
