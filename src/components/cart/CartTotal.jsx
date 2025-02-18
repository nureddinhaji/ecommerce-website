import { useTranslation } from "react-i18next";
import Button from "../Button";

export default function CartTotal({total, handleCheckoutButton}) {

    const {t} = useTranslation();

    return (
        <div className="flex flex-col gap-6 w-full max-w-[470px] rounded-sm border-[1.5px] border-black py-8 px-6">
            <h2 className="text-xl font-medium">{t("cartTotal")}</h2>
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
                <div className="fcenter">
                    <Button onClick={handleCheckoutButton}>{t("processToCheclout")}</Button>
                </div>
            </div>
        </div>
    );
}
