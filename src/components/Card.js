import React from 'react'
import { connect } from 'react-redux'

function Card(props) {

    return (
        <div className="card-container">
            <div className="card">
                <img src={props.image} alt={props.model} className="item-image"/>
                <div className="card-info">
                    <span className="brand-text">{props.brand}</span>
                    <span className="model-text">{props.model}</span>
                    <span className="item-price-text">{props.price}</span>
                </div>
            </div>
            <div className="add-button" onClick={() => props.addItem(props)}>
                Add to card
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        inCard: state.inCard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (props) => {
            dispatch({type: "ADD_LIST", item: {id: props.id, brand: props.brand, model: props.model, price: props.price, image: props.image}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)