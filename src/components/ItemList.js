import React, { Component } from 'react'
import { Item } from './Item'

export class ItemList extends Component {
    state={
        database:[
            {id:1,name:'Google Pixel - Black',price:13,count:0,total:0,img:"img/product-1.png"},
            {id:2,name:'Samsung S7',price:28,count:0,total:0,img:"img/product-2.png"},
            {id:3,name:'HTC 10 - Black',price:38,count:0,total:0,img:"img/product-3.png"},
            {id:4,name:'HTC 10 - White',price:132,count:0,total:0,img:"img/product-4.png"},
            {id:5,name:'HTC Desire 626s',price:88,count:0,total:0,img:"img/product-5.png"},
            {id:6,name:'Vintage Iphone',price:83,count:0,total:0,img:"img/product-6.png"},
            {id:7,name:'Iphone 7',price:53,count:0,total:0,img:"img/product-7.png"},
            {id:8,name:'Smashed Iphone',price:68,count:0,total:0,img:"img/product-8.png"}
            
        ]
    }
    render() {
       const phone= this.state.database.map(item=>{
           return(
             
            <Item key={item.id} id={item.id} img={item.img} name={item.name} count={item.count} total={item.total} price={item.price} />
            
        ) })
        return (
            <div className="row"> 
                {phone}
            </div>
        )
    }
}

export default ItemList
