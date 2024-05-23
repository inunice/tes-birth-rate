import "@/app/globals.css";

import SectionTitle from "@/components/ui/SectionTitle";

export default async function Team() {
  return (
    <div className="my-[200px] flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Team" />
      <div className="flex w-[80%] justify-center gap-5">
        <div className="border p-10 rounded-lg bg-teal w-1/3">
          <h2 className="text-xl font-bold font-urbanist">Ayen Manguan</h2>
          <p className="mt-3 text-md">
            Henlo, I’m Ayen, a third year computer science student from the
            University of the Philippines Diliman. My passions lie in
            programming, designing, and storytelling, manifesting in full-stack
            web development. I gain satisfaction in making things work and
            seeing others benefit from these innovations.
          </p>
          <p className="mt-3">
            Away from the keyboard, I enjoy consuming all sorts of media,
            jumping from one obsession to the next. I also like cats, fried
            eggs, and puzzle games (unrelated on purpose).
          </p>
          <div>
            <div className="flex flex-row gap-2 items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-4 h-4"
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>
              <span>ammanguan@up.edu.ph</span>
            </div>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-bittersweet w-1/3">
          <h2 className="text-xl font-bold font-urbanist">Elijah Mejilla</h2>
          <p className="mt-2">This is the second card.</p>
        </div>
        <div className="border p-8 rounded-lg bg-naples-yellow  w-1/3">
          <h2 className="text-xl font-bold font-urbanist">Jose Tomanan</h2>
          <p className="mt-3 text-md">
            Heya! I'm Jose, a second year Computer Science student from UP Diliman. I am interested in project management and software development.
          </p>
          <p className="mt-3">
            I spend most of my time away from the keyboard, consuming non-tech related passions such as fashion, fitness, and basketball. Though more recently, I have been taking active interest in data science, figuring things out on my own and visualizing results.
          </p>
          <p className="mt-3">
            I look forward to learning more about tech as I progress in my stint in this course.
          </p>
          <div>
            <div className="flex flex-row gap-2 items-center mt-6">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4"
                >
                  <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                  <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                </svg>
                {/* COPY PASTED FROM AYEN; NOT SURE WHATS DIFFERENT */}
                <span>jdtomanan@up.edu.ph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
