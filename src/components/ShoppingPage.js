import React from 'react'
import Filters from './Filters'
import Items from './Items'
import { connect } from 'react-redux'

function ShoppingPage(props) {
    return (
        <div className="shopping-page" onClick={() => { props.setDeactive(props)}}>
            <Filters/>
            <Items/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDeactive: (props) => {
            if(props.isCartMenuActivated)
                dispatch({type: "CART_MENU_ACTIVE", status: false})
        }
    }
}

const mapStateToProps = state =>{
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage)