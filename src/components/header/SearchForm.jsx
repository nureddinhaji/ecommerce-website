import { useState } from "react";
import useProducts from "../../contexts/ProductsContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Search() {
    const products = useProducts();

    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const {t} = useTranslation();

    function linkClick(e, id) {
        e.preventDefault();
        navigate(`/products/product/${id}`);
        setSearchValue("");
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        navigate(`/products/search/${searchValue}`);
        setSearchValue("");
    }

    return (
        <div className="flex justify-between py-[7px] ps-5 pe-3 bg-gray-100 rounded-sm w-full lg:w-[243px] relative">
            <form className="flex justify-between w-full" onSubmit={handleSubmitForm}>
                <input className="text-3 w-full" type="text" placeholder={t("searchHolder")} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button className="w-6 h-6 fcenter">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </form>
            {searchValue && (
                <div className="absolute top-full start-0 bg-white z-20 p-4 max-h-[250px] w-full overflow-y-auto flex flex-col gap-2">
                    {products
                        .filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(product => (
                            <Link key={product.id} onClick={e => linkClick(e, product.id)} className="">
                                {product.name}
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
}
