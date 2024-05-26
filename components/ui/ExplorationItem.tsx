import "@/app/globals.css";

interface ButtonProps {
  title: string;
  description: string;
}

export default function Button({ title, description }: ButtonProps) {
  return (
    <div className="flex justify-center gap-10 w-full">
      <p className="text-xl font-bold text-bittersweet w-1/6">{title}</p>
      <p className="w-5/6">{description}</p>
    </div>
  );
}
