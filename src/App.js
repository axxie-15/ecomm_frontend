import React, { useState } from 'react';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product'; 
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import SignIn from './customer/components/SignIn/SignIn';

function App() {
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <div className="App">
      <Navigation onSignInClick={() => setSignInOpen(true)} />
      <div>
        {/* Render the desired component based on your need */}
        {/* Uncomment the component you want to render */}
        
        {/* Uncomment to render the HomePage */}
        { <HomePage /> }
       
        {/* Uncomment to render the Product */}
        {/* <Product /> */}
        
        {/* Uncomment to render the ProductDetails */}
        {/* <ProductDetails /> */}
        
        {/* Uncomment to render the SignIn */}
        {signInOpen && (
          <SignIn onClose={() => setSignInOpen(false)} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
