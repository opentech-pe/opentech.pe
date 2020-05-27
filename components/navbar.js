import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/">OpenTech</Link>
      <nav>
        <ul>
          <li>
            <Link href="/previous-events">Eventos anteriores</Link>
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
