import React from 'react'
import Filters from './Filters'
import Items from './Items'

export default function ShoppingPage() {
    return (
        <div className="shopping-page">
            <Filters/>
            <Items/>
        </div>
    )
}
