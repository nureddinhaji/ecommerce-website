import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import useProducts from "../../contexts/ProductsContext";
import Button from "../Button";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import CarouselButtons from "./CarouselButtons";
import useUser from "../../contexts/UserContext";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductsList({showRates = true, isWishlist = false, showDisplayButton = true, showRemoveButton = false, header = {}, category, count, currentProductId = null, search = null, productPage = false}) {

    const {mainTitle, subTitle, control, timer} = header;

    const {userData} = useUser();    
    const navigate = useNavigate()
    const products = useProducts();
    const {t, i18n} = useTranslation();
    

    // Filter products based on category
    const displayProducts = useMemo(() => {
        if (!products.length) return [];
    
        switch (category) {
            case "flash sales":
                return products.filter((product) => product.discount !== null).slice(0, count === "all" ? undefined : count);
            case "best sales":
                return [...products].sort((a, b) => b.ratesCount - a.ratesCount).slice(0, count);
            case "wishlist":
                return products.filter((product) => userData.wishlist.includes(product.id)).slice(0, count === "all" ? undefined : count);
            case "notWishlist":
                return products.filter((product) => !userData.wishlist.includes(product.id)).slice(0, count === "all" ? undefined : count);
            case "search":
                return products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())).slice(0, count === "all" ? undefined : count);
            case "all":
            case "":
                return products.slice(0, count === "all" ? undefined : count);
            default:{
                if(!productPage) return products.filter((product) => product.categories.includes(category)).slice(0, count === "all" ? undefined : count);

                const filteredProducts = products.filter((product) => product.categories.includes(category) && product.id != currentProductId).slice(0, count === "all" ? undefined : count);

                if(filteredProducts.length) {
                    return filteredProducts
                } else {
                    return products.slice(0, count === "all" ? undefined : count);
                }
            }
        }
    }, [products, category, count, userData?.wishlist, currentProductId, search, productPage]);

    if(displayProducts.length === 0 && category !== "wishlist") {
        return (
            <div className="flex flex-col gap-15 mb-15">
                <SectionHeader mainTitle= {mainTitle} subTitle = {subTitle} control= {control} timer = {timer} />
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-semibold">{t("noProducts")}</h2>
                </div>
            </div>
        )
    }

    const responsiveConfig = {
        desktop: { breakpoint: { max: Number.MAX_SAFE_INTEGER, min: 1185 }, items: 4 },
        tablet: { breakpoint: { max: 1185, min: 990 }, items: 3 },
        mobile2: { breakpoint: { max: 990, min: 765 }, items: 2 },
        mobile1: { breakpoint: { max: 765, min: 0 }, items: 1 },
    };

    return (
        <div className="flex flex-col gap-15 mb-15 relative">
            {category !== "wishlist" && <SectionHeader mainTitle={mainTitle} subTitle={subTitle} control={control} timer={timer} />}
            {control === "carousel" ? (<Carousel infinite={true} rtl={i18n.language === "ar"} itemClass="flex justify-center" renderButtonGroupOutside={true} customButtonGroup={<CarouselButtons />} arrows={false} responsive={responsiveConfig}>
                {displayProducts.map((item) => (<ProductCard showDisplayButton={showDisplayButton} showRemoveButton={showRemoveButton} isWishlist={isWishlist} showRates={showRates} key={item.id} product={item}/>))}</Carousel>) : (
                    <div className="flex gap-[30px] flex-wrap justify-around lg:justify-start">
                    {displayProducts.map((item) => (
                        <ProductCard showDisplayButton={showDisplayButton} showRemoveButton={showRemoveButton} isWishlist={isWishlist} showRates={showRates} key={item.id} product={item} />
                    ))}
                </div>
                )}
            {
                control === "carousel" && <Button moreClasses="self-center" onClick={() => navigate("/products/all")}>{t("viewAllProducts")}</Button>
            }
        </div>
    );
}
