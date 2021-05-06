import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { getNewProduct, getPopularProduct } from "../../src/config/redux/actions/product";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { NextArrow, PreviousArrow, CardProduct } from '../../src/component/base'
// import { Navbar } from '../../src/component/module'

export default function App() {
    const dispatch = useDispatch();
    const { product, popular } = useSelector((state) => state.product);
    console.log(popular);
    const [state, setState] = useState({
    })
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        dispatch(getNewProduct())
        dispatch(getPopularProduct())
        // .then((res) => {
        //     setDataReceiver(res)
    }, [dispatch]);

    return (
        <div className="">
            <div className="mt-7"></div>
            {/* <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                arrows
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="react-multi-carousel-dot-list"
                itemClass="my-4"
                customLeftArrow={<PreviousArrow />}
                customRightArrow={<NextArrow />}
            >
                <div className="rounded-md overflow-hidden mx-3">
                    <Image src="/assets/img_1.jpg" layout="responsive" width={236} height={136} />
                </div>
                <div className="rounded-md overflow-hidden mx-3">
                    <Image src="/assets/img_2.jpg" layout="responsive" width={236} height={136} />
                </div>
                <div className="rounded-md overflow-hidden mx-3">
                    <Image src="/assets/img_3.jpg" layout="responsive" width={236} height={136} />
                </div>
            </Carousel>; */}
            <div className="py-4" style={{ background: "#F0F1F9" }}>
                <div className="container">
                    <div>
                        <h2 className="mb-1">Category</h2>
                        <p className="color-gray mb-0" style={{ fontSize: "12px" }}>What are you currently looking for</p>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="me-3">
                            <PreviousArrow />
                        </div>
                        <div>
                            <NextArrow />
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

                    {product.map((item, index) => {
                        return (
                            <>
                                <CardProduct
                                    key={index}
                                    image="/assets/default.png"
                                    titleProduct={item.name}
                                    price={`Rp.${item.price}`}
                                    linkDetailProduct=""
                                    seller="Zalora Cloth"
                                />
                            </>
                        )
                    })}

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div>
                        <h2 className="mb-1">Popular</h2>
                        <p className="color-gray mb-0" style={{ fontSize: "12px" }}>Find clothes that are trending recently</p>
                    </div>

                    {popular.map((item, index) => {
                        return (
                            <>
                                <CardProduct
                                    key={index}
                                    image="/assets/default.png"
                                    titleProduct={item.name}
                                    price={`Rp.${item.price}`}
                                    linkDetailProduct=""
                                    seller="Zalora Cloth"
                                />
                            </>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
