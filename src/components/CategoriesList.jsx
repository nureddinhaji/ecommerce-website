import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function CategoriesList({mainUlStyle, subUlStyle, mainLiStyle, subMenuArrow}) {

    const {t, i18n} = useTranslation();

    const categories = [
        { name: t("cats.womensFashion"), subcategories: [t("cats.jeans"), t("cats.shirts"), t("cats.sweaters"), t("cats.sweatshirts"), t("cats.jackets")], icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377 375c-10-9-14-11 13-45 25-31 55-72 43-146C420 99 359 0 255 0S90 99 77 184c-12 74 17 115 43 146 27 34 22 36 13 45s-65 60-60 82c0 0 29 47 149 55 25 1 48-2 68-7-22-23-52-60-53-87l4 9s40 75 129 79c90 4 91-58 7-131zm-122-39c-57 0-112-13-112-81 0-69 55-95 112-95s112 26 112 95c0 68-55 81-112 81z" className="fill-s-red"/></svg>) },
    
        { name: t("cats.mensFashion"), subcategories: [t("cats.jeans"), t("cats.shirts"), t("cats.sweaters"), t("cats.sweatshirts"), t("cats.jackets")], icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g className="fill-s-red"><path d="m62.24 47.76.02-.02a47.84 47.84 0 0 0-20.5-9.72A13.95 13.95 0 0 0 46 28a3 3 0 0 0 3-3v-2a3 3 0 0 0-1-2.22V12A12 12 0 0 0 36 0h-8a12 12 0 0 0-12 12v8.78A3 3 0 0 0 15 23v2a3 3 0 0 0 3 3c0 3.93 1.63 7.48 4.24 10.02a47.85 47.85 0 0 0-20.5 9.72l.02.02A5.98 5.98 0 0 0 0 52v8a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4v-8c0-1.66-.67-3.16-1.76-4.24zM20 28v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-2a4 4 0 0 1 4-4 5.99 5.99 0 0 0 5-2.69A5.99 5.99 0 0 0 34 15h6a4 4 0 0 1 4 4v2a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a12 12 0 0 1-24 0zm4.29 11.68a13.93 13.93 0 0 0 15.43 0c1.66.28 3.3.63 4.89 1.08a17.9 17.9 0 0 1-25.26.01c1.61-.46 3.26-.8 4.93-1.1z"/><path d="M24.54 21.86a1 1 0 0 0 1.34-.4c.03-.04.3-.46 1.12-.46.8 0 1.1.44 1.1.46a1 1 0 0 0 1.79-.92 3.21 3.21 0 0 0-2.9-1.54c-1.68 0-2.61.98-2.9 1.56a.98.98 0 0 0 .45 1.3zm10 0a1 1 0 0 0 1.34-.4c.03-.04.3-.46 1.12-.46.8 0 1.1.44 1.11.46a1 1 0 0 0 1.78-.92A3.21 3.21 0 0 0 37 19c-1.7 0-2.62.98-2.9 1.56a.98.98 0 0 0 .44 1.3z"/></g></svg>) },
    
        { name: t("cats.electronics"), icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M60 0H4C2 0 0 2 0 4v34h64V4c0-2-2-4-4-4zM0 40v4c0 2 2 4 4 4h24v10h-8c-2 0-4 2-4 4v1l1 1h30l1-1v-1c0-2-2-4-4-4h-8V48h24c2 0 4-2 4-4v-4H0zm32 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" className="fill-s-red"/></svg>) },
    
        { name: t("cats.homeLifestyle"), icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g className="fill-s-red"><path d="M16 34h6v6h-6zm26 0h6v6h-6z"/><path d="M63.2 29.8 34.4 1s-.9-1-2.4-1-2.4 1-2.4 1L20 10.6V5c0-.6-.4-1-1-1h-6a1 1 0 0 0-1 1v13.6L.8 29.8c-.6.5-.8 1.4-.8 2.2a3 3 0 0 0 3 3c.8 0 1.7-.3 2.2-.8l.8-.8V60a4 4 0 0 0 4 4h44a4 4 0 0 0 4-4V33.4l.8.8c.5.5 1.4.8 2.2.8a3 3 0 0 0 3-3c0-.8-.2-1.7-.8-2.2zM24 41c0 .6-.4 1-1 1h-8a1 1 0 0 1-1-1v-8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8zm14 21H26V47c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v15zm12-21c0 .6-.4 1-1 1h-8a1 1 0 0 1-1-1v-8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8zm11-8c-.3 0-.6 0-.8-.2L32.7 5.3a1 1 0 0 0-1.4 0L3.8 32.8c-.2.2-.5.2-.8.2a1 1 0 0 1-1-1c0-.3 0-.6.2-.8L31 2.4s.4-.4 1-.4 1 .4 1 .4l28.8 28.8c.2.2.2.5.2.8 0 .6-.4 1-1 1z"/></g></svg>) },
    
        { name: t("cats.medicine"), icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.7 486.7" className="fill-s-red"><path d="M200 257H60c-10 0-19 9-19 19v57c0 10 9 19 19 19h140c10 0 18-9 18-19v-57c0-10-8-19-18-19z"/><path d="M260 236c0-21-7-28-19-37a900 900 0 0 0-35-29v-43h10v-25c0-19-15-34-34-34H78c-19 0-35 15-35 34v25h10v43a903 903 0 0 0-35 29c-11 9-18 16-18 37v143c0 20 15 40 40 40h180c25 0 40-20 40-40V236zm-40 158H40c-11 0-15-9-15-15V236c0-10 0-10 9-17v-1l32-24c8-6 12-15 12-24v-43h103v43c0 9 5 18 13 24l31 25h1c8 7 9 7 9 17v143c0 6-4 15-15 15zm227-70H326a43 43 0 0 0 0 86h121c22-2 40-21 40-43s-18-41-40-43zm-121 71a28 28 0 0 1 0-56h60v56h-60zm1-76 10-1 116-35a42 42 0 0 0 28-53 42 42 0 0 0-53-29l-116 35c-21 8-32 31-25 53 5 18 21 30 40 30zm105-104a28 28 0 1 1 16 54l-57 17-16-54 57-17z"/></svg>) },
    
        { name: t("cats.sports") + " & " + t("cats.outdoor"), icon:(<svg width="24px" height="24px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g className="fill-s-red"><path d="M20.2 2.3c-4 1.5-7.6 3.9-10.8 7l-.6.6c1.4 3.9 3.2 7.6 5.3 11.2a32 32 0 0 0 6-18.8zm43.6 26.4A32 32 0 0 0 33 41.5 65.6 65.6 0 0 0 57 52a32 32 0 0 0 6.8-23.3zM27 63.6a32 32 0 0 0 28.5-10 64.9 64.9 0 0 1-23.6-10.5A32 32 0 0 0 27 63.6zM12.8 22.8c-2.2-3.6-4-7.3-5.5-11.2C2.4 17.6 0 24.8 0 32a32 32 0 0 0 12.8-9.2zm1.1 1.7A33.7 33.7 0 0 1 0 34.1C.6 41.6 3.7 49 9.4 54.6v.1A76.8 76.8 0 0 1 20 32.5a67.8 67.8 0 0 1-6.1-8z"/><path d="M30.2 42c-2.6-2-5-4.1-7.4-6.5L21.4 34A65.6 65.6 0 0 0 11 56.2c4.1 3.6 8.9 6 13.9 7A34 34 0 0 1 30.2 42zm-7.6-9.6 1.6 1.7c2.3 2.3 4.7 4.3 7.2 6.2a34.1 34.1 0 0 1 32.1-13.7c-1-6.2-4-12.2-8.7-17a65.7 65.7 0 0 0-32.2 22.8z"/><path d="M15.2 22.9c1.8 2.8 3.8 5.4 6 8a68.5 68.5 0 0 1 32-23 32 32 0 0 0-31-6.3c.1 7.5-2.2 15-7 21.3z"/></g></svg>) },
    
        { name: t("cats.baby") + " & " + t("cats.toys"), icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g className="fill-s-red"><path d="M4 60a4 4 0 0 0 4 4h20V32H4v28zM24 4a4 4 0 0 0 0 8h4V8a4 4 0 0 0-4-4zm2 6h-2a2 2 0 1 1 2-2v2zm14 2a4 4 0 1 0-4-4v4h4zm-2-4a2 2 0 1 1 2 2h-2V8zm-2 56h20a4 4 0 0 0 4-4V32H36v32zm-6-32h4v32h-4z"/><path d="M60 14H45.3A8 8 0 0 0 40 0a8 8 0 0 0-8 8 8 8 0 1 0-13.3 6H4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h24V14h-4a6 6 0 1 1 6-6v22h4V8a6 6 0 1 1 6 6h-4v16h24a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4z"/></g></svg>) },
    
        { name: t("cats.groceries") + " & " + t("cats.pets"), icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.9 477.9" className="fill-s-red"><path d="M392 170c-75-53-137 18-152 18h-2c-15 0-77-71-152-18-75 54-18 308 124 308h58c142 0 199-254 124-308z"/><path d="M243 167c21-9 137-113 62-160-70-42-89 109-78 150 0 5 9 10 16 10z"/></svg>) },
        
        { name: t("cats.health") + " & " + t("cats.beauty"), icon:(<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.3 476.3" className="fill-s-red"><path d="M453.9 74.9c-20.4-26.8-52.5-42.2-98.2-47.1a140.7 140.7 0 0 0-117.6 48.6 140.7 140.7 0 0 0-117.6-48.6c-45.6 4.9-77.7 20.3-98 47-20.3 26.6-26.9 62.6-19.7 107a150.2 150.2 0 0 0 21 51.8h67.4l7.1-113a18.6 18.6 0 0 1 36.3-4.7l53.7 163.5L218 161.3c2.1-8.3 9.5-14 18-14h.1c8.5 0 15.9 5.6 18 13.8l19 72.4 17.2-28a18.6 18.6 0 0 1 28.5-4l19.7 18h35a18.6 18.6 0 0 1 0 37.3h-42.3c-4.6 0-9.1-1.8-12.5-5l-8.4-7.6-28.2 46a18.6 18.6 0 0 1-34-5l-11.6-44.5-27.8 110.2a18.6 18.6 0 0 1-35.8 1.2l-43.4-132.4-2.2 33.7a18.6 18.6 0 0 1-18.6 17.5H50.2c32.3 40.4 75.7 81.2 113.8 117l1.5 1.5a1170 1170 0 0 1 45.4 44.1c1.4 1.6 14.2 15.6 28.2 15.6 14.1 0 26.6-14.2 27.8-15.6 11.2-12 29.3-29.3 47.2-46.2 66.3-63 148.9-141.2 159.3-205.4 7.3-44.5.7-80.4-19.5-107z"/></svg>) }
    ];

    return (
        <ul className={mainUlStyle}>
            {categories.map((category) => (
                <li key={category.name} className={mainLiStyle}>
                    <Link className="flex items-center gap-2 flex-1" to={`/products/${category.name}`}>{category.icon}{category.name}</Link>
                    {category.subcategories && (
                        <>
                        {subMenuArrow && <svg className={i18n.language === "ar" ? "rotate-180" : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="currentColor"/></svg>}
                            <ul className={subUlStyle}>
                                {category.subcategories.map((sub, index) => (
                                    <li key={index}>
                                        <Link to={`/products/${sub.toLowerCase()}`}>{sub}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
