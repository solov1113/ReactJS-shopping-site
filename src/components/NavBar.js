import React from 'react'
import NavBarButton from './NavBarButton'
import { ReactComponent as Search } from '../icons/search.svg'
import { connect } from 'react-redux'
import ShoppingCartIcon from './ShoppingCartIcon'

function NavBar(props) {
    
    return (
        <div className="header">
            <div className="header-content">
                <span className="header-logo">Shopping Website</span>
                <div className="header-buttons">
                    <NavBarButton text="HOME" {...props}/>
                    <NavBarButton text="SHOP" {...props}/>
                    <NavBarButton text="CONTACT" {...props}/>
                </div>
                <div className="header-icons">
                    <Search style={{height:'20px', width:'20px', marginRight: '20px'}}/>
                    <ShoppingCartIcon bgColor="black" sizes="20px"/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{

    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}


export default connect(mapStateToProps)(NavBar)
