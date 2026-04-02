import React, { useContext, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FiHome, FiList, FiSearch, FiShield, FiDownload, FiGlobe } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';
import Header from './Header';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import api from '../../api/axiosConfig';
import { toast } from 'react-toastify';

const MainLayout = () => {
  const { user } = useContext(AuthContext);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const { data } = await api.get('/listings/my-listings');
      const listings = data.data || [];
      
      const doc = new jsPDF();
      
      doc.setFontSize(20);
      doc.setTextColor(11, 43, 86);
      doc.text("SLIIT Nest - Boarding Owner Report", 14, 22);
      
      doc.setFontSize(12);
      doc.setTextColor(100);
      doc.text(`Owner Name: ${user.firstName} ${user.lastName}`, 14, 32);
      doc.text(`Email: ${user.email}`, 14, 38);
      doc.text(`Total Active Listings: ${listings.length}`, 14, 44);
      doc.text(`Report Generated On: ${new Date().toLocaleDateString()}`, 14, 50);

      if (listings.length > 0) {
        const tableColumn = ["Title", "Type", "Capacity", "Rent (Rs)", "Status"];
        const tableRows = [];

        listings.forEach(listing => {
          const listingData = [
            listing.title,
            listing.accommodationType,
            `${listing.capacity} People`,
            listing.monthlyRent,
            listing.status || listing.availabilityStatus
          ];
          tableRows.push(listingData);
        });

        doc.autoTable({
          startY: 60,
          head: [tableColumn],
          body: tableRows,
          theme: 'striped',
          headStyles: { fillColor: [11, 43, 86] }
        });
      }

      doc.save(`SLIIT_Nest_Owner_Report_${user.firstName}_${user.lastName}.pdf`);
      toast.success("Report Generated Successfully");
    } catch (error) {
       console.error("Error generating report:", error);
       toast.error("Failed to generate report");
    } finally {
      setIsGenerating(false);
    }
  };

  const renderNavLinks = () => {
    switch (user?.role) {
      case 'Owner':
        return (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-50`
              }
            >
              <FiGlobe /> Home
            </NavLink>
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
            
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-700 transition"
              >
                <FiDownload /> {isGenerating ? 'Generating...' : 'Generate Report'}
              </button>
            </div>
          </>
        );
      case 'Admin':
        return (
          <>
            <NavLink
              to="/"
              className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
            >
              <FiGlobe /> Home
            </NavLink>
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
              to="/"
              className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
            >
              <FiGlobe /> Home
            </NavLink>
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
          <img src="/logo.png" alt="SLIIT Nest" className="w-8 h-8 object-contain" fallback="M" onError={(e) => e.target.style.display='none'} />
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
