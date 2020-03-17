import React from 'react'
import { connect } from 'react-redux'
import ShoppingCartIcon from './ShoppingCartIcon'
import CartMenuItem from './CartMenuItem'
import Subtotal from './Subtotal'

function CartMenu(props) {

    return (
        <div className={`cart-menu ${props.isCartMenuActivated === true ? "cart-menu-active":null}`}>
            <div className="cart-title">
                <span className="cart-title-text">Cart</span>
                <ShoppingCartIcon bgColor="white" sizes="30px" className="margin-top" right="cart-icon-right"/>
            </div>
            <div className="cart-body">
                {(props.inCard.length === 0) ? 
                    (
                        <div>No item added</div> 
                    )
                    : 
                    (
                        <div className="cart-menu-items"> 
                            
                            {
                                props.inCard.map(item => {
                                    return(
                                        <CartMenuItem key={item.id} item={item}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
                
            </div>
            <Subtotal />
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

export default connect(mapStateToProps)(CartMenu)