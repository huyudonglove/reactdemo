
const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ],
    ss:function () {
        console.log(1111111111)
    }
}
export default function(state=initialState, action) {

    switch (action.type) {
        case ADD_TO_CART: {
            return {

                cart: [...state.cart, action.payload],
                ss:state.ss()
            }
        }

        default:
            let a= state;
            return a;
    }
}
export const ADD_TO_CART = 'ADD_TO_CART';
export function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}
