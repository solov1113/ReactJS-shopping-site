import React from 'react'
import { connect } from 'react-redux'

function CartMenuItem(props) {
    return (
        <div className="cart-menu-item">
            <div className="cart-menu-item-photo">
                <img src={props.item.image} style={{width: "100%"}}></img>
            </div>
            <div className="cart-menu-item-details">
                <span className="cart-menu-item-title">{props.item.brand}</span>
                <span className="cart-menu-item-details-text">{props.item.model}</span>
                <span className="cart-menu-item-details-text">Piece: {props.item.piece}</span>
            </div>
            <div className="cart-menu-item-right">
                <span className="cart-menu-item-price">{props.item.price}</span>
                <div className="cart-menu-item-buttons">
                    <button className="cart-menu-item-button" onClick={() => { props.decreasePiece(props)}}>-</button>
                    <button className="cart-menu-item-button" onClick={() => { props.increasePiece(props)}}>+</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increasePiece: (props) => {
            dispatch({type: "INCREMENT_ITEM_PIECE", item: props.item})
        },
        decreasePiece: (props) => {
            dispatch({type: "DECREMENT_ITEM_PIECE", item: props.item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMenuItem)