import React from 'react'
function Header(props)
{
    
            
    console.warn(props.data)
    return(
        <div>
           
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" height="80px" width="80px" align="center"/>
            </div>
            
        </div>
    )
}

export default Header