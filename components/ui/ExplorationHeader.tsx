import "@/app/globals.css";

interface ButtonProps {
  title: string;
  description: string;
}

export default function Button({ title, description }: ButtonProps) {
  return (
    <div className="flex flex-row sm:gap-10 gap-3 items-start w-full mt-8 flex-wrap">
      <p className="text-3xl font-urbanist leading-tight sm:w-3/12 w-full">
        {title}
      </p>
      <p className="sm:w-9/12 w-full leading-snug">{description}</p>
    </div>
  );
}
