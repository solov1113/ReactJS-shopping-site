import React from 'react'

export default function CartMenuItem() {
    return (
        <div className="cart-menu-item">
            <div className="cart-menu-item-photo">
                <img src="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2526816/1/4055012260221_1_org.jpg" style={{width: "100%"}}></img>
            </div>
            <div className="cart-menu-item-details">
                <span className="cart-menu-item-title">adidas</span>
                <span className="cart-menu-item-details-text">Adidas Superstar Erkek Ayakkabı - C77124</span>
                <span className="cart-menu-item-details-text">Piece: 1</span>
            </div>
            <div className="cart-menu-item-right">
                <span className="cart-menu-item-price">309,00 TL</span>
                <div className="cart-menu-item-buttons">
                    <button className="cart-menu-item-button">-</button>
                    <button className="cart-menu-item-button">+</button>
                </div>
            </div>
        </div>
    )
}
