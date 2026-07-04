// 1. قاعدة بيانات المنتجات التجريبية
const products = [
    { id: 1, title: "حزمة قوالب Dashboard حديثة", category: "uiux", price: 49, image: "assets/images/ui-1.jpg" },
    { id: 2, title: "كورس احتراف React و Next.js", category: "courses", price: 99, image: "assets/images/course-1.jpg" },
    { id: 3, title: "إضافة (Plugin) لتسريع الووردبريس", category: "dev", price: 29, image: "assets/images/dev-1.jpg" },
    { id: 4, title: "نظام إدارة محتوى متكامل API", category: "dev", price: 149, image: "assets/images/dev-2.jpg" },
    { id: 5, title: "مجموعة أيقونات وواجهات تفاعلية", category: "uiux", price: 19, image: "assets/images/ui-2.jpg" },
    { id: 6, title: "كورس أساسيات تصميم وتجربة المستخدم", category: "courses", price: 79, image: "assets/images/course-2.jpg" }
];

// 2. ربط عناصر DOM
const productsContainer = document.getElementById('products-container');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const priceVal = document.getElementById('price-val');

// 3. دالة عرض المنتجات في الصفحة
function displayProducts(filteredProducts) {
    productsContainer.innerHTML = ""; // تنظيف الحاوية أولاً
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>عذراً، لا توجد منتجات تطابق خيارات البحث الحالية.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/250x150?text=Product+Image'">
            <h4>${product.title}</h4>
            <p style="color: #28a745; font-weight: bold;">${product.price} $</p>
            <button class="btn-add-cart" onclick="addToCart(${product.id})">إضافة للسلة 🛒</button>
        `;
        productsContainer.appendChild(card);
    });
}

// 4. دالة الفلترة الذكية
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const maxPrice = Number(priceFilter.value);
    
    // تحديث رقم السعر المكتوب فوق المؤشر
    priceVal.textContent = maxPrice;

    const filtered = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesPrice = product.price <= maxPrice;
        return matchesCategory && matchesPrice;
    });

    displayProducts(filtered);
}

// 5. الاستماع لأحداث التغيير في الفلاتر
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('input', filterProducts);

// 6. دالة إضافة منتج للسلة (تخزين مبدئي)
function addToCart(productId) {
    alert(`تم إضافة المنتج ذو الرقم (${productId}) إلى السلة بنجاح! 🎉`);
    // هنا يمكن لاحقاً ربط المنطق مع LocalStorage أو ملف checkout.js
}

// تشغيل العرض الأولي عند فتح الصفحة
displayProducts(products);
