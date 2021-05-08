import React, { useState } from 'react'
import Image from 'next/image'
import {useSelector} from 'react-redux'
export default function profil_store() {
    const { profilStore } = useSelector(state=>state.Helpers)
    const [state, setState] = useState({
        toggleModal: false,
        linkSideBar: {
            store: {
                storeProfile: true
            },
            product: {
                MyProducts: false,
                settingProducts: false
            },
            order: false
        },
        myProduct: {
            allItem: true,
            soldOut: false,
            archived: false
        },
        myOrder: {
            allItem: true,
            noPaid: false,
            package: false,
            send: false,
            completed: false,
            orderCancel: false
        }
    })
    return (
        <div style={{background:"#F5F5F5", minHeight:"100vh", paddingTop:"10rem"}}>
            <div className="container">
                <div>
                    {/* my product */}
                    <div className={profilStore.product == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="bg-white p-4 border rounded" style={{ minHeight: "550px" }}>
                            <h4 className="fw-bold">My Product</h4>
                            <div className="d-flex my-4">
                                <button className={state.myProduct.allItem == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myProduct: {
                                            allItem: true,
                                            soldOut: false,
                                            archived: false
                                        }
                                    })
                                }} >All items</button>
                                <button className={state.myProduct.soldOut == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myProduct: {
                                            allItem: false,
                                            soldOut: true,
                                            archived: false
                                        }
                                    })
                                }} >Sould out</button>
                                <button className={state.myProduct.archived == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myProduct: {
                                            allItem: false,
                                            soldOut: false,
                                            archived: true
                                        }
                                    })
                                }} >Archived</button>
                            </div>
                            <div className="d-flex rounded-pill border p-2 mb-4" style={{ width: "300px" }}>
                                <span className="material-icons color-gray me-2">search</span>
                                <input type="text" className="border-0 w-100 my-auto" style={{ outline: "none" }} placeholder="search..." />
                            </div>
                            <div className="w-100 border">
                                <div className="w-100 d-flex justify-content-between" style={{ background: "#F6F6F6" }}>
                                    <div className="c-pointer px-4 py-3 d-flex h-100 hover-bg-gray">
                                        <p className="m-0 me-3">Product name</p>
                                        <span className="material-icons">sort</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="c-pointer px-4 py-3 d-flex h-100 hover-bg-gray">
                                            <p className="m-0 me-3">Price</p>
                                            <span className="material-icons">sort</span>
                                        </div>
                                        <div className="c-pointer px-4 py-3 d-flex h-100 hover-bg-gray">
                                            <p className="m-0 me-3">Stock</p>
                                            <span className="material-icons">sort</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex w-100 justify-content-center">
                                    <div className="my-5" style={{ width: "224px", height: "177px" }}>
                                        <Image src="/img/data_null.png" width={224} height={177} layout="responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* my profil */}
                    <div className={profilStore.store == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="bg-white p-4 border rounded" style={{ minHeight: "550px" }}>
                            <h4 className="fw-bold">My Profile Store</h4>
                            <p className="color-gray m-0 pb-3 border-bottom">Manage your profile information</p>
                            <div className="row mt-3">
                                <div className="col-12 col-md-7">
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4 my-auto">Store Name</label>
                                        <input type="text" placeholder="write your name..." className="p-2 border rounded" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4 my-auto">Email</label>
                                        <input type="text" placeholder="write your Email..." className="p-2 border rounded" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4 my-auto">Phone Number</label>
                                        <input type="number" placeholder="write your password..." className="p-2 border rounded" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4">Store Description</label>
                                        <textarea rows={5} className="border" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <div className="d-flex justify-content-start" style={{ width: "70%" }}>
                                            <button className="bg-danger text-white border-0 rounded-pill px-5 py-2 me-3">Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 my-auto">
                                    <div className="rounded-circle overflow-hidden mx-auto" style={{ width: "100px", height: "100px" }}>
                                        <Image src="/img/default.png" width={100} height={100} layout="responsive" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="border-danger rounded-pill py-2 px-5 bg-transparent text-danger overflow-hidden position-relative my-4">
                                            Select Image
                                            <input type="file" className="position-absolute" style={{ left: "-100px", top: 5, opacity: 0, cursor: "pointer" }} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* inventory */}
                    <div className={profilStore.sellingProduct == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="my-4">
                            <div className="bg-white border p-4 rounded-top">
                                <h4 className="fw-bold">Inventory</h4>
                            </div>
                            <div className="bg-white border p-4 rounded-bottom">
                                <label htmlFor="input" className="mb-3">Name of goods</label>
                                <div>
                                    <input type="text" className="p-2 border rounded w-100-sm w-50-lg" style={{ outline: "none" }} />
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="bg-white border p-4 rounded-top">
                                <h4 className="fw-bold">Item details</h4>
                            </div>
                            <div className="bg-white border p-4 rounded-bottom">
                                <div className="mb-3">
                                    <label htmlFor="input" className="mb-3">Unit price</label>
                                    <div>
                                        <input type="text" className="p-2 border rounded w-100-sm w-50-lg" style={{ outline: "none" }} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="input" className="mb-3">stock</label>
                                    <div className="d-flex">
                                        <div className="d-flex border rounded w-100-sm w-50-lg me-4">
                                            <input type="text" className="w-100 border-0 p-2" style={{ outline: "none" }} />
                                            <p className="m-0 p-2">buah</p>
                                        </div>
                                        <div className="d-flex me-4">
                                            <input type="radio" className="me-2 my-auto" />
                                            <label className="my-auto">Baru</label>
                                        </div>
                                        <div className="d-flex">
                                            <input type="radio" className="me-2 my-auto" />
                                            <label className="my-auto" >bekas</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="input" className="mb-3">Description</label>
                                    <div className="d-flex border rounded w-100-sm w-50-lg">
                                        <textarea rows={5} className="border w-100" style={{ outline: "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="bg-white border p-4 rounded-top">
                                <h4 className="fw-bold">Photo of goods</h4>
                                <div className="bg-white border p-4 rounded-bottom">
                                    <div className="px-4" style={{ border: "3px dashed #D4D4D4" }}>
                                        <div className="d-flex justify-content-between py-4 border-bottom">
                                            <div className="rounded overflow-hidden" style={{ width: "120px", height: "120px", background: "#c4c0c0" }}>
                                                <Image src="/img/default-thumbnail.jpg" width={640} height={480} layout="responsive" />
                                            </div>
                                            <div className="rounded overflow-hidden" style={{ width: "120px", height: "120px", background: "#c4c0c0" }}>
                                                <Image src="/img/default-thumbnail.jpg" width={640} height={480} layout="responsive" />
                                            </div>
                                            <div className="rounded overflow-hidden" style={{ width: "120px", height: "120px", background: "#c4c0c0" }}>
                                                <Image src="/img/default-thumbnail.jpg" width={640} height={480} layout="responsive" />
                                            </div>
                                            <div className="rounded overflow-hidden" style={{ width: "120px", height: "120px", background: "#c4c0c0" }}>
                                                <Image src="/img/default-thumbnail.jpg" width={640} height={480} layout="responsive" />
                                            </div>
                                            <div className="rounded overflow-hidden" style={{ width: "120px", height: "120px", background: "#c4c0c0" }}>
                                                <Image src="/img/default-thumbnail.jpg" width={640} height={480} layout="responsive" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center my-4">
                                            <button className="border-danger rounded-pill py-2 px-5 bg-transparent text-danger overflow-hidden position-relative">
                                                Select Image
                                            <input type="file" className="position-absolute m-0" style={{ left: "-100px", top: 5, opacity: 0, cursor: "pointer" }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-end my-5">
                            <button className="bg-danger text-white border-0 rounded-pill px-5 py-2 me-3">Save</button>
                        </div>
                    </div>
                    {/* my order */}
                    <div className={profilStore.order == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="bg-white p-4 border rounded" style={{ minHeight: "550px" }}>
                            <h4 className="fw-bold">My order</h4>
                            <div className="d-flex my-4">
                                <button className={state.myOrder.allItem == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myOrder: {
                                            ...state.myOrder,
                                            allItem: true,
                                            noPaid: false,
                                            package: false,
                                            send: false,
                                            completed: false,
                                            orderCancel: false
                                        }
                                    })
                                }} >All items</button>
                                <button className={state.myOrder.noPaid == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myOrder: {
                                            ...state.myOrder,
                                            allItem: false,
                                            noPaid: true,
                                            package: false,
                                            send: false,
                                            completed: false,
                                            orderCancel: false
                                        }
                                    })
                                }} >All items</button>
                                <button className={state.myOrder.package == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myOrder: {
                                            ...state.myOrder,
                                            allItem: false,
                                            noPaid: false,
                                            package: true,
                                            send: false,
                                            completed: false,
                                            orderCancel: false
                                        }
                                    })
                                }} >Packed</button>
                                <button className={state.myOrder.send == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myOrder: {
                                            ...state.myOrder,
                                            allItem: false,
                                            noPaid: false,
                                            package: false,
                                            send: true,
                                            completed: false,
                                            orderCancel: false
                                        }
                                    })
                                }} >Sent</button>
                                <button className={state.myOrder.completed == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myOrder: {
                                            ...state.myOrder,
                                            allItem: false,
                                            noPaid: false,
                                            package: false,
                                            send: false,
                                            completed: true,
                                            orderCancel: false
                                        }
                                    })
                                }}>Completed</button>
                                <button className={state.myOrder.orderCancel == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={() => {
                                    setState({
                                        ...state, myOrder: {
                                            ...state.myOrder,
                                            allItem: false,
                                            noPaid: false,
                                            package: false,
                                            send: false,
                                            completed: false,
                                            orderCancel: true
                                        }
                                    })
                                }} >Order cancel</button>
                            </div>
                            <div className="w-100 h-100">
                                <div className="d-flex rounded-pill border p-2 mb-4" style={{ width: "300px" }}>
                                    <span className="material-icons color-gray me-2">search</span>
                                    <input type="text" className="border-0 w-100 my-auto" style={{ outline: "none" }} placeholder="search..." />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div style={{ width: "200px", height: "200px" }} className="my-5">
                                        <Image src="/img/order_null.png" width={184} height={190} layout="responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
