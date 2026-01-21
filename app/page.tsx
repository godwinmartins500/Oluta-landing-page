// app/page.tsx
'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Path from './components/Path';
import Opportunity from './components/Opportunity';
import Transform from './components/Transform';
import Footer from './components/Footer';
import ModalForm from './components/ModalForm';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <Hero openModal={openModal} />
      <Problem />
      <Solution openModal={openModal} />
      <Features />
      <Path openModal={openModal} />
      <Opportunity />
      <Transform openModal={openModal} />
      <Footer />
      <AnimatePresence>
        {isModalOpen && <ModalForm onClose={closeModal} />}
      </AnimatePresence>
    </main>
  );
}
