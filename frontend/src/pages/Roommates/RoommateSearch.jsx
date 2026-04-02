import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import api from '../../api/axiosConfig';
import { FiHome, FiSearch, FiFilter, FiMapPin, FiDollarSign, FiUser } from 'react-icons/fi';

const RoommateSearch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters state
  const [filters, setFilters] = useState({
    gender: '',
    minBudget: '',
    maxBudget: '',
    location: '',
    nonSmoker: '',
    studyPreference: ''
  });

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      Object.keys(filters).forEach(key => {
        if (filters[key]) params.append(key, filters[key]);
      });
      const { data } = await api.get(`/roommates?${params.toString()}`);
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">
      
      {/* 1. Replicated Exact Navbar */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="SLIIT Nest Logo" className="w-10 h-10 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-[#0b2b56] leading-none">SLIIT Nest</h1>
            <p className="text-[10px] text-gray-400">Student Accommodation</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-[#0b2b56]">Home</Link>
          <Link to="/search" className="hover:text-[#0b2b56]">Find Boardings</Link>
          <Link to="/roommates" className="text-gray-900 font-bold border-b-2 border-[#0b2b56] pb-1">Find Roommates</Link>
          <Link to="#" className="hover:text-[#0b2b56]">About</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-5 py-2 text-sm font-medium border border-[#0b2b56] text-[#0b2b56] rounded-lg hover:bg-gray-50 transition">Login</Link>
          <Link to="/register" className="px-5 py-2 text-sm font-medium bg-[#0b2b56] text-white rounded-lg hover:bg-[#081f40] transition shadow-md">Sign Up</Link>
        </div>
      </nav>

      {/* 2. Sleek Hero Header */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        className="bg-[#0b2b56] text-white py-16 px-6 shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b56]/90 to-[#081f40] z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Find Your Perfect Roommate</h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 font-light">
              Connect with fellow SLIIT students based on lifestyle, budget, and habits. Your next great rental journey starts here.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/roommates/add" 
                  className="inline-flex items-center justify-center bg-white text-[#0b2b56] font-bold px-8 py-3.5 rounded-lg shadow-xl border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
                >
                  Post Your Profile
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/search" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-teal-400 text-teal-400 font-bold px-8 py-3.5 rounded-lg shadow-lg hover:bg-teal-400 hover:text-[#0b2b56] transition-all duration-300"
                >
                  Find Boardings
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/4"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <FiFilter className="text-[#0b2b56]" size={20} />
              <h2 className="text-xl font-bold text-[#1f2937]">Filters</h2>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Gender', name: 'gender', type: 'select', options: ['Male', 'Female'] },
                { label: 'Max Budget (LKR)', name: 'maxBudget', type: 'number', placeholder: 'e.g. 15000' },
                { label: 'Location', name: 'location', type: 'text', placeholder: 'e.g. Malabe, Kaduwela' },
                { label: 'Study Habits', name: 'studyPreference', type: 'select', options: ['Quiet', 'Group', 'Flexible'] }
              ].map((field, idx) => (
                <motion.div 
                  key={field.name}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (idx * 0.1) }}
                >
                  <label className="block text-sm font-semibold text-[#1f2937] mb-2">{field.label}</label>
                  {field.type === 'select' ? (
                    <select 
                      name={field.name} value={filters[field.name]} onChange={handleFilterChange}
                      className="w-full bg-[#f8fafc] text-[#1f2937] text-sm py-3 px-4 rounded-xl border border-gray-100 shadow-inner focus:ring-2 focus:ring-[#0b2b56] outline-none transition"
                    >
                      <option value="">Any</option>
                      {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input 
                      type={field.type} name={field.name} value={filters[field.name]} onChange={handleFilterChange} placeholder={field.placeholder}
                      className="w-full bg-[#f8fafc] text-[#1f2937] text-sm py-3 px-4 rounded-xl border border-gray-100 shadow-inner focus:ring-2 focus:ring-[#0b2b56] outline-none transition"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <label className="flex items-center gap-3 text-sm font-semibold text-[#1f2937] cursor-pointer p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                  <input 
                    type="checkbox" name="nonSmoker" value="true" checked={filters.nonSmoker === 'true'}
                    onChange={(e) => setFilters(prev => ({ ...prev, nonSmoker: e.target.checked ? 'true' : '' }))}
                    className="w-5 h-5 text-[#0b2b56] focus:ring-[#0b2b56] rounded border-gray-300"
                  />
                  Non-Smoker Preferred
                </label>
              </motion.div>
            </div>
            
            <motion.button 
               whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => setFilters({ gender: '', minBudget: '', maxBudget: '', location: '', nonSmoker: '', studyPreference: '' })}
              className="w-full mt-8 py-3 text-sm font-bold bg-[#f8fafc] shadow-sm rounded-xl text-gray-500 hover:text-[#0b2b56] border border-gray-100 hover:border-gray-300 transition"
            >
              Reset Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Results Stream */}
        <div className="w-full md:w-3/4">
          <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1f2937]">Matched Roommates</h2>
            <div className="text-sm font-medium bg-[#0b2b56]/10 text-[#0b2b56] px-3 py-1 rounded-full">{posts.length} Result{posts.length !== 1 && 's'}</div>
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded w-full mt-6"></div>
                  </div>
                ))}
              </motion.div>
            ) : posts.length > 0 ? (
              <motion.div key="results" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, i) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f2937] mb-1">{post.user?.firstName ? `${post.user.firstName} ${post.user.lastName}` : 'Anonymous'}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center gap-1 text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            <FiMapPin size={14} /> {post.location}
                          </span>
                        </div>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b2b56] to-indigo-800 text-white flex items-center justify-center text-xl font-bold shadow-md shrink-0">
                        {post.user?.firstName ? post.user.firstName.charAt(0).toUpperCase() : 'U'}
                      </div>
                    </div>

                    <p className="text-sm text-[#6b7280] line-clamp-3 mb-6 bg-gray-50/50 p-3 rounded-xl border border-gray-50 min-h-[70px]">
                      "{post.bio}"
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-[#1f2937] font-medium">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0b2b56]"><FiDollarSign /></div>
                        <span>Up to LKR {post.budgetRange.max}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#1f2937] font-medium">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600"><FiMapPin /></div>
                        <span>{post.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#1f2937] font-medium">
                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><FiUser /></div>
                        <span>Looking for: {post.genderPreference}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-5 border-t border-gray-100">
                      <Link 
                        to={`/roommates/${post._id}`}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-[#0b2b56]/5 hover:bg-[#0b2b56] text-[#0b2b56] hover:text-white font-bold rounded-xl transition-all duration-300"
                      >
                        View Full Profile
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                  className="w-24 h-24 bg-[#0b2b56]/5 text-[#0b2b56] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <FiSearch size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#1f2937] mb-3">No profiles matched your criteria</h3>
                <p className="text-[#6b7280]">Try clearing some filters or exploring different options.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RoommateSearch;
