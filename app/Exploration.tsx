import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default async function Exploration() {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Exploration" />
      <h2>Data preprocesing</h2>
      <div className="flex justify-center gap-5">
        <h3>Cleaning Live Births Dataset</h3>
        <div className="flex flex-col gap-3">
          <p>
            The original dataset contains values in string that needs to be
            converted into integers in order for Data Exploration to be smooth
            sailing. These include hyphens, commas, and even the numbers
            themselves!
          </p>
          <p>
            Next, the birth count was added together into one single value since
            this project only considers the birth count for one year.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <h3>Cleaning Populations Dataset</h3>
        <div className="flex flex-col gap-3">
          <p>
            For this dataset, a lot of changes were made. First, the population
            numbers were written written with commas, like 12,345. These needed
            to be converted to integers. Second, the dataset conta
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <h3>Cleaning Poverty Incidence Dataset</h3>
        <div className="flex flex-col gap-3">
          <p>
            Thankfully, the original dataset has been cleaned and is ready to go
            right away!
          </p>
        </div>
      </div>

      <Button
        className="ml-auto"
        name="Take a look at our full exploration tour!"
        link="https://colab.research.google.com/drive/1yBrVKPBKlfGQR4bbGP-N8Q9ZNd9hW0yD?usp=sharing"
      />
    </div>
  );
}
