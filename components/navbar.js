import Link from "next/link";

export default function Navbar() {
  return (
    <header className="font-big py-3 px-2 md:py-8">
      <nav className="flex justify-between items-center mx-auto">
        <ul className="mr-3 text-2xl md:text-3xl">
          <li>
            <Link href="/">
              <a title="OpenTech">
                <span className="hidden md:block">
                  Open<span className="text-blue-500">Tech</span>
                </span>
                <span className="ml-4 block md:hidden">
                  O<span className="text-blue-500">T</span>
                </span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center overflow-auto text-xs">
          <li className="text-center w-40 mr-6 md:m-0">
            <Link href="/previous-events">
              <a title="Eventos anteriores">Eventos anteriores</a>
            </Link>
          </li>
          <li className="flex justify-center w-40">
            <a href="https://github.com/opentech-pe" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <img src="/assets/img/github.gif" alt="github" className="mr-2 h-8 w-8"/>
              <span>Github</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}