import { useTranslation } from "react-i18next";
import useProducts from "../contexts/ProductsContext";
import useUser from "../contexts/UserContext";
import Button from "./Button";
import ProductsList from "./productsSection/ProductsList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {

    const {userData, dispatch} = useUser();
    const products = useProducts();
    const {t} = useTranslation("");
    const navigate = useNavigate();

    // Function to add all products in wishlist to cart
    function moveAllToCart() {
        userData?.wishlist?.forEach((id) => {
            // Check if cart already contains the product
            if(userData?.cart?.[id]) {
                dispatch({type: "INCREASE_QUANTITY", payload: id})
                
            } else {
                const currendtProduct = products.find((product) => product.id === id);
                dispatch({type: "ADD_TO_CART", payload: currendtProduct})
            }
        })
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
                <div className="flex flex-col gap-15">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl">{t("wishlist")} ({userData?.wishlist?.length})</h2>
                        <Button  background="bg-white" text="text-black" moreClasses="border border-black/50 hover:border-s-red hover:bg-s-red hover:text-white" onClick={moveAllToCart}>{t("moveAllToBag")}</Button>
                    </div>
                    <ProductsList showDisplayButton={false} showRemoveButton={true} isWishlist={true} showRates={false} category="wishlist" />
                </div>
                <ProductsList isWishlist={true} header={{subTitle: t("justForYou"), control: "button"}} category="notWishlist" count={4}/>
            </div>
        </main>
    )
}