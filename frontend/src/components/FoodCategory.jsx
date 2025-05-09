
import React from 'react';

const FoodCategory = ({ category, items, addToCart }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{category} Cuisine</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FoodCategory;