import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
    constructor()
    {
      super();
      this.state ={
        products:[
          {
            price:1599,
                    title:'Mobile',
                    qty:1,
                    img:"https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    id:1
                },
                {
                    price:999,
                    title:'PSV',
                    qty:5,
                    img:"https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80",
                    id:2
                },
                {
                    price:2499,
                    title:'Laptop',
                    qty:3,
                    img:"https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1167&q=80",
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
    getCartCount = () =>
    {
      const{products} = this.state;
      let count = 0;
      products.forEach((item)=>{
        count += item.qty;
      })
      return count;
    }
    getCartTotal = () =>
    {
      const{products} = this.state;
      let total = 0;
      products.forEach((item)=>{
        total += item.price * item.qty;
      })
      return total;
    }
    render()
    {
      const {products} = this.state;
      return (
        <div className="App">
          <Navbar
            count = {this.getCartCount()}
          />
          <Cart
            products={products} 
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={styles}>
            Total: ₹{this.getCartTotal()}
          </div>
        </div>
      );
    }
    
  }
  const styles = {
    fontSize:25,
    padding:20,
    textAlign:'center',
    color:"#388e3c",
    borderTop : '5px dashed #e0e0e0'
  }
  


export default App;
