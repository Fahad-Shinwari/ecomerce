import React,{createContext, useState} from 'react'
//import { v4 as uuid } from 'uuid';

export const CartContext = createContext()
export const CartContextProvider=(props)=> {
   const [cart,setCart]=useState([])
   const addToCart=(id,name,price,img,count,total)=>{
        let product= cart.find(item=> {return item.id === id})
        if(product){
          addIncrement(id)
        }else{
        setCart(cart=>[...cart,{id,name,price,img,count:count+1,total:price}])
        }
    }
    const addIncrement = id =>{
      //console.log(id);
      let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total=product.price*product.count
    setCart([...tempCart])
      
    }
   const deleteCart = id =>{
        setCart(cart.filter(item => item.id !== id))
    }
    return (
            <CartContext.Provider value={{addToCart,cart,deleteCart,addIncrement}}>
              {props.children}
            </CartContext.Provider>
    
    )
}
