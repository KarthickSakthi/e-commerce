
import './App.css';
import data from './components/back/data/Data'
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
import Cart from './components/front/Cart/Cart';
import React,{useState} from 'react';
import BannerSlide from './components/BannerSlide/BannerSlide';
function App() {
  const{productItems,HeadsetandSpeakers,SmartPhones}=data;
  console.log("prods app.js "+productItems)
  const[cartItem,setCartItem]=useState([])
  
  const handleAddProduct=(product)=>{
   const ProductExist = cartItem.find((item)=> item.id===product.id)
   if(ProductExist){
      setCartItem(cartItem.map((item)=>item.id=== product.id ? 
      {...ProductExist,quantity:ProductExist.quantity+1}:item)
      )
   }
   else{
     setCartItem([...cartItem,{...product,quantity:1}])
   }

  }
  const handleRemoveProduct=(product)=>{
    const ProductExist = cartItem.find((item)=> item.id===product.id)
    if(ProductExist.quantity===1){
      setCartItem(cartItem.filter((item)=>item.id !=product.id))
    }
    else{
      setCartItem(
        cartItem.map((item)=>item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity-1}:item)
      )
    }
  }
  const ClearHandleCart=()=>{
   setCartItem([]);
  }
  return (
    <div className="App">
     
   
    <BannerSlide/>
    <Routes productItems={productItems}
     cartItem={cartItem} 
     HeadsetandSpeakers={HeadsetandSpeakers}
     SmartPhones={SmartPhones}
     handleAddProduct={handleAddProduct}
     handleRemoveProduct={handleRemoveProduct}
     ClearHandleCart={ClearHandleCart}/>
    
    </div>
  );
}

export default App;
