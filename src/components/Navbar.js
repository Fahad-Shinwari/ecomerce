import React,{useContext} from 'react'
import { Link} from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
export const Navbar = () => {
    const {cart}= useContext(CartContext)
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        fontSize:"25px",
        textDecoration:"none"
      };
    return (
        <React.Fragment>
            
                <nav className="navbar navbar-light bg-primary">
                <ul className="nav navbar-nav list-group align-items-center" style={{display:"inline - block"}}>
                <li style={{display:"inline - block"}}>
                    <Link to="/" style={mystyle}>Home</Link>
                </li>
                <li style={{display:"inline - block"}}>
                    <Link to="/cart" style={mystyle}>Cart {cart.length} </Link>
                </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
