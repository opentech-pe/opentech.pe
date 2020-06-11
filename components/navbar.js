import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center font-big py-8">
      <Link href="/">
        <a title="OpenTech" className="text-3xl">
          Open<span className="text-blue-500">Tech</span>
        </a>
      </Link>
      <nav>
        <ul className="flex items-center">
          <li className="w-48 text-center mr-6">
            <Link href="/previous-events">
              <a title="Eventos anteriores">Eventos anteriores</a>
            </Link>
          </li>
          <li className="flex justify-center w-48">
            <a href="https://github.com/opentech-pe" className="flex items-center">
              <img src="/assets/img/github.gif" alt="github" className="mr-2 h-8 w-8"/>
              <span>Github</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}