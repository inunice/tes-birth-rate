import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ExplorationHeader from "@/components/ui/ExplorationHeader";
import ExplorationItem from "@/components/ui/ExplorationItem";
import Image from "next/image";

export default async function Conclusion() {
  return (
    <div className="w-8/12 flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Conclusion" />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl font-urbanist leading-tight text-gray-600 italic">
          What does this entire project want to say? Where can we go from here?
        </p>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-center sm:gap-10 gap-2 w-full">
          <p className="text-xl font-bold text-bittersweet sm:w-1/6 leading-tight">
            On childbirth and family planning
          </p>
          <div className="sm:w-5/6 gap-3 flex flex-col">
            <p className="leading-snug">
              The process of childbirth and pregnancy can be distressing and
              uncertain, but it could lead to incredibly fulfilling and
              meaningful moments in the lives’ of parents. Its significance to
              our society cannot be understated; and this is something that
              should be reflected by the quality and accessibility of our
              healthcare.{" "}
            </p>

            <p className="leading-snug">
              Parents and individuals must be aware of the risks, consequences,
              and responsibilities regarding sex and safety in order to make
              informed decisions about family planning. Contraceptives such as
              condoms and pills must also be destigmatized and made affordable
              to the general public. People should only have children if they
              want to and if they are aware of what it entails.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row sm:justify-center sm:gap-10 gap-2 w-full">
          <p className="text-xl font-bold text-bittersweet sm:w-1/6 leading-tight">
            What needs to be done
          </p>
          <div className="sm:w-5/6 gap-3 flex flex-col">
            <p>
              Furthermore, relevant healthcare and medical information must be
              made accessible to those who need to consult about pregnancy and
              childbirth, especially towards economically poorer areas that have
              a larger frequency of births by non-medical professionals.
              Although some people may prefer these types of delivery for
              non-financial reasons, medical options must be made available to
              them regardless.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row sm:justify-center sm:gap-10 gap-2 w-full">
          <p className="text-xl font-bold text-bittersweet sm:w-1/6 leading-tight">
            Where to go from here
          </p>
          <div className="sm:w-5/6 gap-3 flex flex-col">
            <p>
              Further studies could incorporate more updated datasets,
              especially in outlier areas such as BARMM, or in more
              geographically specific areas such as barangays. Studying these
              locations outside of pure numerical data may lead to definitive
              and causal conclusions, outside of the conclusions that we
              provided which are significant, but purely correlational. That is
              to say, although we can suggest reasons for these results and
              correlations, these are not definitive until we study poverty and
              parenting from a multidimensional view.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row sm:justify-center sm:gap-10 gap-2 w-full">
          <p className="text-xl font-bold text-bittersweet sm:w-1/6 leading-tight">
            Finally...
          </p>
          <div className="sm:w-5/6 gap-3 flex flex-col">
            <p>
              Everyone deserves the right to have a child; however, children
              also deserve to be raised in homes where they feel secure and
              nurtured. The positive correlation between poverty incidence and
              birth rate could point to a lack of proper education on family
              planning, among other reasons; and since this correlation is
              consistent across different regions, then it is not a moral or
              individual failing—it is a systemic failing of our healthcare.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
