import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence, Variants } from 'framer-motion' // Added AnimatePresence for sidebar
import './Hero.css'
import ModalForm from './ModalForm'

const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const imageHover: Variants = {
    hover: {
      y: -10,
      transition: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
    },
  }

  return (
    <> 
    {/* NAV BAR */}
    <motion.div 
      className='nav-bar'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className='logo'>
          <img src='./OLUTA STANBIC 3.png' alt="Logo"/>
        </div>
        <div className='nav-links'>
          {['Home', 'Features', 'How it works'].map((link) => (
            <motion.a 
              key={link} 
              href='#' 
              whileHover={{ scale: 1.05, color: '#0052cc' }}
            >
              {link}
            </motion.a>
          ))}
        </div>
        <div className='nav-btn'>
          <a href="#" onClick={() => setShowModal(true)}>Request a demo</a>
        </div>
        
        <button className='mobile-menu-toggle' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
    </motion.div>

    {/* Mobile Sidebar with AnimatePresence */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          className='mobile-sidebar'
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className='sidebar-logo'>
            <img src='./OLUTA STANBIC 3.png' alt="Logo"/>
          </div>
          <div className='sidebar-links'>
            <a href='#' onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href='#' onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href='#' onClick={() => setMobileMenuOpen(false)}>How it works</a>
          </div>
          <button className='sidebar-btn' onClick={() => { setShowModal(true); setMobileMenuOpen(false); }}>Request a demo</button>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Modal: Request a demo */}
    <AnimatePresence>
      {showModal && <ModalForm onClose={() => setShowModal(false)} />}
    </AnimatePresence>

    {/* Hero Container */}
    <div className='hero-container'>
      {/* Left side */}
      <motion.div 
        className='left-side'
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 variants={fadeInUp}>Banking Infrastructure for Africa</motion.h4>
        <motion.h1 variants={fadeInUp}>
          Unlock <span>Commerce.</span> Enable <span>Growth</span>
        </motion.h1>
        <motion.p variants={fadeInUp}>
          Oluta is the embedded commerce and financial infrastructure that transforms African banks into merchant powerhouses, enabling lending, payments, and commerce at scale.
        </motion.p>
        
        <motion.div className='left-buttons' variants={fadeInUp}>
          <motion.button 
            className='btn-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Partner with us
          </motion.button>
          <motion.button 
            className='btn-2'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowModal(true)}
          >
            Request a demo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className='right-side'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.img
          src='./Group 1000008489.png'
          alt='Hero image'
          whileHover={{ y: -10 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </motion.div>
    </div>
    </>
  )
}

export default Hero