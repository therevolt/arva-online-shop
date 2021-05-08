import React from 'react'

export default function PaginationCarousel({onClick, active}) {
    return (
        <>
            <div className={active == true ? "rounded-circle c-pointer active me-3" : "rounded-circle c-pointer me-3"} style={{background:"#EAEAEA", width:"14px", height:"14px"}} onClick={onClick}></div>
            <style jsx>{`
            .active{
                background:#8E8A8A !important
            }
            `}</style>
        </>
    )
}
