import React from 'react'
import { connect } from 'react-redux'


function CartMenu(props) {

    return (
        <div className={`cart-menu ${props.isCartMenuActivated === true ? "cart-menu-active":null}`}>
            
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        isCartMenuActivated: state.isCartMenuActivated
    }
}

export default connect(mapStateToProps)(CartMenu)