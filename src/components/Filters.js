import React from 'react'

export default function Filters() {
    return (
        <div className="filters">
            <span style={{textAlign: "center"}}>Filters</span>
            <p style={{fontWeight: "bold"}}>Sizes:</p>
            <div className="sizes">
                <div className="sizes-button">39</div>
                <div className="sizes-button">39</div>
                <div className="sizes-button">39</div>
                <div className="sizes-button">39</div>
                <div className="sizes-button">39</div>
                <div className="sizes-button">39</div>
            </div>
        </div>
    )
}
