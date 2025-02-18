import { Link } from "react-router-dom";

// Import images
import parcode from "../images/parcode.webp";
import google from "../images/google-play.webp";
import appstore from "../images/app-store.webp";
import useUser from "../contexts/UserContext";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { user } = useUser();
    const { t } = useTranslation();

    return (
        <footer className="bg-black text-gray-50">
            <div className="pt-20 pb-[60px]">
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-2xl font-inter">Exclusive</h2>
                            <h3 className="text-xl font-medium">{t("subscribe")}</h3>
                            <p>{t("get10off")}</p>
                        </div>
                        <form className="flex gap-2 w-[217px] border-[1.5px] px-4 py-3 text-gray-50 border-gray-50 rounded-sm">
                            <input type="email" placeholder={t("enterEmail")} className="w-full" />
                            <button>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.91199 9.9998H2.99999L1.02299 2.1348C1.01033 2.0891 1.00262 2.04216 0.999989 1.9948C0.977989 1.2738 1.77199 0.773804 2.45999 1.1038L21 9.9998L2.45999 18.8958C1.77999 19.2228 0.995989 18.7368 0.999989 18.0288C1.00201 17.9655 1.01313 17.9029 1.03299 17.8428L2.49999 12.9998" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl">{t("support")}</h3>
                        <div className="flex flex-col gap-4">
                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl">{t("account")}</h3>
                        <div className="flex flex-col gap-4">
                            {user && <Link to="/myaccount/profile">{t("myAccount")}</Link>}
                            {!user && (
                                <Link to="/login">
                                    {t("login")} / {t("register")}
                                </Link>
                            )}
                            <Link to="/cart">{t("cart")}</Link>
                            <Link to="/wishlist">{t("wishlist")}</Link>
                            <Link to="/">{t("shop")}</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl">{t("quickLink")}</h3>
                        <div className="flex flex-col gap-4">
                            <Link to="/privacy-policy">{t("privacy")}</Link>
                            <Link to="/terms">{t("terms")}</Link>
                            <Link to="/faq">{t("faq")}</Link>
                            <Link to="/contact">{t("topMenu.contact")}</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl">{t("downloadApp")}</h3>
                        <div className="flex flex-col gap-4">
                            <p className="text-xs font-medium text-gray-50/70">{t("save3$")}</p>
                            <div className="flex gap-3">
                                <img className="w-20 h-20" src={parcode} alt="parcode" />
                                <div className="flex flex-col gap-1">
                                    <a className="py-[5px] px-[3px] w-[110px]">
                                        <img src={google} alt="google" />
                                    </a>
                                    <a className="py-[5px] px-[3px] w-[110px]">
                                        <img src={appstore} alt="appstore" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <a className="w-6 h-6 fcenter">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 7H10.5L10 9H6V18H4V9H0V7H4V5.128C4 3.345 4.186 2.698 4.534 2.046C4.87501 1.40181 5.40181 0.875009 6.046 0.534C6.698 0.186 7.345 0 9.128 0C9.65 0 10.108 0.0500001 10.5 0.15V2H9.128C7.804 2 7.401 2.078 6.99 2.298C6.686 2.46 6.46 2.686 6.298 2.99C6.078 3.401 6 3.804 6 5.128V7Z" fill="white" />
                                </svg>
                                <span className="hidden">Facebook</span>
                            </a>
                            <a className="w-6 h-6 fcenter">
                                <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.8">
                                    <path fill="#fff" fillRule="nonzero" d="M403 0h79L310 196l202 267H354L230 301 89 463H10l184-210L0 0h162l112 148L403 0zm-27 416h43L138 45H92l284 371z" />
                                </svg>
                                <span className="hidden">Twitter</span>
                            </a>
                            <a className="w-6 h-6 fcenter">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M15 1H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M15.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#fff" />
                                </svg>
                                <span className="hidden">Instagram</span>
                            </a>
                            <a className="w-6 h-6 fcenter">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z" fill="white" />
                                </svg>
                                <span className="hidden">Linkedin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-6 opacity-40 fcenter gap-1 border-t border-white/40 text-white/60">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50002 18.3332C14.1024 18.3332 17.8334 14.6022 17.8334 9.99984C17.8334 5.39746 14.1024 1.6665 9.50002 1.6665C4.89765 1.6665 1.16669 5.39746 1.16669 9.99984C1.16669 14.6022 4.89765 18.3332 9.50002 18.3332Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8.14799C12 8.14799 10.9706 6.6665 9.25492 6.6665C7.53924 6.6665 6.16669 8.14799 6.16669 9.99984C6.16669 11.8517 7.53924 13.3332 9.25492 13.3332C10.9706 13.3332 12 11.8517 12 11.8517" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t("copyRight")}
            </div>
        </footer>
    );
}
