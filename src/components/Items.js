import React from 'react'
import Card from './Card'
import data from '../data'
import { connect } from 'react-redux'

function Items(props) {

    let test = []

    return (
        <div className="items-container">
           {
                data.map(item => {
                    
                    if(props.filters.length === 0)
                        
                        return <Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} image={item.image} sizes={item.sizes}/>
                   
                    else{

                        let itemAdded = false
                        props.filters.forEach(size => {
                            if(item.sizes.includes(size)){
                                if(!itemAdded){
                                    test.push(<Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} image={item.image} sizes={item.sizes}/>)
                                    itemAdded = true
                                }
                            }
                        })
                    }
                    
                })
                
            }

            {test}

        </div>
    )
}

const mapStateToProps = state =>{

    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Items)