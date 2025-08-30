import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/play">Play</Link>
      <Link href="/leaderboard">Leaderboard</Link>
      <Link href="/rules">Rules</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
  );
}
