import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FiHome, FiList, FiSearch, FiShield } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';
import Header from './Header';

const MainLayout = () => {
  const { user } = useContext(AuthContext);

  const renderNavLinks = () => {
    switch (user?.role) {
      case 'Owner':
        return (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <FiHome /> Dashboard
            </NavLink>
            <NavLink
              to="/listings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <FiList /> My Listings
            </NavLink>
          </>
        );
      case 'Admin':
        return (
          <>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <FiShield /> Admin Dashboard
            </NavLink>
          </>
        );
      case 'Student':
      default:
        return (
          <>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <FiSearch /> Search Boardings
            </NavLink>
          </>
        );
    }
  };

  return (
    <div className="flex bg-gray-50 h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-20">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <img src="/logo.png" alt="SLIIT Nest" className="w-8 h-8 object-contain" />
          <h1 className="font-bold text-xl text-blue-600">SLIIT<span className="text-gray-800">Nest</span></h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {renderNavLinks()}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64 min-w-0">
        <Header />
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
