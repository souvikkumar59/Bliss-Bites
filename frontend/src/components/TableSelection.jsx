
import React from 'react';
const TableSelection = ({ tables, onSelectTable, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Select a Table</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
  
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tables.map(table => (
                <button
                  key={table.id}
                  onClick={() => onSelectTable(table)}
                  disabled={!table.available}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center transition-all
                    ${table.available 
                      ? 'border-green-500 hover:bg-green-50 hover:border-green-600' 
                      : 'border-red-300 bg-gray-100 cursor-not-allowed'}
                  `}
                >
                  <span className="text-xl font-bold">{table.number}</span>
                  <span className="text-sm">Capacity: {table.capacity}</span>
                  <span className={`text-xs mt-1 px-2 py-1 rounded-full 
                    ${table.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {table.available ? 'Available' : 'Occupied'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TableSelection;