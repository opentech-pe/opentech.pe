import Link from "next/link";

export default function Custom404(){
    return (
      <section className="flex flex-col items-center justify-center h-screen px-3">
        <h1 className="flex text-9xl md:text-12xl">
          4
          <img className="h-40 mr-4 md:h-48" src="/assets/img/death.png" />
          4
        </h1>
        <span className="font-big mt-8 text-center md:mt-2">This page could not be found.</span>
        <Link href="/">
          <a className="font-small m-5 text-xl" title="Go Back Home">
            {"<--"} Go Back Home
          </a>
        </Link>
      </section>
    )
}