import React from 'react'

export default function NextArrow({onClick, disabled}) {
    return (
        <button className="material-icons btn-navigation" onClick={onClick} disabled={disabled} style={{position:"absolute", top:"50%", transform:"translate(0, -90%)" ,right:"50px", zIndex:999}} >arrow_forward_ios</button>
    )
}
