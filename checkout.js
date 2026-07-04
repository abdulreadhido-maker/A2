document.getElementById('checkout-form').addEventListener('submit', function(event) {
    // منع الصفحة من إعادة التحميل الافتراضية
    event.preventDefault();

    // جلب قيم المدخلات
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;

    // التحقق البسيط من البيانات
    if (fullName === "" || email === "") {
        alert("يرجى ملء جميع الحقول المطلوبة لضمان وصول المنتج إليك.");
        return;
    }

    // محاكاة عملية معالجة الدفع الآمن
    const submitButton = document.querySelector('.btn-submit-order');
    submitButton.disabled = true;
    submitButton.textContent = "جاري معالجة الدفع الآمن... ⏳";

    setTimeout(() => {
        alert(`شكراً لك يا ${fullName}! 🎉\nتمت عملية الدفع بنجاح عبر (${paymentMethod}).\nتم إرسال فاتورة الشراء وروابط التحميل إلى: ${email}`);
        
        // إعادة توجيه العميل إلى لوحة تحكم المشتريات الخاصة به بعد النجاح
        window.location.href = 'dashboard.html';
    }, 2000); 
});
