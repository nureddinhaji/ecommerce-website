import { Link, useParams } from "react-router-dom";
import ProductsList from "./productsSection/ProductsList";
import { useTranslation } from "react-i18next";

export default function Products() {

    const params = useParams();
    const {t} = useTranslation();
    const category = params.category || "all";
    const subTitle = category === "all" ? t("all") : category;

    return(
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-20">
                <nav className="flex gap-3 text-sm">
                    <Link className="text-black/50" to="/">{t("topMenu.home")}</Link>
                    <span className="text-black/50">/</span>
                    <span>{t("products")}</span>
                    <span className="text-black/50">/</span>
                    <span>{subTitle.toUpperCase()}</span>
                </nav>
                <div>
                <ProductsList header={{subTitle: subTitle.toUpperCase()}} category={category} count="all" />
                </div>
            </div>
        </main>
    )
}