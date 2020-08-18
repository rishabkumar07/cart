import React from 'react';
import CartItem from './CartItem'

const Cart = (props) =>
{
        const {products} = props;
        return(
                <div className="cart">
                    {products.map( (item) =>
                        {
                            return <CartItem 
                                    item = {item}
                                    key = {item.id} 
                                    onIncreaseQuantity={props.onIncreaseQuantity}
                                    onDecreaseQuantity={props.onDecreaseQuantity}
                                    onDeleteProduct={props.onDeleteProduct}
                                    />
                        }) 
                    }
                </div>
        );
    
}

export default Cart;