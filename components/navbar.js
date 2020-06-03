import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <a title="OpenTech">
          Open<span>Tech</span>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/previous-events">
              <a title="Eventos anteriores">Eventos anteriores</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/opentech-pe">
              <img src="/assets/img/github.gif" alt="github" />
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}