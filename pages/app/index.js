import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { NextArrow, PreviousArrow, CardProduct } from '../../src/component/base'
import { Navbar } from '../../src/component/module'
export default function App() {
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
    return (
        <div className="">
            <Navbar
            isLogin={true}
            />
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
                customLeftArrow={<PreviousArrow/>}
                customRightArrow={<NextArrow/>}
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
