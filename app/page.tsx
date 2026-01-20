// app/page.tsx
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features'; 
import Path from './components/Path';
import Opportunity from './components/Opportunity';
import Transform from './components/Transform';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Path />
      <Opportunity />
      <Transform />
      <Footer />
    </main>
  );
}