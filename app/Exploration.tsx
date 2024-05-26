import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ExplorationHeader from "@/components/ui/ExplorationHeader";
import ExplorationItem from "@/components/ui/ExplorationItem";

export default async function Exploration() {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Exploration" />
      <div className="flex flex-row justify-between gap-6 items-center flex-wrap">
        <p className="text-2xl font-urbanist leading-tight">
          Exploring our data is the first step to understanding it better!
        </p>
        <Button
          className="whitespace-nowrap"
          name="Take a look at our full exploration tour!"
          link="https://colab.research.google.com/drive/1yBrVKPBKlfGQR4bbGP-N8Q9ZNd9hW0yD?usp=sharing"
        />
      </div>
      <ExplorationHeader
        title="Data preprocesing"
        description="We first preprocess our data and ensure that it is clean, standardized, and ready for analysis! We try to make a few fields uniform across all datasets so that we can merge them into one. Having all our datasets collated into one dataframe is necessary for data analysis."
      />
      <ExplorationItem
        title="Cleaning Live Births Dataset"
        description="From the original dataset, we convert string representations (due to commas, etc.) of number values to numbers. We also substitute hyphen (-) values with 0 as per the dataset's original behavior and collate the birth count from the different months and sex assigned at birth into one column (Total Births). Lastly, we remove the extra whitespaces in the 'Municipality' and 'Province' fields."
      />
      <ExplorationItem
        title="Cleaning Poverty Incidence Dataset"
        description="We drop the unnecessary columns, leaving only the 'Poverty Incidence' for the year 2021. The dataset is ready to go."
      />
      <ExplorationItem
        title="Cleaning Population Dataset"
        description="Much like the live births dataset, string representations of number values (due to commas) were converted. With this, the dataset is now ready for merging."
      />
      <ExplorationItem
        title="Cleaning Population Dataset"
        description="Much like the live births dataset, string representations of number values (due to commas) were converted. With this, the dataset is now ready for merging."
      />
    </div>
  );
}
