import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Overview() {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Collection" />
      <div className="flex flex-col sm:flex-row gap-20 items-start justify-center">
        <div className="flex flex-col gap-6 flex-1 mx-auto">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-urbanist leading-tight">
              For this project, we obtained and collected three datasets.
            </p>
            <p className="leading-tight">
              The exact data we need are live birth counts, poverty estimates,
              and total population!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-bittersweet">
              Collection Process
            </p>
            <p className="leading-tight">
              We collected the data through the official website of the
              Philippine Statistics Authority (PSA), which displays the latest
              publicly available data as of April 2024.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-bittersweet">Sample Size</p>
            <p>
              A total of <span className="underline">1634 municipalities</span>{" "}
              were recorded in the datasheet for all three datasets.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-bittersweet">
              Preparation for Processing
            </p>
            <p>
              PSA’s collated data is organized in a “report” form; that is,
              entries may contain summaries for the municipalities (by province,
              then by region). To prepare it for processing, we manually
              organized in proper rows and columns, ensuring that every row
              corresponds to one municipality in the Philippines.
            </p>
          </div>
          <Button
            className="ml-auto"
            name="Check out our complete dataset!"
            link="https://docs.google.com/spreadsheets/d/1j9uQo2hCOgayA5jhMOKJbQdUSRkZVAmo/edit#gid=1996489956"
          />
        </div>
        <div className="flex flex-col gap-3 flex-1 mx-auto">
          <p className="text-xl font-bold text-bittersweet">
            Datasets from PSA
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-md font-bold cursor-pointer">
                  Registered live births in the Philippines (2022)
                </p>

                <a
                  className="text-gray-500 text-sm"
                  href="https://psa.gov.ph/content/registered-live-births-philippines-2022"
                >
                  Source (Philippine Statistics Authority)
                </a>
              </div>
              <div className="mt-3 ml-3 flex flex-col gap-1 leading-tight text-sm">
                <p>Processed by PSA on July 31, 2023</p>
                <p>Released on January 5, 2024</p>{" "}
                <p>
                  This includes both timely and late registered births that
                  occurred from January 2022 to December 2022. Note that “-”
                  values are treated as 0s.
                </p>
                <p>
                  The important columns found in this dataset include birth
                  months per birth occurrence and attendant of birth per birth
                  occurrence. Data is available for each municipality.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-md font-bold cursor-pointer">
                  City and Municipal Level Poverty Estimates (2022)
                </p>
                <div className="flex flex-col gap-0">
                  <a
                    className="text-gray-500 text-sm"
                    href="https://psa.gov.ph/statistics/poverty/stat-tables/released/2021%20Full%20Year"
                  >
                    Source (Philippine Statistics Authority) - Highly Urbanized
                    Cities
                  </a>
                  <a
                    className="text-gray-500 text-sm"
                    href="https://www.psa.gov.ph/content/psa-releases-2021-city-and-municipal-level-poverty-estimates"
                  >
                    Source (Philippine Statistics Authority) - Municipalities
                  </a>
                </div>
              </div>
              <div className="mt-3 ml-3 flex flex-col gap-1 leading-tight text-sm">
                <p>Released on April 2, 2024</p>
                <p>
                  The dataset details the poverty incidence in each city and
                  municipality of the Philippines, and was processed through a
                  technique called Small Area Estimation (SAE).
                </p>
                <p>
                  The important column found in this dataset is the poverty
                  incidence for each municipality.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-md font-bold cursor-pointer">
                  Census of Population and Housing (2020)
                </p>
                <a
                  className="text-gray-500 text-sm"
                  href="https://psa.gov.ph/content/2020-census-population-and-housing-2020-cph-population-counts-declared-official-president"
                >
                  Source (Philippine Statistics Authority)
                </a>
              </div>
              <div className="mt-3 ml-3 flex flex-col gap-1 leading-tight text-sm">
                <p>Released on July 7, 2021</p>
                <p>
                  The dataset includes the census in each municipality in the
                  Philippines. The important column obtained from this dataset
                  is the total population for each entry, since total population
                  is needed to calculate the birth rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
