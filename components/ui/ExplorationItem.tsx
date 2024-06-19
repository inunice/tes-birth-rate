import "@/app/globals.css";
import Image from "next/image";

interface ButtonProps {
  title: string;
  description: string;
  imagePath?: string;
}

export default function Button({ title, description, imagePath }: ButtonProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-center sm:gap-10 gap-2 w-full flex-wrap sm:flex-nowrap">
        <p className="text-xl font-bold text-bittersweet sm:w-1/6 w-full leading-tight">
          {title}
        </p>
        <p className="sm:w-5/6 w-full leading-snug">{description}</p>
      </div>
      {imagePath ? (
        <div className="sm:w-3/4 mx-auto">
          <Image
            src={imagePath}
            layout="responsive"
            width={500}
            height={300}
            className="mt-7"
          />
        </div>
      ) : null}
    </div>
  );
}
