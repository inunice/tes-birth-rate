import "@/app/globals.css";

export default async function Overview() {
  return (
    <div className="mx-[250px] my-[200px] flex flex-col items-center justify-center gap-6">
      <p className="text-3xl">
        <span className="text-bittersweet font-bold">01</span> Overview
      </p>
      <p className="font-inter text-xl font-bold text-english-violet">
        Why are we doing this?
      </p>
      <p className="text-3xl font-bold">
        It is <span className="italic">expensive</span> to have a child in this
        economy.
      </p>
      <p className="text-center w-[620px]">
        Raising a child in the Philippines is estimated to cost around 300,000
        pesos per year (Isla, 2023), a considerable expense for families in a
        developing nation with increasingly high inflation rates and cost of
        living (Yu, 2024).
      </p>
      <p className="text-center w-[620px]">
        In 2023, however, CNA Insider reported that the Philippines has
        successfully lowered its birth rate. This begs the question, how much
        does the economic situation of the people in the Philippines impact
        their decision to have children?
      </p>

      <div className="flex gap-[100px] w-[1200px]">
        <div className="flex-1 flex flex-col gap-5">
          <p className="font-inter text-xl font-bold text-english-violet text-center">
            Problem
          </p>
          <p>
            Despite the significant financial burden of raising children in the
            Philippines, there is a lack of understanding regarding how the
            economic circumstances of individuals influence their decisions
            regarding family planning.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="font-inter text-xl font-bold text-english-violet text-center">
            Solution
          </p>
          <p>
            Using data science, we intend on analyzing economic indicators,
            geographical data, and maternal preferences to explore their
            combined impact on birth rates in the Philippines and promote family
            planning in highly impacted areas.
          </p>
        </div>
      </div>

      <div className="flex gap-[100px] w-[1200px]">
        <div className="flex-1 flex flex-col gap-5">
          <p className="font-inter text-xl font-bold text-english-violet text-center">
            So we'd like to figure out...
          </p>
          <p>
            Despite the significant financial burden of raising children in the
            Philippines, there is a lack of understanding regarding how the
            economic circumstances of individuals influence their decisions
            regarding family planning.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="font-inter text-xl font-bold text-english-violet text-center">
            And we hypothesize...
          </p>
          <p>
            Using data science, we intend on analyzing economic indicators,
            geographical data, and maternal preferences to explore their
            combined impact on birth rates in the Philippines and promote family
            planning in highly impacted areas.
          </p>
        </div>
      </div>
    </div>
  );
}
