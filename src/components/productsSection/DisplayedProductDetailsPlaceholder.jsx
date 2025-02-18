import Button from "../Button";

export default function DisplayedProductDetailsPlaceholder() {
    return (
        <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4">
                        <h2 className="bg-gray-100 h-10 rounded-sm"></h2>
                        <div className="text-sm flex items-center gap-2">
                            <span className="bg-gray-100 h-5 w-[50%] rounded-sm"></span>
                            <span>|</span>
                            <span className="bg-gray-100 h-5 w-[25%] rounded-sm"></span>
                        </div>
                        <span className="bg-gray-100 h-8 w-[35%] rounded-sm"></span>
                    </div>
                    <p className="bg-gray-100 h-15 rounded-sm"></p>
                    <hr />
                    <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                    <span className="text-xl">Colors:</span>
                    <div className="flex gap-2 items-center">
                    <div><label className="fcenter min-w-5 min-h-5 rounded-full p-1.5 bg-gray-100"></label></div>
                    <div><label className="fcenter min-w-5 min-h-5 rounded-full p-1.5 bg-gray-100"></label></div>
                    <div><label className="fcenter min-w-5 min-h-5 rounded-full p-1.5 bg-gray-100"></label></div>
                    
                    </div>
                </div>
                        <div className="flex gap-6 items-center">
                    <span className="text-xl">Size:</span>
                    <div className="flex gap-4 items-center">
                    <div><label className="fcenter min-w-8 min-h-8 rounded-sm p-1.5 bg-gray-100"></label></div>
                    <div><label className="fcenter min-w-8 min-h-8 rounded-sm p-1.5 bg-gray-100"></label></div>
                    <div><label className="fcenter min-w-8 min-h-8 rounded-sm p-1.5 bg-gray-100"></label></div>
                    <div><label className="fcenter min-w-8 min-h-8 rounded-sm p-1.5 bg-gray-100"></label></div>
                    </div>
                </div>
                        <div className="flex items-center gap-4 justify-between">
                            <div className="flex">
                                <button className="border border-black/50 w-10 h-11 fcenter text-black transition hover:bg-s-red hover:text-white hover:border-s-red rounded-tl-sm rounded-bl-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
                                <input className="w-20 h-11 text-center fcenter border-t border-b border-black/50 text-xl font-medium" readOnly type="number" value={0}/>
                                <button className="border border-black/50 w-10 h-11 fcenter text-black transition hover:bg-s-red hover:text-white hover:border-s-red rounded-tr-sm rounded-br-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V12M12 12V4M12 12H20M12 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
                            </div>
                            <Button moreClasses="!py-2.5">Buy Now</Button>
                            <button className={`w-10 h-10 transition fcenter border border-black/50 hover:bg-s-red hover:text-white hover:border-s-red rounded-sm`}><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>
                    </div>
                </div>
    )
}