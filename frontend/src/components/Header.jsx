
import React from 'react';
import { useState } from 'react';

const Header = ({ 
  setActiveCategory, 
  cartItems, 
  setShowCart, 
  selectedTable,
  setShowTableSelection
}) => {
  const categories = ['Indian', 'Chinese', 'Italian'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Hotel Delight</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-200">About</a>
              <a href="#" className="hover:text-blue-200">Contact</a>
              <a href="#" className="hover:text-blue-200">Branches</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setShowTableSelection(true)}
                className={`px-3 py-1 rounded text-gray-800 flex items-center ${selectedTable ? 'bg-green-200' : 'bg-white'}`}
              >
                {selectedTable ? (
                  <>
                    <span className="mr-2">Table: {selectedTable.number}</span>
                    <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  </>
                ) : (
                  'Select Table'
                )}
              </button>
            </div>
            
            <button 
              onClick={() => setShowCart(true)}
              className="relative p-2 rounded-full hover:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-blue-200">About</a>
              <a href="#" className="hover:text-blue-200">Contact</a>
              <a href="#" className="hover:text-blue-200">Branches</a>
            </nav>
          </div>
        )}

        {/* Category tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;