import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ExplorationHeader from "@/components/ui/ExplorationHeader";
import ExplorationItem from "@/components/ui/ExplorationItem";
import Image from "next/image";


export default async function Exploration() {
  return (
    <div className="w-8/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Modeling" />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl font-urbanist leading-tight text-gray-600 italic">
          We now translate our findings into a machine learning model.
        </p>
        <div className="flex justify-center w-full">
          <Button
            className="whitespace-nowrap"
            name="Checkout our modelling process"
            link="https://colab.research.google.com/drive/10E4--CL162Sd65KdapbeW9natzQgm6Jm?fbclid=IwAR1O-5xi22hZiKSnYkb50Lp-DXp4-bC8PMh6qxLQF7AssEXQgTHRMVairao#scrollTo=GFKI7r_0lJE_"
          />

          
        </div>
      </div>

      <ExplorationItem
        title="Preliminaries"
        description="
        As a prerequisite, we categorize Birth Rates into Birth Rate Categories, i.e. classes of High (greater than 3.10%), Medium (between 1.078% and 3.10%), or Low (less than 1.078%), where these classifications are from the definition provided by the World Bank’s data.  To visualize this change, we use Pandas to visualize how these birth rates are currently distributed in the dataset. We can easily see that the dataset is skewed, and higher birth rates are underrepresented during the training of this model. This should be kept in mind during interpretation of the results.
        "
        /* 
          FOR HYPERLINKING SA "World Bank":
          https://data.worldbank.org/indicator/SP.DYN.CBRT.IN?end=2022&start=2022&view=map
        */ 
        imagePath="/modelling/modelling-1.png"
        /* ^^ FOR RESIZING */
      />

      <ExplorationItem
        title="Feature and target variables"
        description="
        Now we choose the feature and target variables for our model, from the discoveries we have made during exploratory data analysis. Feature variables chosen were Municipality, Region, Poverty Incidence, and Total Population, in order to predict the target variable Birth Rate Category, our newly made column.
        "
      />

      <ExplorationItem
        title="Modelling and Training"
        description="
        As the Pearson correlation coefficient test conducted previously showed a clear relationship between Poverty Incidence and Birth Rate, then we thus consider the logistic regression model for our purpose. Using Python library sklearn, we train this model by splitting our dataset: 70% will be for training, and the other 30% will be for testing. The model was then trained for up to 1000 maximum iterations. To test for overfitting and how well our model fits to unseen data, cross-validation is also performed (where the data was split into subsets then training and validating with them).
        "
      />

      <ExplorationItem
        title="Training Results"
        description="
        After model training, the model provided a training accuracy of 81%, and a test accuracy of 84%. As for the cross-validation, the process showed a mean accuracy of 79%.
        "
        /* ^^ U CAN ADD MORE IF U WANT */
      />

    </div>
  );
}