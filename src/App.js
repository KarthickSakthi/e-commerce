
import './App.css';
import data from './components/back/data/Data'
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
import Cart from './components/front/Cart/Cart';
import React,{useState} from 'react';
function App() {
  const{productItems}=data;
  console.log("prods app.js "+productItems)
  const[cartItem,setCartItem]=useState([])
  return (
    <div className="App">
      {/*30:00*/}
    <Header/>
    <Routes productItems={productItems} cartItem={cartItem}/>
 
    </div>
  );
}

export default App;
