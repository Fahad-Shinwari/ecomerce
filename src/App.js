import React from 'react';
import { CartContextProvider } from './contexts/CartContext';
import { BrowserRouter, Route } from "react-router-dom";
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import  CartList  from './components/CartList';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      
      <CartContextProvider>
        
      <BrowserRouter>
      <Navbar />
        <Route exact path="/" component={ItemList} />
        <Route path="/cart" component={CartList} />
        
      </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
