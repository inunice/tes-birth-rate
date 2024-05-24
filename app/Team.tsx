import "@/app/globals.css";
import SectionTitle from "@/components/ui/SectionTitle";
import MemberCard from "@/components/MemberCard";

export default async function Team() {
  return (
    <div className="mb-[200px] flex flex-col items-center justify-center gap-10">
      <SectionTitle title="Team" />
      <div className="flex flex-col sm:flex-row w-8/12 justify-center gap-5">
        <MemberCard
          imgSrc="/img/ayen.jpg"
          name="Ayen Manguan"
          color="teal"
          description={[
            "Henlo, I’m Ayen, a third year computer science student from the University of the Philippines Diliman. My passions lie in programming, designing, and storytelling, manifesting in full-stack web development. I gain satisfaction in making things work and seeing others benefit from these innovations.",
            "Away from the keyboard, I enjoy consuming all sorts of media, jumping from one obsession to the next. I also like cats, fried eggs, and puzzle games.",
          ]}
          email="ammanguan@up.edu.ph"
          githubLink="https://github.com/inunice"
          linkedinLink="https://www.linkedin.com/in/inunice"
          otherText="Portfolio"
          otherLink="https://inunice.vercel.app/"
        />

        <MemberCard
          imgSrc="/img/elijah.png"
          name="Elijah Mejilla"
          color="bittersweet"
          description={[
            "Hey, I’m Elijah—a second year Computer Science undergraduate. I’m passionate about CS at its core: from gates and semiconductors to algorithms and machine learning. I hope to leverage these interests into tangible results in either Data Science or Web Development.",
            "When I’m tired of writing monospaced text, I find myself writing poems and essays, dabbling in different instruments, going for runs or to the gym, and learning whatever language piques my interest.",
          ]}
          email="jgmejilla@up.edu.ph"
          githubLink="https://github.com/jgmejilla"
        />

        <MemberCard
          imgSrc="/img/jose.jpg"
          name="Jose Tomanan"
          color="naples-yellow"
          description={[
            "Heya! I’m Jose, a second year Computer Science student from UP Diliman. I am interested in project management and software development.",
            "I spend most of my time away from the keyboard, consuming non-tech related passions such as fashion, fitness, and basketball. Though more recently, I have been taking active interest in data science, figuring things out on my own and visualizing results.",
          ]}
          email="jdtomanan@up.edu.ph"
          githubLink="https://github.com/HoweZae"
          linkedinLink="https://www.linkedin.com/in/jedtomanan"
          otherText="Resume"
          otherLink="https://flowcv.com/resume/hsjhe4q16a"
        />
      </div>
    </div>
  );
}
