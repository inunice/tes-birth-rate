import "@/app/globals.css";

interface ButtonProps {
  name: string;
  link: string;
}

export default async function Button({ name, link }: ButtonProps) {
  return (
    <a href={link} className="btn btn-generic">
      {name}
    </a>
  );
}
