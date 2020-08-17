import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component{
    constructor()
    {
        super();
        this.state ={
            products:[
                {
                    price:1599,
                    title:'Mobile',
                    qty:1,
                    img:" ",
                    id:1
                },
                {
                    price:999,
                    title:'PSV',
                    qty:5,
                    img:" ",
                    id:2
                },
                {
                    price:2499,
                    title:'Laptop',
                    qty:3,
                    img:" ",
                    id:3
                }
            ]
        }
    }

    handleIncreaseQuantity = (item) =>
    {
        console.log("Hey please inc the qty of",item);
        const {products} = this.state; //array product
        const index = products.indexOf(item); //to find the particular index of that product using indexOf method of array products

        products[index].qty += 1;

        this.setState({
            products : products //or simply just products as key and value have same name
        })

    }
    handleDecreaseQuantity = (item) =>
    {
        console.log('Hey please dec the qty of',item);
        const{products} = this.state; //getting products array
        const index = products.indexOf(item); 

        if(products[index].qty===0)
        {
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products
        })

    }
    handleDeleteProduct = (id) =>
    {
        const {products} = this.state;
        const items = products.filter((item)=>item.id!==id); //it will return me another array containing product whose id!=id that is passed
        this.setState({
            products:items
        })
    }
    render(){
        const {products} = this.state
        return(
                <div className="cart">
                    {products.map( (item) =>
                        {
                            return <CartItem 
                                    item = {item}
                                    key = {item.id} 
                                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                                    onDeleteProduct = {this.handleDeleteProduct}
                                    />
                        }) 
                    }
                </div>
        );
    }
}

export default Cart;