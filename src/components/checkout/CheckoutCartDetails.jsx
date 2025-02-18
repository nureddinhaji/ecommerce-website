import { useMemo } from "react";
import useUser from "../../contexts/UserContext";
import bkash from "../../images/bkash.webp";
import visa from "../../images/visa.webp";
import masterCard from "../../images/masterCard.webp";
import bank from "../../images/bank.webp";
import Button from "../Button";
import { useTranslation } from "react-i18next";

export default function CheckoutCartDetails() {

    const {userData} = useUser();
    const {t} = useTranslation();

    const total = useMemo(() => {
            let total = 0;
            for(let id in userData?.cart) {
    
                const currentProduct = userData?.cart[id];
                const price = currentProduct.discount ? currentProduct.price - (currentProduct.price * currentProduct.discount) / 100 : currentProduct.price;
    
                total += userData?.cart[id].quantity * price;
            }
            return total;
        }, [userData?.cart]);

    return(
        <div className="lg:max-w-[527px] w-full flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                {
                    Object.values(userData?.cart).map((product, index) => {
                        let price = 0;
                        if(product.discount) {
                            price = product.price - (product.price * product.discount) / 100;
                        } else {
                            price = product.price;
                        }
                        return (
                            <div key={index} className="flex justify-between items-center gap-4">
                                <div className="flex items-center gap-6">
                                    <img src={`/images/products/${product.image}`} alt={product.name} className="w-13.5 h-13.5 object-scale-down"/>
                                    <span>{product.name}</span>
                                </div>
                                <span>${price * product.quantity}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <span>{t("subtotal")}</span>
                    <span>${total}</span>
                </div>
                <hr />
                <div className="flex justify-between">
                    <span>{t("shipping")}</span>
                    <span>{t("free")}</span>
                </div>
                <hr />
                <div className="flex justify-between">
                    <span>{t("total")}</span>
                    <span>${total}</span>
                </div>
            </div>
            <div className="flex justify-between">
                <label className="flex items-center gap-4" htmlFor="bank"><input className="w-6 h-6 shrink-0" type="radio" name="payment" id="bank" />{t("bank")}</label>
                <div className="flex gap-2 items-center">
                    <div className="fcenter w-10.5 h-14"><img src={bkash} alt="bkash" /></div>
                    <div className="fcenter w-10.5 h-14"><img src={visa} alt="visa" /></div>
                    <div className="fcenter w-10.5 h-14"><img src={masterCard} alt="masterCard" /></div>
                    <div className="fcenter w-10.5 h-14"><img src={bank} alt="bank" /></div>
                </div>
            </div>
            <div>
                <label className="flex items-center gap-4" htmlFor="cash"><input className="w-6 h-6 shrink-0" type="radio" name="payment" id="cash" />{t("cashOnDelivery")}</label>
            </div>
            <div className="flex gap-4 items-center flex-col md:flex-row" >
                <input type="text" className="w-full max-w-75 h-14 border border-black rounded-sm p-3" placeholder={t("enterCoupon")} />
                <Button moreClasses="w-fit text-nowrap">{t("applyCoupon")}</Button>
            </div>
            <div><Button>{t("placeOrder")}</Button></div>
        </div>
    )
}