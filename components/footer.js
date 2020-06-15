import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-blue-500 font-big py-3 px-8 md:py-8">
      <nav className="flex justify-between item-center mx-auto"> 
        <ul className="flex item-center mr-3 text-2xl md:text-3xl">
          <li>
            <Link href="/">
              <a title="OpenTech">OpenTech</a>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center overflow-auto text-xs">
          <li className="text-center w-40 mr-6 md:m-0">
            <Link href="/https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jhonfitzgerald%2C+paulotijero&labels=cfp&template=propuesta-de-charla.md&title=Título+de+tu+charla+.+.+." target="_blank" rel="noopener noreferrer">
              <a title="Dar una charla">
                Dar una charla
              </a>
            </Link>
          </li>
          <li className="text-center w-40 mr-6 md:m-0">
            <Link href="/previous-event">
              <a title="Eventos anteriores">
                Eventos anteriores
              </a>
            </Link>
          </li>
          <li className="flex text-center w-40 mr-6 md:m-0">
            <Link href="/code-of-conduct">
              <a title="Codigo de conducta">
                Código de conducta
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
