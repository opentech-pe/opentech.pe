import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-blue-500 font-big py-3 px-8 md:py-8">
      <nav className="flex justify-between items-center mx-auto">
        <ul className="flex mr-3 text-2xl md:text-3xl">
          <li>
            <Link href="/">
              <a title="OpenTech">
                <span className="hidden md:block">OpenTech</span>
                <span className="block md:hidden">OT</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center overflow-auto text-xs">
          <li className="text-center w-40 mr-6 md:m-0">
            <Link href="/mission-and-vision">
              <a title="Misión y Visión">Misión y Visión</a>
            </Link>
          </li>
          <li className="text-center w-40 mr-6 md:m-0">
            <a
              title="Dar una charla"
              href="https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jimmyloloy98%2C+juancx21&labels=cfp&template=propuesta-de-charla.md&title=T%C3%ADtulo+de+tu+charla"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dar una charla
            </a>
          </li>
          <li className="text-center w-40 mr-6 md:m-0">
            <Link href="/previous-events">
              <a title="Eventos anteriores">Eventos anteriores</a>
            </Link>
          </li>
          <li className="flex text-center w-40 mr-6 md:m-0">
            <Link href="/code-of-conduct">
              <a title="Codigo de conducta">Código de conducta</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
