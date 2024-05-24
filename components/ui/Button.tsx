import "@/app/globals.css";

interface ButtonProps {
  name: string;
  link: string;
  className?: string;
}

export default function Button({ name, link, className = "" }: ButtonProps) {
  return (
    <a href={link} className={`btn btn-generic self-start ${className}`}>
      {name}
    </a>
  );
}
