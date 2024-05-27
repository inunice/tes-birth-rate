import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ExplorationHeader from "@/components/ui/ExplorationHeader";
import ExplorationItem from "@/components/ui/ExplorationItem";
import Image from "next/image";

export default async function Exploration() {
  return (
    <div className="w-8/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Exploration" />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl font-urbanist leading-tight">
          Exploring our data is the first step to understanding it better!
        </p>
        <div className="flex justify-center w-full">
          <Button
            className="whitespace-nowrap"
            name="Take a look at our full exploration tour!"
            link="https://colab.research.google.com/drive/1yBrVKPBKlfGQR4bbGP-N8Q9ZNd9hW0yD?usp=sharing"
          />
        </div>
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
      <ExplorationItem
        title="Matching Location Names"
        description="Our key in merging the three datasets is the 'Province' and 'Municipality'. To match them, we remove information inside parentheses. They usually include additional information like '(Capital)'. We also set both columns to title case. Next, we check for any location that does not match between the datasets and manually correct them. These cases are usually due to different spellings (Pinamungahan, Pinamungajan), mispelled words (San Idelfonso, San Ildefonso), different conventions (City Of Carmona, Carmona), or old names (Bumbaran, Amai Manabilang)."
      />
      <ExplorationItem
        title="Merged Dataframe"
        description="After ensuring all locations are matched, we merge the three datasets into one dataframe with 1634 rows (no data loss)!. The dataframe has information on location (region, province, municipality), poverty incidence, total population, total births, and delivery methods."
      />

      <div className="h-0.5 w-8/12 bg-teal my-2 mt-4">&nbsp;</div>

      <ExplorationHeader
        title="Exploring Data"
        description="Now that we have our data ready, we can start exploring it! We will look at the distribution of our data, check for any outliers, and see if there are any patterns or relationships between our variables."
      />
      <ExplorationItem
        title="Birth Rate Distribution"
        description="After calculating the birth rate from the birth count and total population, we can plot it per region. Without considering outliers, the highest birth rate is around 1.75% in MIMAROPA, while the lowest is 0.65% in BARMM. Bicol has the highest average birth rate."
        imagePath="/plots/eda-1.png"
      />
      <ExplorationItem
        title="Poverty Incidence and Birth Rate"
        description="We plot the poverty incidence against the birth rate for each municipality. Since no trend is apparent at this point, we will need to explore further!"
        imagePath="/plots/eda-2.png"
      />

      <div className="h-0.5 w-8/12 bg-teal my-2 mt-4">&nbsp;</div>

      <ExplorationHeader title="Question 1" description="Text" />
      <ExplorationItem
        title="Dunno"
        description="Lorem."
        imagePath="/plots/q1-1.png"
      />
      <ExplorationItem
        title="Ipsum"
        description="Dorothy"
        imagePath="/plots/q1-2.png"
      />

      <div className="flex flex-col justify-center items-center gap-4 w-3/4">
        <p className="text-2xl font-urbanist leading-tight text-center">
          Question 1 conclu
        </p>
        <p className="text-center">
          From the analysis, location and economic status{" "}
          <strong>
            does somewhat influence the preference on child delivery methods of
            mothers
          </strong>
          . For location, despite the trend towards professional healthcare,
          there still exists a significant number of Filipinos who opt for
          traditional birth attendants, especially in regions with lower
          economic status. Logistic regression also reveals that as poverty
          incidence increases, the odds of opting for a health professional
          during childbirth decreases. This preference may be influenced by
          factors such as accessibility to professional healthcare and cultural
          beliefs; further qualitative research can help us understand the
          complex dynamics of childbirth choices in the Philippines!
        </p>
      </div>

      <div className="h-0.5 w-8/12 bg-teal my-2 mt-4">&nbsp;</div>

      <ExplorationHeader
        title="Question 2: Child Delivery Methods"
        description="Which child delivery method do mothers prefer more, and does it correlate to location & economic status? Before hospital medical care became more accessible in the Philippines, midwives were the go-to in delivering Filipino babies. Is that still the case today? In our data, delivery methods are divided into Health Professionals (hospitals), Traditional Birth Attendants (midwives or local clinics), Others, and Not Stated. We hypothesize that less economically advanced areas still rely on traditional attendants due to accessibility and culture."
      />
      <ExplorationItem
        title="Preprocessing"
        description="First, let's turn the delivery methods into categorical data and add a new column for the count. Our plan is to visualize our data using economic status as a parameter; to aid us in doing so, we can represent `Poverty Incidence` in ranges or bins. This makes our plot more digestible."
      />
      <ExplorationItem
        title="Birth count by deliver method per poverty incidence"
        description="Here, we can see that an overwhelming majority across all economic brackets rely on `Health Professional` methods to deliver their children.
        Moreover, there is still a small percentage of people preferring `Traditional Birth Attendants`, while a significantly small amount use `Others`.
        This trend towards professional healthcare can help reduce maternal and infant mortality rates and improve overall health statistics.
        Let's dive deeper and analyze the trends for each delivery method!"
        imagePath="/plots/q2-1.png"
      />
      <ExplorationItem
        title="Health Professionals"
        description="We can see that lower poverty incidence ranges have higher count for `Health Professionals`, and that there is a downward trend as poverty incidence increases. Moreover, regions nearer to the capital also have higher counts. This can be attributed to the fact that they are more economically advanced and have better access to professional health care."
        imagePath="/plots/q2-2.png"
      />
      <ExplorationItem
        title="Traditional Birth Attendants"
        description="Next, for `Traditional Birth Attendant`, the plot is much more balanced across poverty incidence ranges as compared to `Health Professionals`. The regions are also well-represented across the plot. The regions in Mindanao are much more evident, which means that these areas still 'prefer' traditional birth attendants to health professionals. This 'preference' could be due to professional health care accessibility or culture; what we can say for sure is that there is still a significant number of Filipinos who use traditional birth attendants as a delivery method."
        imagePath="/plots/q2-3.png"
      />
      <ExplorationItem
        title="Others and not stated"
        description="The trend for the delivery method `Others` is quite similar to that of `Birth Attendants`. The same reasoning (health care access, culture) can be applied, but it should be noted that the total count for this plot is much less than the former. This is a good thing since it is always safer to perform childbirth in a professional setting. The amount of data for deliveries by unstated means is too little to draw a conclusion."
        imagePath="/plots/q2-4.png"
      />

      <ExplorationItem
        title="Hypothesis Testing"
        description="Now, we check if there is a correlation between birth delivery methods and poverty incidence using logistic regression. Since it is binary, our two outcomes will be if it was delivered by a health professional or not. We use poverty incidence as the independent variable and `Count` as weight of our model. Based on the results, there is a <strong>statistically significant correlation between poverty incidence and the likelihood of having a health professional in childbirth</strong>. Since the coefficient for poverty incidence is negative (-0.0037) and the p-values < 0, we can conclude that as poverty incidence increases, the odds of a health professional childbirth decreases!
        Although, the low R-squared value (0.35) can suggest that there are likely other factors, too."
      />

      <div className="flex flex-col justify-center items-center gap-4 w-3/4">
        <p className="text-2xl font-urbanist leading-tight text-center">
          Question 2: Which child delivery method do mothers prefer more, and
          does it correlate to location & economic status?
        </p>
        <p className="text-center">
          From the analysis, location and economic status{" "}
          <strong>
            does somewhat influence the preference on child delivery methods of
            mothers
          </strong>
          . For location, despite the trend towards professional healthcare,
          there still exists a significant number of Filipinos who opt for
          traditional birth attendants, especially in regions with lower
          economic status. Logistic regression also reveals that as poverty
          incidence increases, the odds of opting for a health professional
          during childbirth decreases. This preference may be influenced by
          factors such as accessibility to professional healthcare and cultural
          beliefs; further qualitative research can help us understand the
          complex dynamics of childbirth choices in the Philippines!
        </p>
      </div>

      <div className="h-0.5 w-8/12 bg-teal my-2 mt-4">&nbsp;</div>
    </div>
  );
}
