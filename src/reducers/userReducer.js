
export const initialUserState = {
    user: null,
    userData: {
        fname: "",
        lname: "",
        address: "",
        wishlist: [],
        cart: {}
    },
    isLoading: true,
};

export default function userReducer(state, action) {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload};
        case "SET_USER_DATA":
            return { ...state, userData: action.payload };
        case "ADD_TO_WISHLIST":
            return { ...state, userData: { ...state.userData, wishlist: [...state.userData.wishlist, action.payload] } };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, userData: { ...state.userData, wishlist: state.userData.wishlist.filter(item => item !== action.payload) } };
        case "REMOVE_ALL_FROM_WISHLIST":
            return { ...state, userData: { ...state.userData, wishlist: [] } };
        case "ADD_TO_CART":
            {
                const newCart = { ...state.userData.cart, [action.payload.id]: action.payload };
                return { ...state, userData: { ...state.userData, cart: {...newCart} } };
            }
        case "REMOVE_FROM_CART":{
            // Destructure and exclude the item from cart
            const { [action.payload]: removedItem, ...newCart } = state.userData.cart;
            return { 
                ...state, 
                userData: { 
                    ...state.userData, 
                    cart: newCart 
                } 
            };
        }
        case "INCREASE_QUANTITY":
            return {...state, userData: {...state.userData, cart: {...state.userData.cart, [action.payload]: {...state.userData.cart[action.payload], quantity: state.userData.cart[action.payload].quantity + 1}}}}
        case "INCREASE_QUANTITY_TO_MAX":
            return {...state, userData: {...state.userData, cart: {...state.userData.cart, [action.payload]: {...state.userData.cart[action.payload], quantity: state.userData.cart[action.payload].stock}}}}
        case "INCREASE_QUANTITY_BY":
            return {...state, userData: {...state.userData, cart: {...state.userData.cart, [action.payload.id]: {...state.userData.cart[action.payload.id], quantity: state.userData.cart[action.payload.id].quantity + action.payload.count}}}}
        case "DECREASE_QUANTITY":
            return {...state, userData: {...state.userData, cart: {...state.userData.cart, [action.payload]: {...state.userData.cart[action.payload], quantity: state.userData.cart[action.payload].quantity - 1}}}}
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

