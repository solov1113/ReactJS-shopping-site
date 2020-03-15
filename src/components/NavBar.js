import React from 'react'
import NavBarButton from './NavBarButton'
import { ReactComponent as Search } from '../icons/search.svg'
import { connect } from 'react-redux'

function NavBar(props) {

    let quantityCounter = props.inCard.length
    
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
                    <div className="shopping-card-icon">
                        <span className={`${quantityCounter > 0 ? "quantity-counter" : null}`}>{quantityCounter > 0 ? quantityCounter : null}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{

    return {
        inCard: state.inCard
    }
}

export default connect(mapStateToProps)(NavBar)
