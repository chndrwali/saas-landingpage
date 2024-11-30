import { Features } from '@/components/sections/features';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
