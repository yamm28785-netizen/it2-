// تهيئة الموقع عند تحميل الصفحة
$(document).ready(function() {
    // تهيئة عداد الإحصائيات
    initCounter();
    
    // التعامل مع النماذج
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        validateLoginForm();
    });
    
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        validateRegisterForm();
    });
    
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        subscribeNewsletter();
    });
    
    // فتح نموذج النشرة البريدية
    $('#newsletter-btn').on('click', function() {
        $('#newsletterModal').modal('show');
    });
    
    // فتح نموذج التراث عبر AJAX
    $('#heritageModalBtn').on('click', function() {
        loadHeritageContent();
    });
    
    // التعامل مع النقر على زر CTA
    $('.cta-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    // إضافة تأثيرات للعناصر عند التمرير
    $(window).scroll(function() {
        $('.feature-card').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition) {
                $(this).addClass('animated');
            }
        });
    });
});

// تهيئة عداد الإحصائيات
function initCounter() {
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('target')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

// تحميل محتوى التراث عبر AJAX
function loadHeritageContent() {
    $('#heritage-detail').html('<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p>جاري تحميل البيانات...</p></div>');
    $('#heritageModal').modal('show');
    
    // محاكاة طلب Ajax
    setTimeout(function() {
        let heritageDetails = `
            <h3>التراث الثقافي اليمني</h3>
            <p>تمتلك اليمن تراثاً ثقافياً غنياً يعود إلى آلاف السنين، حيث كانت مهداً للحضارات العريقة التي تركت بصماتها في التاريخ الإنساني.</p>
            
            <h4>مدينة صنعاء القديمة</h4>
            <p>تعد صنعاء القديمة واحدة من أقدم المدين المأهولة في العالم، ويعود تاريخها إلى أكثر من 2500 عام. تم إدراجها في قائمة اليونسكو للتراث العالمي بسبب هندستها المعمارية الفريدة والطابع التقليدي الذي حافظت عليه.</p>
            
            <h4>مملكة سبأ</h4>
            <p>اشتهرت مملكة سبأ بالزراعة والتجارة وبناء السدود، وأبرزها سد مأرب العظيم الذي كان معجزة هندسية في زمانه. ذكرت سبأ في القرآن الكريم وفي النصوص التاريخية القديمة.</p>
            
            <div class="text-center mt-4">
                <img src="images/heritage-detail.jpg" alt="التراث اليمني" class="img-fluid rounded">
            </div>
        `;
        $('#heritage-detail').html(heritageDetails);
    }, 1500);
}