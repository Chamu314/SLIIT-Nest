import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FiUser, FiMail, FiShield, FiCheckCircle } from 'react-icons/fi';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="p-8 text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
      
      <div className="bg-white shadow rounded-2xl overflow-hidden border border-gray-100">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        <div className="px-8 flex flex-col md:flex-row gap-6 items-start pb-8">
          <div className="-mt-12">
            <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
              <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FiUser size={40} />
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  {user.fullName}
                  {user.role === 'Student' && user.isVerified && (
                    <span title="SLIIT Verified Student" className="text-blue-500">
                      <FiCheckCircle size={20} />
                    </span>
                  )}
                </h2>
                <p className="text-gray-500 flex items-center gap-2 mt-1">
                  <FiMail /> {user.email}
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <FiShield size={14} /> {user.role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form Section */}
      <div className="bg-white shadow rounded-2xl p-8 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 border-b pb-4 mb-6">Personal Information</h3>
        
        <form className="space-y-6 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              defaultValue={user.fullName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-xs text-red-500">(Cannot be changed)</span></label>
            <input 
              type="email" 
              value={user.email} 
              disabled
              className="w-full px-4 py-2 border border-gray-200 bg-gray-50 text-gray-500 rounded-lg" 
            />
          </div>

          <div className="pt-4">
            <button type="button" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Profile;
