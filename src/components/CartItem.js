import React,{useContext} from 'react'
import { CartContext } from '../contexts/CartContext'

export const CartItem = ({name,img,tprice,id,count}) => {
    const {deleteCart}= useContext(CartContext)
    // let price = cart.map(item=>item.price)
    // let total=price.reduce((a,c)=>a+c,0).toFixed(2)
    //console.log(tprice);
    
    
    return (
      <React.Fragment>
        <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product :</span> {name}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price :</span> ${tprice}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            {count}
          <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" onClick={() => deleteCart(id)} >
            <i className="fa fa-trash" style={{size:'2x'}}/>
          </div>
        </div>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total : ${tprice*count} </strong>
        </div>
      </div>
      </React.Fragment>
    )
    

}
