import Link from "next/link";

export default async function NavBar({
  currentActive,
}: {
  currentActive: string;
}) {
  const isActive = (page: string) => {
    return page === currentActive
      ? "underline underline-offset-4 decoration-4 decoration-naples-yellow"
      : "text-black";
  };

  return (
    <nav className="bg-white opacity-90 sticky top-0 flex h-28 w-full flex-col justify-center items-center border-b border-english-violet">
      <div className="flex flex-row justify-center">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <div className="flex gap-1">
            <ul className="flex gap-4 flex-row justify-center items-center pl-5 text-lg">
              <li className={isActive("overview")}>
                <Link href="/overview">Overview</Link>
              </li>
              <li className={isActive("collection")}>
                {/* <Link href="/collection">Collection</Link> */}
                Collection
              </li>
              <li className={isActive("exploration")}>
                {/* <Link href="/exploration">Exploration</Link> */}
                Exploration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
