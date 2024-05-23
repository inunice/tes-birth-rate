import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";

export default async function Overview() {
  return (
    <div className="my-[200px] flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Overview" />
      <div className="flex flex-col gap-8">
        <p className="font-urbanist text-2xl font-bold text-bittersweet text-center">
          Why are we doing this?
        </p>
        <p className="text-4xl font-urbanist">
          It is <span className="italic">expensive</span> to have a child in
          this economy.
        </p>
        <div className="flex flex-col gap-5 items-center justify-center">
          <p className="text-lg text-center w-[600px]">
            Raising a child in the Philippines is estimated to cost around
            300,000 pesos per year (Isla, 2023), a considerable expense for
            families in a developing nation with increasingly high inflation
            rates and cost of living (Yu, 2024).
          </p>
          <p className="text-lg text-center w-[600px]">
            In 2023, however, CNA Insider reported that the Philippines has
            successfully lowered its birth rate. This begs the question, what
            led to this development? Does the economic situation of the people
            in the Philippines impact their decision to have children?
          </p>
        </div>
        <span className="text-gray-500 text-center">
          References:{" "}
          <a href="https://www.moneymax.ph/personal-finance/articles/cost-raising-child-philippines#:~:text=How%20Much%20Does%20It%20Cost,or%20%E2%82%B1300%2C000%20a%20year">
            [1]
          </a>
          <a href="https://www.rappler.com/business/inflation-rate-philippines-march-2024/">
            [2]
          </a>
          <a href="https://www.youtube.com/watch?v=52fiLBw9PQQ">[3]</a>
        </span>
      </div>
      <div className="flex gap-[100px] mt-7">
        <div className="flex-1 flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="teal"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p className="font-urbanist text-2xl font-bold text-bittersweet text-center">
              Problem
            </p>
          </div>
          <p className="text-lg text-center w-[500px]">
            Despite the significant financial burden of raising children in the
            Philippines, there is a lack of understanding regarding how the
            economic circumstances of individuals influence their decisions
            regarding family planning.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="teal"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>
            <p className="font-urbanist text-2xl font-bold text-bittersweet text-center">
              Solution
            </p>
          </div>
          <p className="text-lg text-center w-[500px]">
            Using data science, we intend on analyzing economic indicators,
            geographical data, and maternal preferences{" "}
            <span className="italic">
              (do rural municipalities prefer traditional methods?)
            </span>{" "}
            to explore their combined impact on birth rates in the Philippines
            and promote family planning in highly impacted areas.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[1200px] mt-10">
        <p className="font-urbanist text-2xl font-bold text-bittersweet text-center">
          So we'd like to figure out...
        </p>
        <div className="flex flex-row mt-10">
          <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <p className="font-urbanist text-base font-bold text-teal text-center uppercase">
              Primary Question
            </p>
            <p className="text-2xl text-center w-[500px]">
              How does economic status affect the frequency of live births per
              unit of population?
            </p>
            <p className="text-gray-500">
              Less economically advanced == more conscious of having children?
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <p className="font-urbanist text-base font-bold text-teal text-center uppercase">
              Secondary Question
            </p>
            <p className="text-2xl text-center w-[500px]">
              Which child delivery method do mothers prefer more, and does it
              correlate to location & economic status?
            </p>
            <p className="text-gray-500">
              Health professionals, traditional attendants, or other methods?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1200px] mt-10">
        <p className="font-urbanist text-2xl font-bold text-bittersweet text-center">
          And we hypothesize...
        </p>
        <div className="flex flex-row mt-10">
          <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <p className="font-urbanist text-base font-bold text-teal text-center uppercase">
              Null Hypothesis
            </p>
            <p className="text-2xl text-center w-[500px]">
              Economic status has no significant effect on the frequency of live
              births per unit of population and the preferred delivery method of
              mothers.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <p className="font-urbanist text-base font-bold text-teal text-center uppercase">
              Alternative Hypothesis
            </p>
            <p className="text-2xl text-center w-[500px]">
              There is a significant correlation between the economic status,
              frequency of live births, and the preferred delivery method of
              mothers.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1200px] mt-10 items-center justify-center gap-5">
        <p className="font-urbanist text-2xl font-bold text-bittersweet text-center">
          Our plan of action!
        </p>
        <p className="text-lg text-center w-[700px]">
          We will collate statistical datasets from the Philippine Statistics
          Authority (PSA) on live births and poverty rates for each municipality
          in the Philippines and use tools from statistics and machine learning
          to come up with conclusions that paint the relationships between these
          parameters.
        </p>
      </div>
    </div>
  );
}
