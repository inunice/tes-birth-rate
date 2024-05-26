import "@/app/globals.css";

interface ButtonProps {
  title: string;
  description: string;
}

export default function Button({ title, description }: ButtonProps) {
  return (
    <div className="flex flex-row gap-10 items-start w-full">
      <p className="text-3xl font-urbanist leading-tight w-3/12">{title}</p>
      <p className="w-9/12">{description}</p>
    </div>
  );
}
