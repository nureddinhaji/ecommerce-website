import { useTranslation } from "react-i18next";
import FaqSingle from "./FaqSingle"


export default function Faq() {

    const {i18n} = useTranslation();

    const faqs = i18n.language === "en" ? [
        {
            question: "How can I create an account?",
            answer: `To create an account, click on the "Sign Up" button at the top right corner of the homepage. Fill in your details and submit the form. You will receive a confirmation email to verify your account.`
        },
        {
            question: "How do I reset my password?",
            answer: `If you have forgotten your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions to reset your password.`
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. You can select your preferred payment method during the checkout process."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number on our website or the courier's website to track the status of your delivery."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return the item within 30 days of receipt for a full refund or exchange. Please ensure the product is in its original condition and packaging."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact our customer support team via email at support@exclusive.com or call us at +8801611112222. Our support team is available 24/7 to assist you with any queries or issues."
        },
        {
            question: "Can I change or cancel my order?",
            answer: "If you need to change or cancel your order, please contact our customer support team as soon as possible. If the order has not been processed or shipped, we will be able to accommodate your request."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination. You can find more information about international shipping during the checkout process."
        },
        {
            question: "How do I apply a discount code?",
            answer: `You can apply a discount code during the checkout process. Enter the code in the "Discount Code" field and click "Apply." The discount will be applied to your order total.`
        },
        {
            question: "What should I do if I receive a damaged or defective product?",
            answer: "If you receive a damaged or defective product, please contact our customer support team immediately. Provide your order number and a description of the issue, and we will arrange for a replacement or refund."
        }
    ] : [
        {
            "question": "كيف يمكنني إنشاء حساب؟",
            "answer": "لإنشاء حساب، انقر على زر \"التسجيل\" في الزاوية العلوية اليمنى من الصفحة الرئيسية. املأ بياناتك وأرسل النموذج. ستتلقى بريدًا إلكترونيًا لتأكيد الحساب للتحقق منه."
        },
        {
            "question": "كيف يمكنني إعادة تعيين كلمة المرور؟",
            "answer": "إذا نسيت كلمة المرور، انقر على رابط \"نسيت كلمة المرور\" في صفحة تسجيل الدخول. أدخل عنوان البريد الإلكتروني المسجل لدينا، وسنرسل لك تعليمات لإعادة تعيين كلمة المرور."
        },
        {
            "question": "ما هي طرق الدفع التي تقبلونها؟",
            "answer": "نقبل طرق دفع متنوعة، بما في ذلك بطاقات الائتمان/الخصم (فيزا، ماستركارد، أمريكان إكسبريس)، باي بال، والتحويلات البنكية. يمكنك اختيار طريقة الدفع المفضلة لديك أثناء عملية الدفع."
        },
        {
            "question": "كيف يمكنني تتبع طلبي؟",
            "answer": "بمجرد شحن طلبك، ستتلقى رقم تتبع عبر البريد الإلكتروني. يمكنك استخدام هذا الرقم على موقعنا أو موقع شركة الشحن لتتبع حالة التسليم."
        },
        {
            "question": "ما هي سياسة الإرجاع لديكم؟",
            "answer": "نقدم سياسة إرجاع لمدة 30 يومًا لمعظم المنتجات. إذا لم تكن راضيًا عن شرائك، يمكنك إرجاع المنتج خلال 30 يومًا من الاستلام لاسترداد كامل المبلغ أو استبداله. يرجى التأكد من أن المنتج في حالته الأصلية وعبوته."
        },
        {
            "question": "كيف يمكنني التواصل مع خدمة العملاء؟",
            "answer": "يمكنك التواصل مع فريق دعم العملاء عبر البريد الإلكتروني على support@exclusive.com أو الاتصال بنا على الرقم +8801611112222. فريق الدعم لدينا متاح على مدار الساعة لمساعدتك في أي استفسارات أو مشكلات."
        },
        {
            "question": "هل يمكنني تغيير أو إلغاء طلبي؟",
            "answer": "إذا كنت بحاجة إلى تغيير أو إلغاء طلبك، يرجى الاتصال بفريق دعم العملاء في أقرب وقت ممكن. إذا لم يتم معالجة الطلب أو شحنه بعد، سنتمكن من تلبية طلبك."
        },
        {
            "question": "هل تقدمون شحنًا دوليًا؟",
            "answer": "نعم، نقدم شحنًا دوليًا للعديد من الدول. قد تختلف تكاليف الشحن وأوقات التسليم حسب الوجهة. يمكنك العثور على مزيد من المعلومات حول الشحن الدولي أثناء عملية الدفع."
        },
        {
            "question": "كيف يمكنني تطبيق كود الخصم؟",
            "answer": "يمكنك تطبيق كود الخصم أثناء عملية الدفع. أدخل الكود في حقل \"كود الخصم\" وانقر على \"تطبيق\". سيتم تطبيق الخصم على إجمالي طلبك."
        },
        {
            "question": "ماذا أفعل إذا استلمت منتجًا تالفًا أو معيبًا؟",
            "answer": "إذا استلمت منتجًا تالفًا أو معيبًا، يرجى الاتصال بفريق دعم العملاء على الفور. قدم رقم طلبك ووصفًا للمشكلة، وسنقوم بترتيب استبدال المنتج أو استرداد المبلغ."
        }
    ];
    
    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-10">
                {faqs.map((faq) => (
                    <FaqSingle key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
                </div>
        </main>
    )
}