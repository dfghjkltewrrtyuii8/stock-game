const FORM_URL = 'https://example.com/form';
const LEADERBOARD_EMBED_URL = '';
const SOCIAL_URL = '';

const samplePlayers = [
  { rank: 1, name: 'Alex', value: '$12,500', change: '+5.0%', picks: 'AAPL, MSFT' },
  { rank: 2, name: 'Bri', value: '$11,900', change: '+2.3%', picks: 'TSLA, NVDA' },
  { rank: 3, name: 'Cara', value: '$10,800', change: '-0.5%', picks: 'AMZN, GOOG' },
  { rank: 4, name: 'Dylan', value: '$10,200', change: '+1.0%', picks: 'META, NFLX' },
  { rank: 5, name: 'Eli', value: '$9,950', change: '-1.2%', picks: 'AMD, INTC' },
  { rank: 6, name: 'Finn', value: '$9,500', change: '-3.0%', picks: 'SONY, IBM' },
];

const tips = [
  'Diversify your picks to reduce risk.',
  'Research companies before investing.',
  'Watch market news weekly.',
  'Set goals and know when to sell.',
  'Start small and learn over time.',
];

const faqs = [
  { q: 'Is this real money?', a: 'No, it\'s a virtual game for learning.' },
  { q: 'How are prices tracked?', a: 'We use weekly closing prices from public APIs.' },
  { q: 'Can I join late?', a: 'Yes, but you\'ll start with the same $10k as everyone.' },
];

function Stats() {
  const StatCard = ({ label, value }) => (
    <div className="bg-gray-800 rounded-lg p-4 text-center">
      <div className="text-emerald-400 text-xl font-bold">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
  return (
    <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-8" id="stats">
      <StatCard label="Season Length" value="12 Weeks" />
      <StatCard label="Starting Cash" value="$10k" />
      <StatCard label="Max Trades / Week" value="5" />
    </div>
  );
}

function Hero() {
  const motion = window.framerMotion ? window.framerMotion.motion : {div: (props) => <div {...props} />};
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4" id="hero">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">TeenStock</h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto">Start with $10,000 virtual cash, pick real stocks, and climb the leaderboard.</p>
        <a href={FORM_URL} target="_blank" className="mt-8 inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg">Join the Game</a>
      </motion.div>
      <Stats />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Join', desc: 'Sign up with the form.' },
    { title: 'Pick Stocks', desc: 'Choose up to five trades per week.' },
    { title: 'Compete', desc: 'Track your portfolio and climb the ranks.' },
  ];
  return (
    <section id="how" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-emerald-400 text-2xl font-bold mb-2">{s.title}</div>
            <p className="text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Rules() {
  const rules = [
    'Everyone starts with $10,000 virtual cash.',
    'Maximum five trades per week.',
    'Long positions only – no shorts or options.',
    'Weekly portfolio snapshots determine standings.',
    'Winner is the highest portfolio value at season end.',
  ];
  return (
    <section id="rules" className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Rules</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {rules.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </section>
  );
}

function DemoTable() {
  const [query, setQuery] = React.useState('');
  const filtered = samplePlayers.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.picks.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search player or ticker"
        className="mb-4 w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-gray-800">
              <th className="p-2">Rank</th>
              <th className="p-2">Player</th>
              <th className="p-2">Portfolio Value</th>
              <th className="p-2">Change %</th>
              <th className="p-2">Top Picks</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.rank} className="odd:bg-gray-900 even:bg-gray-800">
                <td className="p-2">{p.rank}</td>
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.value}</td>
                <td className="p-2">{p.change}</td>
                <td className="p-2">{p.picks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Leaderboard</h2>
      {LEADERBOARD_EMBED_URL
        ? <iframe src={LEADERBOARD_EMBED_URL} className="w-full h-96 border-0"></iframe>
        : <DemoTable />}
    </section>
  );
}

function Tips() {
  return (
    <section id="tips" className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Weekly Tips</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {tips.map((t, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300">{t}</div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400">
      <div>© 2025 TeenStock</div>
      {SOCIAL_URL && <a href={SOCIAL_URL} target="_blank" className="text-emerald-400">Follow us</a>}
    </footer>
  );
}

function App() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur border-b border-gray-800 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between">
          <span className="text-xl font-bold text-emerald-400">TeenStock</span>
          <div className="space-x-4 hidden sm:block">
            <a href="#how" className="hover:text-emerald-400">How</a>
            <a href="#rules" className="hover:text-emerald-400">Rules</a>
            <a href="#leaderboard" className="hover:text-emerald-400">Leaderboard</a>
            <a href="#faq" className="hover:text-emerald-400">FAQ</a>
          </div>
        </div>
      </nav>
      <Hero />
      <HowItWorks />
      <Rules />
      <Leaderboard />
      <Tips />
      <FAQ />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
