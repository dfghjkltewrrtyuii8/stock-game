import Layout from '@/components/Layout';

export default function Rules() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Game Rules</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>Start with $10,000 virtual cash.</li>
        <li>Max 5 trades per week.</li>
        <li>Only long positions.</li>
        <li>Leaderboard updates weekly.</li>
      </ul>
    </Layout>
  );
}
