import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';


class App extends React.Component {
    constructor()
    {
      super();
      this.state ={
        products:[],
        loading:true
        }
      this.db = firebase.firestore();
    }

    componentDidMount()
    {
      this.db
      .collection('products')
      .onSnapshot((snapshot)=>
      {
        // console.log(snapshot);
        
        snapshot.docs.map((doc)=>
        {
          console.log(doc.data())
        })

        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading:false
        })
      })
    }

    handleIncreaseQuantity = (item) =>
    {
        // console.log("Hey please inc the qty of",item);
        const {products} = this.state; //array product
        const index = products.indexOf(item); //to find the particular index of that product using indexOf method of array products

        // products[index].qty += 1;

        // this.setState({
        //     products : products //or simply just products as key and value have same name
        // })

        //We will get the id of that document in firebase
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update(
          {
            qty:products[index].qty + 1
          }
        ).then(()=>{console.log("Document Updated")})
        .catch((err)=>{console.log("Error:",err)})

    }
    handleDecreaseQuantity = (item) =>
    {
        // console.log('Hey please dec the qty of',item);
        const{products} = this.state; //getting products array
        const index = products.indexOf(item); 

        if(products[index].qty===0)
        {
            return;
        }
        // products[index].qty -= 1;

        // this.setState({
        //     products
        // })
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update(
          {
            qty:products[index].qty - 1
          }
        ).then(()=>{console.log("Document Updated")})
        .catch((err)=>{console.log("Error:",err)})

    }
    handleDeleteProduct = (id) =>
    {
        // const {products} = this.state;
        const docRef = this.db.collection('products').doc(id);

        docRef
        .delete()
        .then(()=>{console.log("Deleted successfully")})
        .catch((err)=>{console.log("error",err)})
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
    // addProduct =() =>
    // {
    //   this.db.collection('products')
    //   .add(
    //     {
    //       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTFSNPLRq9nggWpd9IA1xsPEFK_S5k2jPlhr135oLjWWE3rbTuuTH1kfA4VVQg45zPatzPOJAK&usqp=CAc',
    //       price:900,
    //       qty:2,
    //       title:'Sunglass'
    //     })
    //   .then((docRef)=>
    //   { 
    //     console.log("Product has been added",docRef);

    //   })
    //   .catch((err)=>{console.log("Error",err);})
    // }

    // sort = () =>
    // {
    //   console.log("Hey");
    //   this.db.collection('products').orderBy('price','desc')
    //   .onSnapshot((snapshot)=>
    //   {
    //     // console.log(snapshot);
        
    //     snapshot.docs.map((doc)=>
    //     {
    //       console.log(doc.data())
    //     })

    //     const products = snapshot.docs.map((doc)=>{
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })
    //     this.setState({
    //       products,
    //       loading:false
    //     })
    //   })
    // }
    render()
    {
      const {products,loading} = this.state;
      return (
        <div className="App">
          <Navbar
            count = {this.getCartCount()}
          />
          {/* <button onClick={this.sort}>Sort</button> */}
          {/* <button onClick={this.addProduct} style={{padding:10,fontSize:15}}>Add a Product</button> */}
          <Cart
            products={products} 
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />
          {loading && <h1>Loading....</h1>}
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
