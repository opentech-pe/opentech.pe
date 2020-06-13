export default function Footer() {
  return (
    <footer className="bg-blue w-screen h-24 m-0 items-center">
      <div className="font-big text-white flex  items-center text-center">
        <h1>
          <a href="#">OpenTech</a>
        </h1>
        <nav className="overflow-autob h-full block justify-end"> 
          <ul className="flex text-base">
            <li className="flex-1">
              <a title="Dar una charla" href="/https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jhonfitzgerald%2C+paulotijero&labels=cfp&template=propuesta-de-charla.md&title=Título+de+tu+charla+.+.+." target="_blank" rel="noopener noreferrer">
                Dar una charla
              </a>
            </li>
            <li className="flex-1">
              <a title="Eventos anteriores" href="/previous-event">
                Eventos anteriores
              </a>
            </li>
            <li className="flex-1">
              <a title="Codigo de conducta" href="/code-of-conduct">
                Codigo de conducta
              </a>
            </li>
          </ul>
        </nav>
        </div>
    </footer>
  );
}

{/* Comments */}