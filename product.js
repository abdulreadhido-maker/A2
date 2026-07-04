// 1. إدارة تباين الأسعار والباقات
const priceCards = document.querySelectorAll('.price-card');
const buyNowBtn = document.getElementById('buy-now-btn');

priceCards.forEach(card => {
    card.addEventListener('click', () => {
        // إزالة الفئة النشطة من الجميع وإضافتها للكارت المختار
        priceCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // جلب بيانات الباقة المختارة من الـ Data Attributes
        const selectedPrice = card.getAttribute('data-price');
        const selectedLicense = card.getAttribute('data-license');

        // تحديث نص زر الشراء ديناميكياً
        buyNowBtn.textContent = `شراء الرخصة ${selectedLicense} بـ (${selectedPrice} $) الآن 💳`;
    });
});

// 2. محرك المراجعات الوهمية (Social Proof) لزيادة الثقة
const mockReviews = [
    { name: "أحمد المولد", rating: 5, comment: "قالب رائع جداً وفر عليّ الكثير من الوقت في مشروعي الأخير. الكود نظيف جداً وسهل التعديل.", date: "منذ يومين" },
    { name: "سارة القحطاني", rating: 4, comment: "التصميم ممتاز ومريح للعين، والدعم الفني كان سريعاً في الرد على استفساري الخاص بالـ Dark Mode.", date: "منذ أسبوع" }
];

const reviewsContainer = document.getElementById('reviews-container');

function displayReviews() {
    reviewsContainer.innerHTML = mockReviews.map(review => `
        <div class="review-item">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <strong>${review.name}</strong>
                <span style="color: #888; font-size: 14px;">${review.date}</span>
            </div>
            <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p style="margin: 8px 0 0 0; color: #444;">${review.comment}</p>
        </div>
    `).join('');
}

// تشغيل عرض المراجعات فور تحميل الصفحة
displayReviews();
