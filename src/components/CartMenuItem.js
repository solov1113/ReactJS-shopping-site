import React from 'react'

function CartMenuItem(props) {
    return (
        <div className="cart-menu-item">
            <div className="cart-menu-item-photo">
                <img src="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2526816/1/4055012260221_1_org.jpg" style={{width: "100%"}}></img>
            </div>
            <div className="cart-menu-item-details">
                <span className="cart-menu-item-title">{props.item.brand}</span>
                <span className="cart-menu-item-details-text">{props.item.model}</span>
                <span className="cart-menu-item-details-text">Piece: 1</span>
            </div>
            <div className="cart-menu-item-right">
                <span className="cart-menu-item-price">{props.item.price}</span>
                <div className="cart-menu-item-buttons">
                    <button className="cart-menu-item-button">-</button>
                    <button className="cart-menu-item-button">+</button>
                </div>
            </div>
        </div>
    )
}

export default CartMenuItem