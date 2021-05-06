const initialstate = {
    myAcount: true,
    shippingAddress: false,
    myOrder: false
}

const Helper = (state = initialstate, action) => {
    switch (action.type) {
        case 'MYACOUNT':
            return {
                myAcount: true,
                shippingAddress: false,
                myOrder: false
            }
        case 'SHIPPING_ADDRESS':
            return {
                myAcount: false,
                shippingAddress: true,
                myOrder: false
            }
        case 'MYORDER':
            return {
                myAcount: false,
                shippingAddress: false,
                myOrder: true
            }
        default: return state
    }
}

export default Helper
