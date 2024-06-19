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
        <p className="text-2xl font-urbanist leading-tight text-gray-600 italic">
          Exploring our data is the first step to understanding it better.
        </p>
        <div className="flex justify-center w-full">
          <Button
            className="whitespace-nowrap"
            name="Take a look at our full exploration tour!"
            link="https://colab.research.google.com/drive/13XMDQ4YN-O8kFPMJfu63bJnVCbdnxs-X?usp=sharing"
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
        title="Matching Location Names"
        description="
          Our key in merging the three datasets is the 'Province' and 'Municipality'. To match them, we remove information inside parentheses. They usually include additional information like '(Capital)'. We also set both columns to title case. Next, we check for any location that does not match between the datasets and manually correct them. These cases are usually due to different spellings (Pinamungahan, Pinamungajan), mispelled words (San Idelfonso, San Ildefonso), different conventions (City Of Carmona, Carmona), or old names (Bumbaran, Amai Manabilang).
        "
      />
      <ExplorationItem
        title="Merged Dataframe"
        description="
          After ensuring all locations are matched, we merge the three datasets into one dataframe with 1634 rows (no data loss!). The dataframe has information on location (region, province, municipality), poverty incidence, total population, total births, and delivery methods.
        "
      />
      <div className="flex flex-row justify-between gap-10 items-between flex-wrap">
        <p className="text-2xl font-urbanist leading-tight">
          And there we go, our data has been cleaned!
        </p>
      </div>

      <ExplorationHeader
        title="Exploring Data"
        description="We now look at the distribution of our data, check for any outliers, and see if there are any significant relationships between our variables."
      />
      <ExplorationItem
        title="Birth Rate Distribution"
        description="After calculating the birth rate from the birth count and total population, we can plot it per region. Without considering outliers, the highest municipal birth rate is 1.75% (found in MIMAROPA) , while the lowest is 0.65% (found in BARMM). 
        In terms of average per region, Bicol has the highest birth rate."
        imagePath="/plots/eda-1.png"
      />
      <ExplorationItem
        title="Poverty Incidence and Birth Rate"
        description="We plot the poverty incidence against the birth rate for each municipality. Since there are no apparent trends at this point, 
        we explore further!"
        imagePath="/plots/eda-2.png"
      />

      <ExplorationHeader
        title="Question 1: Live births and Economic Status"
        description="
        How does economic status affect the frequency of live births per unit of population?
        While being of lower economic status should logically result in having a lower birth rate to compensate for the family's lack of purchasing power, this family decision can be hindered by one's lack of access to education.
        So we ask: are less economically advanced areas more conscious of having children?
        Or is it the other way around?
        Is financial status a factor in family planning in Filipino families in the first place?
        The answers to these questions will be visualized through the following joint plots.
      "
      />
      <ExplorationItem
        title="Preprocessing"
        description="
          First, we take the previous scatter plot we made it, then differentiate each region by assigning a color.
          To do so, we create a duplicate of the merged dataframe, suit it for this particular analysis by dropping unused columns, then run the dataframe through a joint plot.
          Along with this, we also rename each region so they can be more easily readable in the plot legend, as will be seen later.
        "
      />
      <ExplorationItem
        title="Poverty Incidence vs Birth Rate, by Region"
        description="
          Improving on the scatter plot produces the following joint plot.
          From the image, one can observe that the birth rates of most Philippine municipalities cluster around the 1.0 to 1.5 births per capita range, and the poverty incidence mostly ranges from 0 to 40.
          Basic statistical testing using Pearson correlation coefficients gives values of p = 0.212 and r = -0.03, which shows an insignificant relationship between the two variables.
          However, we can improve this visualization further by grouping the municipalities according to the province they belong in.
        "
        imagePath="/plots/q1-1.png"
      />
      <ExplorationItem
        title="Aggregating per province"
        description="
          Using the number of municipalities in a province as the variable size of each marker, we are now able to better visualize the results above!
          From this figure, it is also more readily apparent that the BARMM region is an outlier, being away from the main cluster of datapoints.
          This can be attributed to the political instability and struggles in economic development in the Bangsamoro region, being only officially declared in 2018 and still constantly facing armed conflict in its short lifetime.
          This results in high poverty incidence in the region regardless of birth rate.
        "
        imagePath="/plots/q1-2.png"
      />

      <ExplorationItem
        title="Removing BARMM as a region"
        description="
          As a matter of fact, if we omit this region from our computation, the plot would look a lot simpler.
          Testing this using Pearson correlation coefficient, this would yield p = 1.64e-17 and r = 0.216, implying a strong significant correlation.
          This gives us the insight that outside of BARMM's economic and political issues, the trend in the Philippines is that increasing povery incidence comes with increasing birth rate.
          This can be attributed to the country's poor sex education, which results in a lack of family planning in poorer Philippine areas.
        "
        imagePath="/plots/q1-3.png"
      />

      <div className="flex flex-col justify-center items-center gap-4 w-3/4">
        <p className="text-2xl font-urbanist leading-tight text-center">
          Question 1: How does economic status affect the frequency of live
          births per unit of population?
        </p>
        <p className="text-center">
          Economic status and birth rate{" "}
          <strong>
            are strongly and significantly correlated but only when BARMM is
            excluded, i.e. the relationship is not significant otherwise
          </strong>
          . This can be attributed to a variety of factors, including poor
          education quality and poor public awareness about safety in sex.
          However, while this takeaway is useful insight for analyzing the
          current status of the nation, it is still important to realize that it
          is not proper to exclude any Philippine region out of the narrative,
          regardless of how problematic the region may be.
        </p>
      </div>

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
        description="Now, we check if there is a correlation between birth delivery methods and poverty incidence using logistic regression. Since it is binary, our two outcomes will be if it was delivered by a health professional or not. We use poverty incidence as the independent variable and `Count` as weight of our model. Based on the results, there is a statistically significant correlation between poverty incidence and the likelihood of having a health professional in childbirth. Since the coefficient for poverty incidence is negative (-0.0037) and the p-values < 0, we can conclude that as poverty incidence increases, the odds of a health professional childbirth decreases!
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

      <ExplorationHeader
        title="Nutshell Plot"
        description="
          From here, we try to extrapolate patterns within our data. We then visualize our results to see if they correspond with any of our hypotheses.
          We first merge all three datasets that we've obtained.
        "
      />

      <ExplorationItem
        title="Geospatial Mapping"
        description="
          Now how poverty incidence and birth rate affect 
          different areas of the Philippines, then one option would be to plot our data geospatially  
          using colors, across different provinces in the country. This would help us gain an intuitive understanding 
          of how these variables correlate and interact with one another.
        "
      />

      <ExplorationItem
        title="Individual plots"
        description="
          We first plot the maps of each of both poverty incidence and birth rate individually using GeoPandas.
        "
      />

      <div className="w-full flex items-center justify-center gap-[50px]">
        <Image src={"/plots/nutshell-poverty.png"} width={450} height={450} />
        <Image src={"/plots/nutshell-birth.png"} width={400} height={400} />
      </div>

      <ExplorationItem
        title="2D colormap"
        description="Now, the challenge is to represent both poverty incidence and birth rate in the
         Philippine map. To do this, we would need a way to represent two variables using color. Our solution: we created this 2D colormap by linear interpolating two 1-dimensional colormaps! Isn’t that neat? "
      />

      <div className="w-full flex items-center justify-center">
        <Image src={"/plots/nutshell-legend.png"} width={500} height={500} />
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
        <Image src={"/plots/nutshell.png"} width={400} height={400} />
      </div>

      <ExplorationItem
        title="Final Plot"
        description="Putting it all together, we have:"
        imagePath={"/plots/nutshell-final.png"}
      />

      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-center gap-10 w-full">
          <p className="text-xl font-bold text-bittersweet w-1/6 leading-tight">
            Analysis
          </p>
          <div className="w-5/6 gap-3 flex flex-col">
            <p className="leading-snug">
              Using the extremes of both axes, we determine four colors at each
              of the corners. There's blue which corresponds to low poverty
              incidence and low birth rate; purple which signifies low poverty
              incidence and high birth rate; green which shows high poverty
              incidence; and yellow which shows high poverty incidence and high
              birth rate.
            </p>

            <p className="leading-snug">
              There are two main hypotheses on how poverty incidence can affect
              birth rates.
            </p>

            <p className="leading-snug">
              The first hypothesis is that the poorer a region is, then the less
              access they would have to proper birth control and family planning
              knowledge--this would lead to poorer areas having higher birth
              rates. The second guess is that if the region is poorer, then
              their birth rates would be lower because they would be less
              capable of financially supporting children.{" "}
            </p>

            <p className="leading-snug">
              From the leftmost graph showing only poverty incidence, we see
              that more northern areas (i.e., Luzon) tend to have a lower
              poverty incidence, while more southern areas (i.e., Mindanao)
              generally have a higher poverty incidence. This observation will
              help us in our analysis.
            </p>

            <p className="leading-snug">
              We see that in the main graph, areas in luzon tend to range from
              purple to indigo. This means that these areas tend to have both
              low poverty incidence and high birth rates.
            </p>

            <p className="leading-snug">
              In the Visayan areas, we see different areas range from purple to
              orange; this suggests that there exists moderate-to-high
              birthrates regardless of the poverty incidence within an area.
            </p>

            <p className="leading-snug">
              Finally, we observe that Mindanao has the greatest variation.
              However, while there are areas that are colored blue/green
              (indicating low birth rates), majority of the areas range from the
              purple to orange spectrum. This indicates, once again,
              moderate-to-high birth rates regardless of poverty incidence
            </p>

            <p className="leading-snug">
              One possible reason for the greener areas is that more farflung
              areas may have less access to healthcare, and in turn, the
              facilities needed to record births.{" "}
            </p>

            <p className="leading-snug">
              On a baseline, we can make an interpretation that the birth rate
              of a region is relatively consistent, regardless of its
              corresponding poverty incidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
