import { Link, useNavigate } from "react-router-dom";
import useUser from "../../contexts/UserContext";
import Button from "../Button";
import { useEffect, useMemo } from "react";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import { useTranslation } from "react-i18next";

export default function Cart() {

    const {userData, dispatch} = useUser();
    const navigate = useNavigate();
    const {t} = useTranslation();

    // Calculate total
    const total = useMemo(() => {
        let total = 0;
        for(let id in userData?.cart) {

            const currentProduct = userData?.cart[id];
            const price = currentProduct.discount ? currentProduct.price - (currentProduct.price * currentProduct.discount) / 100 : currentProduct.price;

            total += userData?.cart[id].quantity * price;
        }
        return total;
    }, [userData?.cart]);

    // Function to go back to shop
    function handleBackToShopButton() {
        navigate("/");
    }

    // Function to checkout
    function handleCheckoutButton() {
        navigate("/cart/checkout");
    }

    // Function to increase quantity
    function increaseQuantity(id, stock) {
        const product = userData?.cart?.[id];
        if (product && product.quantity < stock) {
            dispatch({ type: "INCREASE_QUANTITY", payload: id });
        }
    }

    // Function to decrease quantity
    function decreaseQuantity(id) {
        const product = userData?.cart?.[id];
        if (product && product.quantity > 1) {
            dispatch({ type: "DECREASE_QUANTITY", payload: id });
        }
    }

    // Function to remove from cart
    function handleRemoveButton(id) {
        dispatch({type: "REMOVE_FROM_CART", payload: id});
    }

    // Redirect to login if user is not logged in
    useEffect(() => {
        if (!userData) {
            navigate('/login');
        }
    }, [userData, navigate]);

    if(!userData) return null;

    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-20">
                <nav className="flex gap-3 text-sm">
                    <Link className="text-black/50" to="/">
                        {t("topMenu.home")}
                    </Link>
                    <span className="text-black/50">/</span>
                    <span>{t("cart")}</span>
                </nav>
                <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-10">
                    <div className="py-6 px-10 flex justify-between gap-2 shadow-[0_1px_13px_0_#0000000D]">
                        <span className="flex-1 flex justify-start">{t("product")}</span>
                        <span className="flex-1 fcenter">{t("price")}</span>
                        <span className="flex-1 fcenter">{t("quantity")}</span>
                        <span className="flex-1 fcenter">{t("subtotal")}</span>
                    </div>
                    {
                        Object.values(userData?.cart).map((product, index) => {
                            return <CartProduct key={product.id + index} product={product} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} handleRemoveButton={handleRemoveButton}/>
                        })
                    }
                </div>
                <div className="flex gap-5 justify-between items-center flex-col sm:flex-row">
                    <Button background="bg-white" text="text-black" moreClasses="border border-black/50 hover:bg-s-red hover:border-s-red hover:text-white" onClick={handleBackToShopButton}>{t("returnToShop")}</Button>
                    <Button background="bg-white" text="text-black" moreClasses="border border-black/50 hover:bg-s-red hover:border-s-red hover:text-white">{t("updateCard")}</Button>
                </div>
                </div>
                <div className="flex justify-between flex-col gap-5 items-center lg:flex-row lg:items-start">
                    <div className="flex gap-4 flex-1 flex-col sm:flex-row">
                        <input type="text" className="w-full max-w-75 h-14 border border-black rounded-sm p-3" placeholder={t("enterCoupon")} />
                        <Button moreClasses="w-fit text-nowrap">{t("applyCoupon")}</Button>
                    </div>
                    <CartTotal total={total} handleCheckoutButton={handleCheckoutButton}/>
                </div>
                
            </div>
        </main>
    )
    
    
}