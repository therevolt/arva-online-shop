const initialstate = {
    myAcount: true,
    shippingAddress: false,
    myOrder: false,
    profilStore: {
        store: true,
        product: false,
        sellingProduct: false,
        order: false
    }
}

const Helper = (state = initialstate, action) => {
    switch (action.type) {
        case 'MYACOUNT':
            return {
                ...state,
                myAcount: true,
                shippingAddress: false,
                myOrder: false
            }
        case 'SHIPPING_ADDRESS':
            return {
                ...state,
                myAcount: false,
                shippingAddress: true,
                myOrder: false
            }
        case 'MYORDER':
            return {
                ...state,
                myAcount: false,
                shippingAddress: false,
                myOrder: true
            }
        case 'OPEN_STORE':
            return {
                ...state,
                profilStore: {
                    store: true,
                    product: false,
                    sellingProduct: false,
                    order: false
                }
            }
        case 'OPEN_PRODUCT':
            return {
                ...state,
                profilStore: {
                    store: false,
                    product: true,
                    sellingProduct: false,
                    order: false
                }
            }
        case 'OPEN_SELLING_PRODUCT':
            return {
                ...state,
                profilStore: {
                    store: false,
                    product: false,
                    sellingProduct: true,
                    order: false
                }
            }
        case 'OPEN_ORDER':
            return {
                ...state,
                profilStore: {
                    store: false,
                    product: false,
                    sellingProduct: false,
                    order: true
                }
            }
        default: return state
    }
}

export default Helper
