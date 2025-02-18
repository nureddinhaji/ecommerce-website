import { useMemo } from "react";
import useUser from "../../contexts/UserContext";
import StarRating from "./StarRating";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({product, showRates, isWishlist, showDisplayButton, showRemoveButton}) {

    const {id, image, name, price, discount, rate, ratesCount, stock} = product;
    const navigate = useNavigate();
    const {userData, dispatch} = useUser();
    const {t} = useTranslation()

    // Check if product is in wishlist and use useMemo to avoid unnecessary re-renders
    const isProductInWishlist = useMemo(() => {
        return userData?.wishlist?.includes(id)
    }, [userData, id]);

    // Function to handle wishlist button click and update wishlist.
    function handleWishlist() {
        // If user is not logged in, navigate to login page
        if(!userData) {
            navigate("/login");
            return;
        }
        dispatch({type: isProductInWishlist ? "REMOVE_FROM_WISHLIST" : "ADD_TO_WISHLIST", payload: id})
    }

    function addToCart() {
        if(!userData) {
            navigate("/login");
            return;
        }
        if(userData?.cart?.[id]) {
            if(userData?.cart[id].quantity < stock) {
                dispatch({type: "INCREASE_QUANTITY", payload: id});
                return;
            }
        }
        dispatch({type: "ADD_TO_CART", payload: {id, image, name, price, discount, stock, quantity: 1}});
    }

    return (
        <div className="flex flex-col gap-4 max-w-[270px]">
            <div className="group fcenter relative w-[270px] h-[250px] py-[39px] px-10 rounded-sm bg-gray-100 overflow-hidden">
                <img className="max-h-full" src={`/images/products/${image}`} alt={name} />
                <div className="absolute top-3 end-3 flex flex-col gap-2">
                {!isWishlist && <button onClick={handleWishlist} className={`w-[34px] aspect-square rounded-full fcenter transition-colors ${isProductInWishlist ? "bg-s-red text-white" : "bg-white text-black"} hover:bg-s-red hover:text-white`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>}
                {showRemoveButton && <button onClick={handleWishlist} className={`w-[34px] aspect-square rounded-full fcenter transition-colors bg-white text-black hover:bg-s-red hover:text-white`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="currentColor" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/></svg></button>}
                {showDisplayButton &&<button onClick={() => navigate(`/products/product/${id}`)} className="w-[34px] aspect-square rounded-full fcenter bg-white text-black transition-colors hover:bg-s-red hover:text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>}
                </div>
                { discount && <span className="absolute top-3 start-3 bg-s-red text-white px-3 py-1 rounded-sm text-xs fcenter">- {discount}%</span>}
                <button onClick={addToCart} className={`fcenter gap-2 absolute start-0 bottom-0 w-full py-2 transition bg-black hover:bg-s-red text-white font-medium ${!isWishlist && "translate-y-full group-hover:translate-y-0"}`}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.75 3.75H5.75L8 16.5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>{t("addToCart")}</button>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-medium"><Link to={`/products/product/${id}`}>{name}</Link></h3>
                <div>
                    <div className="flex gap-3 items-center"><span className="text-s-red font-medium">${discount ? price - (price * (discount / 100)) : price}</span>{discount ? <span className="text-black/50 font-medium line-through">${price}</span> : ""}</div>
                    {/* Star Rates From 1 to 5 */}
                    {showRates && <StarRating rate={rate} ratesCount={ratesCount} />}
                </div>
            </div>
        </div>
    )
}