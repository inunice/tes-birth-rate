import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ExplorationHeader from "@/components/ui/ExplorationHeader";
import ExplorationItem from "@/components/ui/ExplorationItem";
import Image from "next/image";

export default async function Results() {
  return (
    <div className="w-8/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Results" />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl font-urbanist leading-tight text-gray-600 italic">
          What are the implications of our results?
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-center sm:gap-10 gap-2 w-full flex-wrap">
          <p className="text-xl font-bold text-bittersweet sm:w-1/6 leading-tight">
            On our machine learning model
          </p>
          <div className="sm:w-5/6 gap-3 flex flex-col">
            <p className="leading-snug">
              Interpreting the model produced and its accuracy, the model is
              able to predict birth rate categories at a reasonable degree of
              accuracy, given the features it uses. Performing cross-validation
              was also able to validate that the data is not overfitting, and is
              reasonably correct when predicting completely unseen data.
            </p>

            <p className="leading-snug">
              Thus, a robust and reliable model was developed. However, it is
              important to note the underrepresentation of municipalities with
              high birth rates, which means that the current model would have
              trouble with such scenarios.
            </p>

            <p className="leading-snug">
              Hence, to improve upon this model, one can extrapolate this
              towards future datasets involving poverty index, which would allow
              us to predict birth rate and plan healthcare facilities
              accordingly, especially toward underrepresented classes. More
              advanced algorithms, specifically those that can handle outliers
              in the dataset (i.e. BARMM), can also be used to train the model
              and improve its performance.
            </p>
          </div>
        </div>
      </div>

      <ExplorationItem
        title="Excluding Bangsamoro region"
        description="As demonstrated by our EDA, if we include all the municipalities in the Philippines, then there seems to be no significant correlation between poverty incidence and birth rate; however, as mentioned earler, this correlation becomes strongly significant once we exclude municipalities from BARMM or the Bangsamoro region. We treat this region as an outlier, and momentarily exclude this from our analysis. "
      />

      <ExplorationItem
        title="On our research questions"
        description="Poverty incidence in the Philippines generally has a positive correlation with birth rate. In simpler terms, regions that are economically poorer tend to have higher birth rates than regions that are economically richer. This is an alarming point of concern, since raising a child is an incredibly expensive task—over PHP 300,000.00 per year (Isla, 2023). This would mean that children living in impoverished areas may not have adequate resources to be raised in a financially secure environment, and this is an indicator on where to focus our healthcare resources. Furthermore, we have shown that the poorer an area is, the less likely its population is to have their births delivered by medical professionals. This suggests that people from poorer areas may not have the resources to afford proper healthcare in childbirth.  "
      />

      <ExplorationItem
        title="On Bangsamoro Region"
        description="We hypothesized earlier that poorer regions (such as BARMM) may not have adequate access the facilities required to document their births. However, further statistics show that this is simply not true: BARMM has a national birth registration rate of 96.6%, which means that 96.6% of all total births within Bangsamoro are documented (Rappler, 2024). What then, may cause the exceedingly low birth rates within the region? UNFPA Philippines (2023) suggests that this may be caused by ongoing armed conflict within the region tied with its severe poverty incidence. "
      />

      <ExplorationItem
        title="Overall"
        description="Together with our data, this suggests that although economic state (i.e. poverty incidence) is one indicator of birthrate, the former is not the sole determinant of the latter. We must look at the issue not merely from a statistical perspective—but from a societal and human point of view.  "
      />

      <span className="text-gray-500 text-center">
        References:{" "}
        <a href="https://www.moneymax.ph/personal-finance/articles/cost-raising-child-philippines#:~:text=How%20Much%20Does%20It%20Cost,or%20%E2%82%B1300%2C000%20a%20year">
          [1]
        </a>
        <a href="https://www.rappler.com/philippines/mindanao/japan-aid-barmm-low-birth-registration-rates/">
          [2]
        </a>
        <a href="https://philippines.unfpa.org/en/node/15306">[3]</a>
      </span>
    </div>
  );
}
