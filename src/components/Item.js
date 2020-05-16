import React,{useContext} from 'react'
import { CartContext } from '../contexts/CartContext'

export const Item = ({id,name,price,img,count,total}) => {
    const {addToCart}=useContext(CartContext)
    const handleSubmit = ()=>{
        addToCart(id,name,price,img,count,total)
        //console.log(id);
        
        
    }
    return (
       
            <div className="card col-sm-4" >
                  <img className="card-img-top" style={{maxWidth:'230px',margin:"0 auto"}} src={img} alt="" />
                  <div className="card-body" style={{margin:"0 auto"}}>
                    <h4 className="card-title text-uppercase">{name}</h4>
                    <h5 className="card-text">$ {price}</h5>
                    <button href="#" className="btn btn-primary" onClick={handleSubmit}>Add To Cart</button>
                    </div>
            </div>   
           
    )
}
