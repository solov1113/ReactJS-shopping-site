import React from 'react'

export default function NavBarButton(props) {
    console.log(props)
    return (
        
        <div>
            <span className={`header-button ${(props.currentPage === props.text) ? "current-page-border": null}`}>{props.text}</span>
        </div>
    )
}
