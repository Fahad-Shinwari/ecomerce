import React,{ Component} from 'react'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'

export default class CartList extends Component {
  static contextType = CartContext
  render() {
    const { cart } = this.context
    //const {cart}= useContext(CartContext)
    let price = cart.map(item=>item.total)
    let total=price.reduce((a,c)=>a+c,0).toFixed(2)
    const cartList=cart.map(item=>{
        return(<CartItem name={item.name} count={item.count} tprice={item.price} id={item.id} key={item.id} img={item.img} />)
    })
        
    return (
        <React.Fragment>
             
           <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
        {cartList}
      </div>
      <center><h1>Items in Cart: {cart.length}</h1>
           <h2>Total: {total} $</h2></center>
      
        </React.Fragment>
    )
}
}
