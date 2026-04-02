import React, { useState } from 'react';
import { FiGrid, FiUsers, FiClock, FiAlertCircle } from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('listings');

  // Dummy stats
  const stats = [
    { name: 'Total Listings', value: '143', icon: FiGrid, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Verified Students', value: '892', icon: FiUsers, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Pending Items', value: '12', icon: FiClock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'reviews':
        return (
          <div className="bg-white shadow rounded-lg border border-gray-100 p-6 text-center text-gray-500">
            No reported reviews at this time.
          </div>
        );
      case 'roommates':
        return (
          <div className="bg-white shadow rounded-lg border border-gray-100 p-6 text-center text-gray-500">
            No roommate posts require moderation.
          </div>
        );
      case 'listings':
      default:
        return (
          <div className="bg-white shadow rounded-lg border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Dummy Row for demonstration */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded object-cover"></div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Cozy Room near SLIIT</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kamal Perera</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Malabe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-4">Approve</button>
                    <button className="text-red-600 hover:text-red-900">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="pt-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['listings', 'reviews', 'roommates'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                Pending {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
