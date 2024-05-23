import Link from "next/link";

export default function NavBar() {
  // const isActive = (page) => {
  //   return page === currentActive
  //     ? "underline underline-offset-4 decoration-4 decoration-naples-yellow"
  //     : "text-black";
  // };

  const links = [
    "top",
    "overview",
    "collection",
    "exploration",
    "modeling",
    "results",
    "conclusion",
    "team",
  ];

  return (
    <nav className="bg-white opacity-90 sticky top-0 flex h-24 w-full flex-col justify-center items-center border-b border-teal">
      <div className="flex flex-row justify-center">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <div className="flex gap-1">
            <ul className="flex gap-5 flex-row justify-center items-center pl-5 text-lg font-urbanist">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link}`}
                    className="hover:text-bittersweet transition-colors duration-200 ease-in-out"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
