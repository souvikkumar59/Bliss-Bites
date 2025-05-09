
import React from 'react';
const Cart = ({ 
    cartItems, 
    removeFromCart, 
    setShowCart, 
    selectedTable,
    placeOrder
  }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
              <button 
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
  
            {selectedTable && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <p className="font-medium flex items-center">
                  <span className="mr-2">Table:</span> 
                  <span className="font-bold">{selectedTable.number}</span>
                  <span className="ml-2 text-sm bg-green-200 px-2 py-1 rounded-full">
                    Capacity: {selectedTable.capacity}
                  </span>
                </p>
              </div>
            )}
  
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
  
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
  
                <div className="mt-6">
                  <button 
                    onClick={placeOrder}
                    disabled={!selectedTable || cartItems.length === 0}
                    className={`w-full py-3 rounded-lg transition-colors
                      ${selectedTable && cartItems.length > 0 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                    `}
                  >
                    {selectedTable ? 'Place Order' : 'Select a Table First'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;