import { useNavigate } from "react-router-dom";
import useUser from "../../contexts/UserContext";
import Button from "../Button";
import StarRating from "./StarRating";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function DisplayedProductDetails({currentProduct}) {


    const {userData, dispatch} = useUser();
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const {id, image, name, price, discount, stock, rate, ratesCount, description, size, color} = currentProduct;
    const numericId = Number(id);
    const {t} = useTranslation();

    useEffect(() => {
        if(stock === 0) return;
        setCount(1);
    }, [stock]);

    const isProductInWishlist = useMemo(() => {
            if (!userData?.wishlist) return false;
            return userData?.wishlist.includes(numericId);
        }, [userData?.wishlist, numericId]);


    function handleBuyNowButton() {
        if(!userData) {
            navigate("/login");
            return;
        }
        if(userData?.cart?.[numericId]) {
            if(userData?.cart[numericId].quantity === stock) {
                navigate("/cart");
                return;
            };
            
            if(userData?.cart[numericId].quantity + count > stock) {
                dispatch({type: "INCREASE_QUANTITY_TO_MAX", payload: numericId});
            } else {
                dispatch({type: "INCREASE_QUANTITY_BY", payload: {id: numericId, count}});
            } 
        } else {
            dispatch({type: "ADD_TO_CART", payload: {id: numericId, image, name, price, discount, stock, quantity: count}})
        }
        navigate("/cart");
    }


    function handleWishlist() {
        // If user is not logged in, navigate to login page
        if(!userData) {
            navigate("/login");
            return;
        }
        dispatch({type: isProductInWishlist ? "REMOVE_FROM_WISHLIST" : "ADD_TO_WISHLIST", payload: numericId})
    }

    function handleIncreaseCount() {
        if (count < currentProduct.stock) {
            setCount((prevCount) => prevCount + 1);
        }
    }

    function handleDecreaseCount() {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <div className="text-sm flex items-center gap-4">
                    <StarRating rate={rate} ratesCount={ratesCount} reviewText={true}/>
                    <span>|</span>
                    {stock > 0 ? (
                        <span className="text-[#00FF66]">
                            {t("inStock")}
                        </span>
                    ) : (
                        <span className="text-[#ff0000]">
                            {t("outOfStock")}
                        </span>
                    )}
                </div>
                <span className="text-2xl font-inter">{discount && <span className="text-s-red line-through">${price}</span> } ${discount ? (price - (price * discount) / 100) : price}</span>
            </div>
            <p className="text-sm">{description}</p>
            <hr />
            <div className="flex flex-col gap-6 justify-center">
            <div className="flex gap-6">
                    <span className="text-xl">{t("colors")}:</span>
                    <div className="flex gap-2 items-center">
                        {
                            color?.map((colorOption, index) => {
                                const inputId = `color-${index}`
                                return (
                                <div key={inputId}>
                                    <input defaultChecked={index === 0} type="radio"  name="color"  id={inputId}  value={colorOption}  className="peer hidden" />
                                    <label htmlFor={inputId} style={{backgroundColor: colorOption}}  className="fcenter min-w-5 min-h-5 rounded-full p-1.5 text-sm font-medium cursor-pointer transition  peer-checked:border-3 peer-checked:border-black hover:bg-s-red hover:text-white"></label>
                                </div>
                            )})
                        }
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <span className="text-xl">{t("sizes")}:</span>
                    <div className="flex gap-4 items-center">
                        {
                            size?.map((sizeOption, index) => {
                                const inputId = `size-${index}`
                                return (
                                <div key={inputId}>
                                    <input defaultChecked={index === 0} type="radio"  name="size"  id={inputId}  value={sizeOption}  className="peer hidden" />
                                    <label htmlFor={inputId}  className="fcenter min-w-8 min-h-8 rounded-sm p-1.5 text-sm font-medium border border-black/50 cursor-pointer transition  peer-checked:bg-s-red peer-checked:text-white peer-checked:border-s-red hover:bg-s-red hover:text-white"> {sizeOption.toUpperCase()} </label>
                                </div>
                            )})
                        }
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 justify-between">
                    <div className="flex">
                        <button onClick={handleDecreaseCount} className="border border-black/50 w-10 h-11 fcenter text-black transition hover:bg-s-red hover:text-white hover:border-s-red rounded-tl-sm rounded-bl-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
                        <input className="w-20 h-11 text-center fcenter border-t border-b border-black/50 text-xl font-medium" readOnly type="number"value={count}/>
                        <button onClick={handleIncreaseCount} className="border border-black/50 w-10 h-11 fcenter text-black transition hover:bg-s-red hover:text-white hover:border-s-red rounded-tr-sm rounded-br-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V12M12 12V4M12 12H20M12 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
                    </div>
                    <Button disabled={currentProduct?.stock <= 0} onClick={handleBuyNowButton} moreClasses="!py-2.5">{t("buyNow")}</Button>
                    <button onClick={handleWishlist} className={`w-10 h-10 transition fcenter border border-black/50 hover:bg-s-red hover:text-white hover:border-s-red rounded-sm ${isProductInWishlist && "bg-s-red text-white border-s-red"}`}><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                </div>
            </div>
        </div>
    )
}