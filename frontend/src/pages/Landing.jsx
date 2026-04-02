import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiStar, FiShield, FiUsers, FiFilter, FiMessageCircle, FiSearch } from 'react-icons/fi';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* 1. Navbar */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          {/* Logo icon */}
          <div className="w-8 h-8 bg-[#0b2b56] text-white flex items-center justify-center rounded-md">
            <FiHome size={18} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#0b2b56] leading-none">SLIIT Nest</h1>
            <p className="text-[10px] text-gray-400">Student Accommodation</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="text-gray-900">Home</Link>
          <Link to="/search" className="hover:text-[#0b2b56]">Find Boardings</Link>
          <Link to="#" className="hover:text-[#0b2b56]">Find Roommates</Link>
          <Link to="#" className="hover:text-[#0b2b56]">About</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-5 py-2 text-sm font-medium border border-[#0b2b56] text-[#0b2b56] rounded-lg hover:bg-gray-50 transition">Login</Link>
          <Link to="/register" className="px-5 py-2 text-sm font-medium bg-[#0b2b56] text-white rounded-lg hover:bg-[#081f40] transition shadow-md">Sign Up</Link>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 z-0 bg-[#0b2b56]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b2b56]/90 to-transparent"></div>
        
        <div className="z-10 max-w-4xl flex flex-col items-center mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Find Your Perfect Boarding<br/>Near SLIIT – Fast, Safe &<br/>Trusted
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
            Exclusive platform for SLIIT students – peer reviews, roommate matching, and verified listings near Malabe campus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/search" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0b2b56] text-white rounded-lg font-medium text-lg hover:bg-[#081f40] transition border border-[#0b2b56]">
              <FiSearch size={20} />
              Search Boardings Now
            </Link>
            <Link to="#" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition">
              <FiUsers size={20} />
              Find a Roommate
            </Link>
          </div>

          {/* Badges */}
          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-12 text-sm text-white/90">
            <div className="flex items-center gap-2"><FiShield className="text-[#00d084]"/> SLIIT Students Only</div>
            <span className="text-white/40 hidden sm:block">•</span>
            <div className="flex items-center gap-2"><FiStar className="text-[#00d084]"/> Peer Reviews</div>
            <span className="text-white/40 hidden sm:block">•</span>
            <div className="flex items-center gap-2"><FiMessageCircle className="text-[#00d084]"/> Verified Listings</div>
          </div>
        </div>
      </section>

      {/* 3. Problem / Solution Section */}
      <section className="py-24 px-6 md:px-16 container mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Problem */}
          <div className="pr-10">
            <span className="inline-block px-3 py-1 bg-red-50 text-red-500 rounded-full text-xs font-semibold mb-6">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2b56] mb-6 leading-tight">
              Struggling with scattered Facebook groups, fake listings, and bad roommate matches?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Finding accommodation near SLIIT shouldn't be this complicated. Students waste hours searching through unreliable sources.
            </p>
          </div>
          
          {/* Solution */}
          <div>
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold mb-6">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2b56] mb-6">
              SLIIT Nest solves it
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              Advanced filters, real student reviews, roommate matching, and easy WhatsApp contact - all in one trusted platform.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-md transition">
                <FiHome className="text-teal-500 text-2xl mx-auto mb-3" />
                <h3 className="text-xl font-black text-[#0b2b56]">100+</h3>
                <p className="text-xs text-gray-500 font-medium">Listings</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-md transition">
                <FiStar className="text-teal-500 text-2xl mx-auto mb-3" />
                <h3 className="text-xl font-black text-[#0b2b56]">4.5+</h3>
                <p className="text-xs text-gray-500 font-medium">Average Rating</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-md transition">
                <FiShield className="text-teal-500 text-2xl mx-auto mb-3" />
                <h3 className="text-xl font-black text-[#0b2b56]">SLIIT</h3>
                <p className="text-xs text-gray-500 font-medium">Exclusive</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-md transition">
                <FiUsers className="text-teal-500 text-2xl mx-auto mb-3" />
                <h3 className="text-xl font-black text-[#0b2b56]">500+</h3>
                <p className="text-xs text-gray-500 font-medium">Active Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2b56] mb-4">Everything You Need in One Place</h2>
            <p className="text-gray-500 text-lg">Built specifically for SLIIT students, by SLIIT students</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
               <div className="w-12 h-12 bg-gray-100 text-[#0b2b56] rounded-xl flex items-center justify-center mb-6">
                  <FiFilter size={20} />
               </div>
               <h3 className="text-xl font-bold text-[#0b2b56] mb-3">Advanced Search & Filters</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Find exactly what you need with filters for location near SLIIT, price range, accommodation type (single/shared/hall), and facilities (WiFi, meals, security).
               </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
               <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <FiStar size={20} />
               </div>
               <h3 className="text-xl font-bold text-[#0b2b56] mb-3">Peer Reviews & Ratings</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Only verified SLIIT students can post and read reviews. Get honest feedback from fellow students who've actually lived there.
               </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
               <div className="w-12 h-12 bg-[#0b2b56]/10 text-[#0b2b56] rounded-xl flex items-center justify-center mb-6">
                  <FiUsers size={20} />
               </div>
               <h3 className="text-xl font-bold text-[#0b2b56] mb-3">Roommate Matching</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Create your profile and connect with compatible roommates. Filter by gender, budget, lifestyle habits, and connect instantly via WhatsApp.
               </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
               <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <FiMessageCircle size={20} />
               </div>
               <h3 className="text-xl font-bold text-[#0b2b56] mb-3">Easy & Safe Contact</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Direct WhatsApp integration with light admin moderation. Connect with landlords and roommates without sharing personal info too early.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="py-24 px-6 container mx-auto bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2b56] mb-4">How It Works</h2>
        <p className="text-gray-500 text-lg mb-20">Get started in just 4 simple steps</p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-20 max-w-5xl mx-auto relative">
          
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-5xl font-black text-teal-100 mb-6 font-mono">01</h1>
            <h3 className="text-lg font-bold text-[#0b2b56] mb-3">Register & Verify</h3>
            <p className="text-sm text-gray-500 px-4 leading-relaxed">Sign up with your SLIIT email address and verify your student status</p>
          </div>
          
          <div className="hidden md:block w-16 border-t-2 border-gray-100 mt-6 relative"></div>
          
          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-5xl font-black text-teal-100 mb-6 font-mono">02</h1>
            <h3 className="text-lg font-bold text-[#0b2b56] mb-3">Search & Filter</h3>
            <p className="text-sm text-gray-500 px-4 leading-relaxed">Browse boardings or roommates using our advanced filters</p>
          </div>
          
          <div className="hidden md:block w-16 border-t-2 border-gray-100 mt-6 relative"></div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-5xl font-black text-teal-100 mb-6 font-mono">03</h1>
            <h3 className="text-lg font-bold text-[#0b2b56] mb-3">Read Reviews</h3>
            <p className="text-sm text-gray-500 px-4 leading-relaxed">Check real peer reviews and preview all the details you need</p>
          </div>
          
          <div className="hidden md:block w-16 border-t-2 border-gray-100 mt-6 relative"></div>

          {/* Step 4 */}
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-5xl font-black text-teal-100 mb-6 font-mono">04</h1>
            <h3 className="text-lg font-bold text-[#0b2b56] mb-3">Connect & Move In</h3>
            <p className="text-sm text-gray-500 px-4 leading-relaxed">Contact directly via WhatsApp and secure your new home!</p>
          </div>
        </div>

        <Link to="/register" className="inline-flex items-center justify-center px-10 py-3.5 bg-[#0b2b56] text-white rounded-lg font-bold hover:bg-[#081f40] transition shadow-md">
          Get Started Now
        </Link>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#0b2b56] text-white pt-16 pb-8 px-6 md:px-16 mt-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
           {/* Branding */}
           <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-md border border-[#00d084] flex items-center justify-center">
                  <FiHome size={16} className="text-[#00d084]" />
                </div>
                <h1 className="text-2xl font-bold text-white">SLIIT Nest</h1>
              </div>
              <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
                Your Home Away from Campus – Find Safe Boarding & Compatible Roommates Near SLIIT
              </p>
           </div>

           {/* Quick Links */}
           <div>
             <h3 className="text-sm font-bold mb-6 text-white">Quick Links</h3>
             <ul className="space-y-4 text-xs font-medium text-gray-300">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="#" className="hover:text-white transition">About</Link></li>
                <li><Link to="#" className="hover:text-white transition">Contact</Link></li>
                <li><Link to="#" className="hover:text-white transition">Privacy Policy</Link></li>
             </ul>
           </div>

           {/* Connect With Us */}
           <div>
             <h3 className="text-sm font-bold mb-6 text-white">Connect With Us</h3>
             <div className="flex gap-3">
               <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.05 10.05 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
               </a>
             </div>
           </div>
        </div>

        <div className="text-center text-[11px] text-gray-400">
          © 2025 SLIIT Nest – A Year 3 ITPM Project
        </div>
      </footer>
    </div>
  );
};

export default Landing;
