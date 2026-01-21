// app/components/ModalForm.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModalForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Demo request sent successfully!');
    onClose(); 
  };

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-[100] p-4 bg-black/50 backdrop-blur-md cursor-pointer overflow-y-auto" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative cursor-default my-auto max-h-[95vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-2 rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-xl sm:text-2xl text-black font-bold text-center mb-6 pr-8">Request a Demo</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-[10px] sm:text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm transition-all bg-white text-black"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-[10px] sm:text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm transition-all bg-white text-black"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-[10px] sm:text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm transition-all bg-white text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] sm:text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm transition-all bg-white text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dob" className="block text-[10px] sm:text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="DD/MM/YYYY"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm transition-all bg-white text-black placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 sm:py-3 px-4 rounded-xl sm:rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer shadow-md active:scale-[0.98]"
            >
              Submit Request
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-4 sm:py-3 px-4 text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl sm:rounded-lg transition-all duration-200 cursor-pointer text-center"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ModalForm;