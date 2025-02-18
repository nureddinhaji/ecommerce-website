import { Link } from "react-router-dom";

export default function CartProduct({product, increaseQuantity, decreaseQuantity, handleRemoveButton, index}) {

    const price = product.discount 
        ? product.price - (product.price * product.discount) / 100 
        : product.price;

    return (

                <div className="group py-6 px-10 flex justify-between gap-2 shadow-[0_1px_13px_0_#0000000D] flex-col sm:flex-row" key={product.id + index}>
                    <div className="flex-1 flex gap-2 items-center justify-start">
                        <div className="relative w-[54px] h-[54px] fcenter">
                        <img src={`/images/products/${product.image}`} alt={product.name} />
                        <button onClick={() => handleRemoveButton(product.id)} className="flex md:hidden md:group-hover:flex absolute top-0 start-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="#DB4444"/><path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>
                        <Link to={`/products/product/${product.id}`}>{product.name}</Link>
                    </div>
                    <span className="flex-1 fcenter gap-2">{product.discount ? (
                        <><span className="line-through text-s-red">${product.price}</span><span>${price}</span></>) : "$" +price}</span>
                    <div className="flex-1 fcenter">
                        <div className="flex border-[1.5px] border-black/40 rounded-sm py-1.5 px-3 w-18 h-11">
                            <span className="flex-1 fcenter">{product.quantity}</span>
                            <div className="flex flex-col justify-between">
                                <button onClick={() => increaseQuantity(product.id, product.stock)}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="currentColor"/></svg></button>
                                <button onClick={() => decreaseQuantity(product.id)}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z" fill="currentColor"/></svg></button>
                            </div>
                        </div>
                    </div>
                    <span className="flex-1 fcenter gap-2">{product.discount ? (
                        <><span className="line-through text-s-red">${product.price * product.quantity}</span><span>${price * product.quantity}</span></>) : "$" + price * product.quantity}</span>
                </div>
    )
    
}