import React, { useState } from 'react'
import { connect } from 'react-redux'

function FilterButton(props) {

    const [isClicked, setClicked] = useState(false)

    return (
        <div className={`sizes-button ${isClicked ? "sizes-button-clicked":null}`} onClick={() => { 

            props.updateFilters(props)
            setClicked(!isClicked)

        }}>{props.size}</div>
    )
}

const mapStateToProps = state =>{

    return {
        fiters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (props) => {
            dispatch({type: "UPDATE_FILTER", size: props.size})
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(FilterButton)