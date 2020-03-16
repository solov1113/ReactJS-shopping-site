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
            props.inCard.find(x => x.id === props.id) ? 
            dispatch({type: "INCREMENT_ITEM_PIECE", item: {...props}}) 
            :
            dispatch({type: "ADD_LIST", item: {id: props.id, brand: props.brand, model: props.model, price: props.price, image: props.image, piece: 1}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)