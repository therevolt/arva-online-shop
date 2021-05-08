import React from 'react'

export default function PreviousArrow({onClick, disabled}) {
    return (
        <button className="material-icons btn-navigation" onClick={onClick} disabled={disabled} style={{position:"absolute", top:"50%", transform:"translate(0, -90%)" ,left:"50px", zIndex:999}} >arrow_back_ios</button>
    )
}


