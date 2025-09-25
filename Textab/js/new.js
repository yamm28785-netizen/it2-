// تهيئة الصفحة عند التحميل
$(document).ready(function() {
    // إضافة تأثيرات عند التمرير
    $(window).scroll(function() {
        $('.gallery-item').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition) {
                $(this).addClass('animated');
            }
        });
    });
    
    // فتح نموذج النشرة البريدية
    $('#newsletter-btn').on('click', function() {
        alert('سيتم تفعيل خدمة النشرة البريدية قريباً! شكراً لاهتمامك.');
    });
    
    // تأثيرات عند المرور على الصور (لأجهزة سطح المكتب)
    if (window.matchMedia("(hover: hover)").matches) {
        $('.gallery-item').on('mouseenter', function() {
            $(this).addClass('hovered');
        }).on('mouseleave', function() {
            $(this).removeClass('hovered');
        });
    }
});