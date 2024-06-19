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
        title="Feature and target variables"
        description="We first need to determine the inputs and outputs of our model: in our case, we want to predict 
        birth rate based on the poverty incidence and population of a municipality. To simplify matters, we will categorize
        birth rate into 'low', 'medium', and 'high'."
      />

      <ExplorationItem
        title="Training Set"
        description="We split our dataset into 70% training set and 30% testing set using Python's `sklearn`. We then train a logistic regression model
        (over a max of 1000 iterations), and then fit this model onto out entire dataset.
        overfitting"
      />


    </div>
  );
}