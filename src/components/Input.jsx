
export default function Input({type, id, readOnly, label = null, placeholder, container = false, value = "", onChange = null, inputClasses = null, labelClasses = null, asterisk = false}) {
    return container ? (
        <div className="flex-1">
            {label && <label className={`block mb-2 ${labelClasses}`} htmlFor={id}>{label}{asterisk && <span className="text-s-red">*</span>}</label>}
            <input type={type} readOnly={readOnly} name={id} id={id}  className={`w-full py-3 px-4 rounded-sm bg-gray-100 ${inputClasses}`} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    ) : (
        <>
            {label && <label className={`mb-2 ${labelClasses}`} htmlFor={id}>{label}{asterisk && <span className="text-s-red">*</span>}</label>}
            <input type={type} readOnly={readOnly} name={id} id={id}  className={`w-full py-3 px-4 rounded-sm bg-gray-100 ${inputClasses}`} placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    )
}