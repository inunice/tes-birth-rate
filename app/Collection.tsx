"use client";
import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Overview() {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Collection" />
      <div className="flex flex-row gap-20 items-center justify-center">
        <div className="flex flex-col gap-6 w-1/2 mx-auto">
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
              were recorded in the datasheet across the three datasets.
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
        <div className="flex flex-col gap-3 w-1/2 mx-auto">
          <p className="text-xl font-bold text-bittersweet">
            Datasets from PSA
          </p>
          <div>
            <p className="text-md font-bold cursor-pointer">
              Registered live births in the Philippines (2022)
            </p>

            <a
              className="text-gray-500"
              href="https://psa.gov.ph/content/registered-live-births-philippines-2022"
            >
              Source (Philippine Statistics Authority)
            </a>
            <p>
              Processed by PSA on July 31, 2023 Released on January 5, 2024 This
              includes both timely and late registered births that occurred from
              January 2022 to December 2022. Note that “-” values are treated as
              0s. The important columns found in this dataset include birth
              months per birth occurrence and attendant of birth per birth
              occurrence. Data is available for each municipality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
