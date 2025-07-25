import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-white">
      <Link href="/" className="text-4xl font-semibold">
        CS391 Weather App
      </Link>
    </header>
  );
}
