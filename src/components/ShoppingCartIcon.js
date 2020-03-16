import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as CartIcon } from '../icons/supermarket.svg'

function ShoppingCartIcon(props) {
    
    let quantityCounter = 0
    for(let i = 0; i < props.inCard.length; i++)
        quantityCounter += props.inCard[i].piece

    return (
        <div className={`shopping-cart-icon ${props.className}`} onClick={() => { props.setActive(props)}}>
            <CartIcon width={props.sizes} height={props.sizes} style={{position: "absolute"}} fill={props.bgColor}/>
            <span className={`${quantityCounter > 0 ? `quantity-counter ${props.right}` : null}`}>{quantityCounter > 0 ? quantityCounter : null}</span>
        </div>
    )
}

const mapStateToProps = state =>{

    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({type: "CART_MENU_ACTIVE", status: !(props.isCartMenuActivated)})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon)