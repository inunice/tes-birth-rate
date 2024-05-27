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
      <div className="flex flex-row justify-center gap-10 w-full">
        <p className="text-xl font-bold text-bittersweet w-1/6 leading-tight">
          {title}
        </p>
        <p className="w-5/6 leading-snug">{description}</p>
      </div>
      {imagePath ? (
        <div className="w-3/4 mx-auto">
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
