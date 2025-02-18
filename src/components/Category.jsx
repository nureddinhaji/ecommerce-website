import { Link } from "react-router-dom";

export default function Category({title, icon}) {
    return (
        <Link to={`/products/${title.toLowerCase()}`} className="a_special h-full w-42.5 fcenter gap-4 p-6 border border-black/30 flex-col transition-colors hover:bg-s-red hover:text-white hover:border-s-red hover:shadow-[0_1px_13px_0_#0000000D]">
            {icon}
            <h3 className="text-center">{title}</h3>
        </Link>
    )
}