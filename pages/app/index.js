import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Carousel, { consts } from 'react-elastic-carousel'
import { useMediaQuery } from 'react-responsive'
import { NextArrow, PreviousArrow, CardProduct, PaginationCarousel } from '../../src/component/base'
import { Navbar } from '../../src/component/module'
export default function App() {
    const isMobile = useMediaQuery({
        query : "(min-device-width: 992px)"
    })
    const [state, setState] = useState({
        showArrows:true
    })
    // config responsive carousel atas
    const responsive = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1 },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 2, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 4 },
    ];
    // ----
    // config responsive carousel bawah
    const responsive2 = [
        { width: 1, itemsToShow: 4 },
        { width: 550, itemsToShow: 4, itemsToScroll: 1 },
        { width: 850, itemsToShow: 4 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 6 },
        { width: 1750, itemsToShow: 6 },
    ];
    // ----
    // config posisi dan fungsi panah carousel atas
    const myArrow = ({ type, onClick, isEdge }) => {
        if (type === consts.PREV) {
            return (
                <PreviousArrow onClick={onClick} disabled={isEdge} />
            )
        } else {
            return (
                <NextArrow onClick={onClick} disabled={isEdge} />
            )
        }
    }
    // ---
    // config posisi dan fungsi panah carousel bawah
    const myArrow2 = ({ type, onClick, isEdge }) => {
        if (type === consts.PREV) {
            return (
                <button className="material-icons btn-navigation" onClick={onClick} disabled={isEdge} style={{position:"absolute", top:"50%", transform:"translate(0, -90%)" ,left:0, zIndex:999}} >arrow_back_ios</button>
            )
        } else {
            return (
                <button className="material-icons btn-navigation" onClick={onClick} disabled={isEdge} style={{position:"absolute", top:"50%", transform:"translate(0, -90%)" ,left:"80px", zIndex:999}} >arrow_forward_ios</button>
            )
        }
    }
    // ---
    // config posisi dan fungsi paginasi carousel atas dan bawah
    const myPagination = ({ pages, activePage, onClick }) =>  {
        return (
            <div className="d-flex my-4 me-auto" style={{}}>
                {pages.map(page=>{
                    const isActivePage = activePage === page
                    return (
                        <PaginationCarousel onClick={()=>{onClick(page)}} active={isActivePage} />
                    )
                })}
            </div>
        )
    }
    // ---
    return (
        <div className="">
            <div className="mt-7"></div>
            <div className="container">
                {/* carousel ats */}
                <div style={{ position: "relative" }}>
                    <Carousel 
                    itemsToScroll={2} 
                    itemsToShow={2} 
                    breakPoints={responsive} 
                    renderArrow={myArrow} 
                    renderPagination={myPagination}
                    showArrows={isMobile == true ? true : false}
                    >
                        <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "blue", height: "270px" }}><p className="mx-auto fs-2 my-auto">1</p></div>
                        <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "red", height: "270px" }}><p className="mx-auto fs-2 my-auto">2</p></div>
                        <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "yellow", height: "270px" }}><p className="mx-auto fs-2 my-auto">3</p></div>
                        <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "green", height: "270px" }}><p className="mx-auto fs-2 my-auto">4</p></div>
                        <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "pink", height: "270px" }}><p className="mx-auto fs-2 my-auto">5</p></div>
                        <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "black", height: "270px" }}><p className="mx-auto fs-2 my-auto">6</p></div>
                    </Carousel>
                </div>
                {/*  */}
            </div>
            <div className="py-4" style={{ background: "#F0F1F9" }}>
                <div className="container">
                    {/* carousel bawah */}
                    <div className="row mt-5 position-relative">
                        <div className="col-12 col-lg-4">
                            <div>
                                <h2 className="mb-1">Category</h2>
                                <p className="color-gray mb-0" style={{ fontSize: "12px" }}>What are you currently looking for</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 my-4 my-lg-0">
                            <Carousel 
                            itemsToScroll={2} 
                            itemsToShow={2} 
                            breakPoints={responsive2} 
                            renderArrow={myArrow2} 
                            renderPagination={myPagination}
                            showArrows={isMobile == true ? true : false}
                            >
                                <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "blue", height: "220px" }}><p className="mx-auto fs-2 my-auto">1</p></div>
                                <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "red", height: "220px" }}><p className="mx-auto fs-2 my-auto">2</p></div>
                                <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "yellow", height: "220px" }}><p className="mx-auto fs-2 my-auto">3</p></div>
                                <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "green", height: "220px" }}><p className="mx-auto fs-2 my-auto">4</p></div>
                                <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "pink", height: "220px" }}><p className="mx-auto fs-2 my-auto">5</p></div>
                                <div className="d-flex text-white w-100 mx-3 rounded-md" style={{ background: "black", height: "220px" }}><p className="mx-auto fs-2 my-auto">6</p></div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div>
                        <h2 className="mb-1">New</h2>
                        <p className="color-gray mb-0" style={{ fontSize: "12px" }}>You’ve never seen it before!</p>
                    </div>
                    <CardProduct
                        image="/assets/default.png"
                        titleProduct="Men's formal suit - Black & White"
                        price="$ 40.0"
                        linkDetailProduct=""
                        seller="Zalora Cloth"
                    />
                </div>
            </div>
        </div>
    )
}
