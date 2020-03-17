import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple-500 leading-normal">Code Of Conduct</h1>
      <ul className="text-gray-500">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/previous-events">
            <a>Previous Events</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
