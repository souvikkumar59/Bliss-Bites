import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import FoodCategory from './components/FoodCategory';
import Cart from './components/Cart';
import TableSelection from './components/TableSelection';
//import About from './pages/About';

// Mock database of tables
const initialTables = [
  { id: 1, number: 'T1', capacity: 4, available: true },
  { id: 2, number: 'T2', capacity: 2, available: true },
  { id: 3, number: 'T3', capacity: 6, available: true },
  { id: 4, number: 'T4', capacity: 4, available: true },
  { id: 5, number: 'T5', capacity: 2, available: true },
  { id: 6, number: 'T6', capacity: 8, available: true },
];

const foodItems = {
  Indian: [
    { id: 1, name: 'Butter Chicken', price: 12.99, description: 'Tender chicken in rich tomato sauce' },
    { id: 2, name: 'Palak Paneer', price: 10.99, description: 'Spinach with cottage cheese' },
    { id: 3, name: 'Biryani', price: 11.99, description: 'Fragrant rice with spices and meat' },
  ],
  Chinese: [
    { id: 4, name: 'Fried Rice', price: 8.99, description: 'Stir-fried rice with vegetables' },
    { id: 5, name: 'Dumplings', price: 6.99, description: 'Steamed pork dumplings' },
    { id: 6, name: 'Kung Pao Chicken', price: 11.99, description: 'Spicy chicken with peanuts' },
  ],
  Italian: [
    { id: 7, name: 'Margherita Pizza', price: 12.99, description: 'Classic tomato and mozzarella' },
    { id: 8, name: 'Pasta Carbonara', price: 10.99, description: 'Creamy pasta with bacon' },
    { id: 9, name: 'Tiramisu', price: 6.99, description: 'Coffee-flavored dessert' },
  ],
};

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tables, setTables] = useState(initialTables);
  const [showTableSelection, setShowTableSelection] = useState(false);
  const [orders, setOrders] = useState([]);

  const [menuItems, setMenuItems] = useState([]); // ✅ Added line

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedTables = localStorage.getItem('restaurantTables');
    const savedOrders = localStorage.getItem('restaurantOrders');
    
    if (savedTables) setTables(JSON.parse(savedTables));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('restaurantTables', JSON.stringify(tables));
    localStorage.setItem('restaurantOrders', JSON.stringify(orders));
  }, [tables, orders]);
  
  // Fetch menu items from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(res => res.json())
      .then(data => setMenuItems(data))
      .catch(err => console.error('Failed to fetch menu:', err));
  }, []);

  const addToCart = (item) => {
    if (!selectedTable) {
      setShowTableSelection(true);
      return;
    }
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const handleSelectTable = (table) => {
    setSelectedTable(table);
    // Mark table as occupied
    setTables(tables.map(t => 
      t.id === table.id ? { ...t, available: false } : t
    ));
    setShowTableSelection(false);
  };

  const placeOrder = () => {
    if (cartItems.length === 0 || !selectedTable) return;
    
    const newOrder = {
      id: Date.now(),
      table: selectedTable,
      items: [...cartItems],
      total: cartItems.reduce((sum, item) => sum + item.price, 0),
      time: new Date().toISOString(),
      status: 'preparing'
    };
    
    setOrders([...orders, newOrder]);
    setCartItems([]);
    setShowCart(false);
    // Table remains occupied until order is completed
  };

  const completeOrder = (orderId) => {
    // Mark order as completed and free up the table
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'completed' } : order
    ));
    
    setTables(tables.map(table => 
      table.id === orders.find(o => o.id === orderId).table.id 
        ? { ...table, available: true } 
        : table
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        setActiveCategory={setActiveCategory} 
        cartItems={cartItems} 
        setShowCart={setShowCart}
        selectedTable={selectedTable}
        setShowTableSelection={setShowTableSelection}
      />
      
      <div className="container mx-auto px-4 py-8">
        {!activeCategory && (
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our Restaurant</h2>
            <p className="text-lg text-gray-600">Please select a cuisine to view our menu</p>
          </div>
        )}
        
        {activeCategory && (
          <FoodCategory 
            category={activeCategory} 
            items={foodItems[activeCategory]} 
            addToCart={addToCart}
          />
        )}
      </div>

      {showCart && (
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          setShowCart={setShowCart}
          selectedTable={selectedTable}
          placeOrder={placeOrder}
        />
      )}

      {showTableSelection && (
        <TableSelection 
          tables={tables} 
          onSelectTable={handleSelectTable}
          onClose={() => setShowTableSelection(false)}
        />
      )}
    </div>
  );
}

export default App;
