import React, {useState} from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import {useDispatch, useSelector} from 'react-redux'
export default function Profil() {
    const dispatch = useDispatch()
    const { myAcount, shippingAddress, myOrder } = useSelector(state=>state.Helpers)
    const [state, setState] = useState({
        toggleModal: false,
        linkSideBar : {
            myAcount : true,
            shippingAddress : false,
            myOrder : false
        },
        myOrder:{
            allItem:true,
            noPaid:false,
            package:false,
            send:false,
            completed:false,
            orderCancel:false
        }
    })
    return (
        <div style={{ paddingTop: "10rem", background: "#F5F5F5", minHeight:"100vh" }}>
            <div className="hide-sm show-lg">
                <div className="d-flex justify-content-end px-4 bg-white" style={{ position: "fixed", top: 0, left: 0, width: "450px", height: "100vh", paddingTop: "10rem" }}>
                    <div className="me-5">
                        <div className="d-flex mb-5">
                            <div className="rounded-circle me-3 overflow-hidden" style={{ width: "60px", height: "60px" }}>
                                <Image src="/img/default.png" width={80} height={80} layout="responsive" />
                            </div>
                            <div className="align-self-center">
                                <p className="fw-bold m-0 mb-1">Aditya Pratama</p>
                                <button className="d-flex bg-transparent border-0">
                                    <span class="material-icons color-gray me-2" style={{ fontSize: "20px" }}>mode_edit</span>
                                    <p className="color-gray m-0 my-auto">Ubah Profil</p>
                                </button>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <span className="material-icons text-white rounded-circle p-2 me-3" style={{ background: "#456BF3" }}>person_outline</span>
                            <button className={myAcount == true ? "m-0 my-auto fs-6 fw-bold hover-danger bg-transparent border-0 text-danger" : "m-0 my-auto fs-6 fw-bold hover-danger bg-transparent border-0"} onClick={()=>{
                                setState({...state, linkSideBar : {...state.linkSideBar, myAcount:true, shippingAddress:false, myOrder:false}}) 
                                dispatch({type:"MYACOUNT"}) }} >my acount</button>
                        </div>
                        <div className="d-flex mb-4">
                            <span className="material-icons text-white rounded-circle p-2 me-3" style={{ background: "#F36F45" }}>location_on</span>
                            <button className={shippingAddress == true ? "m-0 my-auto fs-6 fw-bold hover-danger bg-transparent border-0 text-danger" : "m-0 my-auto fs-6 fw-bold hover-danger bg-transparent border-0"} onClick={()=>{
                                setState({...state, linkSideBar : {...state.linkSideBar, shippingAddress:true, myAcount:false, myOrder:false}}) 
                                dispatch({type:"SHIPPING_ADDRESS"}) }}>Shipping Adrress</button>
                        </div>
                        <div className="d-flex mb-4">
                            <span className="material-icons text-white rounded-circle p-2 me-3" style={{ background: "#F3456F" }}>mode_edit</span>
                            <button className={myOrder == true ? "m-0 my-auto fs-6 fw-bold hover-danger bg-transparent border-0 text-danger" : "m-0 my-auto fs-6 fw-bold hover-danger bg-transparent border-0"} onClick={()=>{
                                setState({...state, linkSideBar : {...state.linkSideBar, myOrder:true, shippingAddress:false, myAcount:false}}) 
                                dispatch({type:"MYORDER"}) }}>My order</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {/* component user profil */}
                    <div className={myAcount == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="bg-white p-4 border rounded" style={{minHeight:"550px"}}>
                            <h4 className="fw-bold">My Profile</h4>
                            <p className="color-gray m-0 pb-3 border-bottom">Manage your profile information</p>
                            <div className="row mt-3">
                                <div className="col-12 col-md-7">
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4 my-auto">Name</label>
                                        <input type="text" placeholder="write your name..." className="p-2 border rounded" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4 my-auto">Email</label>
                                        <input type="text" placeholder="write your Email..." className="p-2 border rounded" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <label htmlFor="input" className="me-4 my-auto">Phone Number</label>
                                        <input type="text" placeholder="write your password..." className="p-2 border rounded" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <p className="me-4 my-auto m-0">Gender</p>
                                        <div className="d-flex justify-content-start" style={{ outline: "none", width: "70%" }}  >
                                            <div className="d-flex me-4">
                                                <input type="radio" id="male" className="p-2 border rounded me-3 align-self-center" value="male" />
                                                <label htmlFor="male" className="my-auto">Laki Laki</label>
                                            </div>
                                            <div className="d-flex">
                                                <input type="radio" id="female" className="p-2 border rounded me-3 align-self-center" value="female" />
                                                <label htmlFor="female" className="my-auto">Perempuan</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-4">
                                        <label htmlFor="input" className="me-4 my-auto">Date of Birth</label>
                                        <input type="date" placeholder="write your name..." className="p-2 border rounded form-control" style={{ outline: "none", width: "70%" }} />
                                    </div>
                                    <div className="w-100 d-flex justify-content-end mb-3">
                                        <div className="d-flex justify-content-start" style={{width: "70%" }}>
                                            <button className="bg-danger text-white border-0 rounded-pill px-5 py-2 me-3">Save</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-12 col-md-5 my-auto">
                                    <div className="rounded-circle overflow-hidden mx-auto" style={{width:"100px", height:"100px"}}>
                                        <Image src="/img/default.png" width={100} height={100} layout="responsive" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="border-danger rounded-pill py-2 px-5 bg-transparent text-danger overflow-hidden position-relative my-4">
                                            Select Image
                                            <input type="file" className="position-absolute" style={{left:"-100px", top:5, opacity:0, cursor:"pointer"}} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* shipping address */}
                    <div className={shippingAddress == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="bg-white p-4 border rounded" style={{minHeight:"550px"}}>
                            <h4 className="fw-bold">Choose another address</h4>
                            <p className="color-gray m-0 pb-3 border-bottom">Manage your shipping address</p>
                            <div className="px-4 py3">
                                <button className="color-gray w-100 py-4 bg-transparent rounded my-4" style={{border:"3px dashed #9B9B9B"}} onClick={()=>{setState({...state, toggleModal:true})}} >Add new address</button>
                                <div className="p-3 border border-danger rounded">
                                    <p className="fw-bold">Andreas Jane</p>
                                    <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                    <a className="fw-bold text-danger">Change address</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={myOrder == true ? "col-12 col-lg-8 ms-auto" : "hide"}>
                        <div className="bg-white p-4 border rounded" style={{minHeight:"550px"}}>
                            <h4 className="fw-bold">My order</h4>
                            <div className="d-flex my-4">
                                <button className={state.myOrder.allItem == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={()=>{
                                    setState({...state, myOrder:{
                                        ...state.myOrder, 
                                        allItem:true,
                                        noPaid:false,
                                        package:false,
                                        send:false,
                                        completed:false,
                                        orderCancel:false
                                        }})}} >All items</button>
                                <button className={state.myOrder.noPaid == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={()=>{
                                    setState({...state, myOrder:{
                                        ...state.myOrder, 
                                        allItem:false,
                                        noPaid:true,
                                        package:false,
                                        send:false,
                                        completed:false,
                                        orderCancel:false
                                        }})}} >All items</button>
                                <button className={state.myOrder.package == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={()=>{
                                    setState({...state, myOrder:{
                                        ...state.myOrder, 
                                        allItem:false,
                                        noPaid:false,
                                        package:true,
                                        send:false,
                                        completed:false,
                                        orderCancel:false
                                        }})
                                }} >Packed</button>
                                <button className={state.myOrder.send == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={()=>{
                                    setState({...state, myOrder:{
                                        ...state.myOrder, 
                                        allItem:false,
                                        noPaid:false,
                                        package:false,
                                        send:true,
                                        completed:false,
                                        orderCancel:false
                                        }})
                                }} >Sent</button>
                                <button className={state.myOrder.completed == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={()=>{
                                    setState({...state, myOrder:{
                                        ...state.myOrder, 
                                        allItem:false,
                                        noPaid:false,
                                        package:false,
                                        send:false,
                                        completed:true,
                                        orderCancel:false
                                        }})
                                }}>Completed</button>
                                <button className={state.myOrder.orderCancel == true ? "bg-transparent me-4 hover-danger border-0 fw-bold text-danger" : "bg-transparent me-4 hover-danger border-0 fw-bold"} onClick={()=>{
                                    setState({...state, myOrder:{
                                        ...state.myOrder, 
                                        allItem:false,
                                        noPaid:false,
                                        package:false,
                                        send:false,
                                        completed:false,
                                        orderCancel:true
                                        }})
                                }} >Order cancel</button>
                            </div>
                            <div className="w-100 h-100">
                                <div className="w-100 h-100" style={{background:"blue", color:"white"}}>
                                    <h1>kalau mau atur komponen ini, manfaatin state myorder untuk pengkondisiannya</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={state.toggleModal}
                className="modalPositionAndSizeConfig"
                overlayClassName="modalOverLayConfig"
                closeTimeoutMS={400}
                ariaHideApp={false}
            >
                <div className="w-100 d-flex mb-4"><span className="material-icons ms-auto hover-danger c-pointer" onClick={()=>{setState({...state, toggleModal:false})}} >close</span></div>
                <div>
                    <h3 className="fw-bold text-center mb-4">Add new address</h3>
                    <div className="my-2">
                        <label className="color-gray">Save address as (ex : home address, office address)</label>
                        <input type="text" className="w-100 border p-2" style={{outline:"nonde"}} />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="name" className="color-gray mb-2">Recipient’s name</label>
                            <input type="text" className="p-2 border rounded w-100" style={{outline:"nonde"}} />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="name" className="color-gray mb-2">Recipient's telephone number</label>
                            <input type="text" className="p-2 border rounded w-100" style={{outline:"nonde"}} />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="name" className="color-gray mb-2">Address</label>
                            <input type="text" className="p-2 border rounded w-100" style={{outline:"nonde"}} />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="name" className="color-gray mb-2">Postal code</label>
                            <input type="text" className="p-2 border rounded w-100" style={{outline:"nonde"}} />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="name" className="color-gray mb-2">City or Subdistrict</label>
                            <input type="text" className="p-2 border rounded w-100" style={{outline:"nonde"}} />
                        </div>
                        <div className="col-12 my-2">
                            <input type="checkbox" className="me-2" />
                            <label htmlFor="name" className="color-gray">Make it the primary address</label>
                        </div>
                        <div className="col-12 my-2">
                            <div className="d-flex justify-content-end">
                                <div>
                                    <button className="bg-danger text-white border-0 rounded-pill px-5 py-2 me-3">Save</button>
                                    <button className="border-danger rounded-pill py-2 px-5 bg-transparent text-danger overflow-hidden">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <style jsx>{`
                .link-Side-bar:ho{
                    
                }
            `}
            </style>
        </div>
    )
}

