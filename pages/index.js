import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <motion.h1
        className="text-3xl font-bold mb-4 text-brand-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        TeenStock Game
      </motion.h1>
      <p>Learn the stock market with virtual cash and compete with friends.</p>
    </Layout>
  );
}
