import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ExplorationHeader from "@/components/ui/ExplorationHeader";
import ExplorationItem from "@/components/ui/ExplorationItem";
import Image from "next/image";

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
      <div className="flex flex-row justify-between gap-10 items-between flex-wrap">
      <p className="text-2xl font-urbanist leading-tight">
          And there we go, our data has been cleaned!
      </p>
      <Button
          className="whitespace-nowrap"
          name="Take a look at our dataset! [WIP]"
          link="https://colab.research.google.com/drive/1yBrVKPBKlfGQR4bbGP-N8Q9ZNd9hW0yD?usp=sharing"
      />

      <ExplorationHeader
        title="Nutshell Plot" 
        description="From here, we try to extrapolate patterns within our data; we then visualize our results to try and see if they correspond with any of our hypotheses."
      />
  
      <ExplorationItem 
        title="Geospatial Mapping"
        description="Nowmhow poverty incidence and birth rate affect 
                    different areas of the Philippines, then one option would be to plot our data geospatially  
                    using colors, across different provinces in the country. This would help us gain an intuitive understanding 
                    of how these variables correlate and interact with one another "
      /> 

      <ExplorationItem 
        title="Individual plots"
        description="We first plot the maps of each of both poverty incidence and birth rate individually using GeoPandas."
      />  

      <div className="w w-full flex items-center justify-between">
        <Image
          src={"/plots/nutshell-poverty.png"}
          width={450}
          height={450}
        />
        <Image
          src={"/plots/nutshell-birth.png"}
          width={400}
          height={400}
        />

      </div>
      
      <ExplorationItem 
        title="2D colormap"
        description="Now, the challenge is to represent both poverty incidence and birth rate in the
         Philippine map. To do this, we would need a way to represent two variables using color. Our solution: we created this 2D colormap by linear interpolating two 1-dimensional colormaps! Isn’t that neat? "
      /> 

      <div className="w-full flex items-center justify-center">
        <Image
          src={"/plots/nutshell-legend.png"}
          width={700}
          height={700}
        />
      </div>



      <ExplorationItem 
        title="Mapping values"
        description="We then use correspond each region to a corresponding birth rate and poverty incidence values, then correspond those values to a color."
      />  

      <ExplorationItem 
        title="Plotting"
        description="And now, all that's left to do is plot the map." 
      /> 

      <div className="w-full flex items-center justify-center">
        <Image
          src={"/plots/nutshell.png"}
          width={400}
          height={400}
        />
      </div>

      <ExplorationItem
        title="Final Plot"
        description="Putting it all together, we have: [AYEN can u put the graph u made here ty]"
      />

      <ExplorationItem
        title="Analysis"
        description="We notice that:"
      />

      </div>  
    </div>
  );
}
