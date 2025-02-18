import { Link } from "react-router-dom";
import Input from "../Input";
import CheckoutCartDetails from "./CheckoutCartDetails";
import { useTranslation } from "react-i18next";

export default function Checkout() {

    const {t} = useTranslation();

    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-20">
                <nav className="flex gap-3 text-sm text-black/50">
                    <Link to="/">{t("topMenu.home")}</Link>
                    <span>/</span>
                    <Link to="/cart">{t("cart")}</Link>
                    <span>/</span>
                    <span className="text-black">{t("billing")}</span>
                </nav>
                <div>
                    <h2 className="text-4xl font-medium mb-12">{t("billingDetails")}</h2>
                    <div className="flex justify-between flex-col lg:flex-row gap-10">
                        <div className="flex flex-col gap-8 lg:max-w-[470px] w-full">
                            <Input labelClasses="opacity-40" container={true} label={t("firstName")} asterisk={true} type="text" />
                            <Input labelClasses="opacity-40" container={true} label={t("companyName")} type="text" />
                            <Input labelClasses="opacity-40" container={true} label={t("streetAddress")} asterisk={true} type="text" />
                            <Input labelClasses="opacity-40" container={true} label={t("addressDetailsHolder")} type="text" />
                            <Input labelClasses="opacity-40" container={true} label={t("townCity")} asterisk={true} type="text" />
                            <Input labelClasses="opacity-40" container={true} label={t("phone")} asterisk={true} type="text" />
                            <Input labelClasses="opacity-40" container={true} label={t("email")} asterisk={true} type="email" />
                            <label className="flex items-center gap-4">
                                <input className="accent-s-red w-6 h-6" type="checkbox" name="saveInfos" id="saveInfos" />{t("saveAddress")}
                            </label>
                        </div>
                        <div>
                            <CheckoutCartDetails />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
