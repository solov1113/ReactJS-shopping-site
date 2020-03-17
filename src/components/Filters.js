import React from 'react'
import data from '../data'
import FilterButton from './FilterButton'

function Filters() {

    let sizeSet = new Set()
    data.map(item => {
        item.sizes.forEach(size => sizeSet.add(size))
    })
    sizeSet = Array.from(sizeSet) // set to array

    return (
        <div className="filters">
            <span className="filters-text">Filters</span>
            <p style={{fontWeight: "bold"}}>Shoe size:</p>
            <div className="sizes">

                {
                    sizeSet.map(size => {
                        return <FilterButton key={size} size={size}/>
                    })
                }

            </div>
        </div>
    )
}



export default Filters