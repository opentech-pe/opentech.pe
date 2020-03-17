import Link from "next/link";

export default function Index() {
  return (
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple-500 leading-normal">Index</h1>
      <ul className="text-gray-500">
        <li>
          <Link href="/code-of-conduct">
            <a>Code of conduct</a>
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
