import "@/app/globals.css";

export default async function SectionTitle({ title }: { title: string }) {
  const titleMult = (title + " ").repeat(15);
  return (
    <span className="w-full border-text my-20" data-content={titleMult}></span>
  );
}
