import Navbar from './Navbar';
import Header from './Header';
import React from 'react';
import CardView from './CardView';

const Template = ({ children }) => {
  return (
    <div className="flex h-screen flex-row-reverse">
      {/* Side Menu */}
      <div className="w-1/6">
        <Navbar />
      </div>
      {/* Content */}
      <div className="flex-1 relative overflow-y-auto">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <Header />
        </div>

        {/* Main Content */}
        <div className="absolute top-15 right-0 mr-2">
          <CardView />
        </div>

      </div>
    </div>
  );
};

export default Template;
