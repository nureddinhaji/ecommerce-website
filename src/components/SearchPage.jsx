import { Link, useParams } from "react-router-dom";
import ProductsList from "./productsSection/ProductsList";
import { useTranslation } from "react-i18next";

export default function SearchPage() {

    const params = useParams();
    const search = params.search;
    const {t} = useTranslation();

    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-20">
                <nav className="flex gap-3 text-sm text-black/50">
                    <Link to="/">{t("topMenu.home")}</Link>
                    <span>/</span>
                    <span>{t("products")}</span>
                    <span  >/</span>
                    <span>{search}</span>
                </nav>
                <div>
                <ProductsList header={{subTitle: search.toUpperCase()}} category="search" search={search} count="all" />
                </div>
            </div>
        </main>
    )
}