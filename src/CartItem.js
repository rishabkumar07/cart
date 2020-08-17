import React from 'react';

class CartItem extends React.Component{
    render()
    {
        const {price,title,qty,img} = this.props.item;
        const {onIncreaseQuantity,onDecreaseQuantity,item,onDeleteProduct} = this.props
        return(
            <div className="cart-item">
                {this.props.jsx}
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
                        onClick = { () => onIncreaseQuantity(item)}
                        />
                        <img 
                        alt="decrease"
                        className="action-icons"
                        src=" https://image.flaticon.com/icons/svg/992/992514.svg"
                        onClick = {() => onDecreaseQuantity(item)} //calling the function and not just passing ref
                        />
                        <img 
                        alt="delete"
                        className="action-icons"
                        src=" https://image.flaticon.com/icons/svg/3221/3221897.svg"
                        onClick = {() => onDeleteProduct(item.id)}
                        />
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