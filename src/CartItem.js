import React from 'react';

class CartItem extends React.Component{
    constructor()
    {
        super();
        this.state ={
            price:999,
            title:'Phone',
            qty:1,
            img:" "
        }
    }
    increaseQuantity = () =>
    {
        console.log('this',this.state);
        //setState form1
        // this.setState({
        //     qty:this.state.qty + 10
        // });

        //setState form2
        this.setState((prevState) =>
        {
            return{
                qty:prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () =>
    {
        console.log('this',this.state);
        const {qty} = this.state;
        if(qty == 0)
        {
            return;
        }
        this.setState((prevState) =>
        {
            // if(prevState.qty==0)
            // {
            //     return;
            // we can do this also but since here it is in setState so it will re-render 
            //the app also which we don't want for 0 qty
            // }

            return{
                qty:prevState.qty - 1
            }
        });
    }
    render()
    {
        const {price,title,qty,img} = this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style ={styles.image} />
                </div>
                <div className="right-block">
                    
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}  </div>
                    <div style={{color:'#777'}}>Qty : {qty} </div>
                    
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt="increase"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/992/992482.svg "
                        onClick = {this.increaseQuantity}
                        />
                        <img 
                        alt="decrease"
                        className="action-icons"
                        src=" https://image.flaticon.com/icons/svg/992/992514.svg"
                        onClick = {this.decreaseQuantity}
                        />
                        <img 
                        alt="delete"
                        className="action-icons"
                        src=" https://image.flaticon.com/icons/svg/3221/3221897.svg"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;