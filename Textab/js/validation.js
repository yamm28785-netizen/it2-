// التحقق من صحة نموذج تسجيل الدخول
function validateLoginForm() {
    const email = $('#loginEmail').val();
    const password = $('#loginPassword').val();
    
    if (!isValidEmail(email)) {
        showNotification('error', 'البريد الإلكتروني غير صحيح');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('error', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        return false;
    }
    
    // محاكاة عملية تسجيل الدخول
    showNotification('success', 'تم تسجيل الدخول بنجاح');
    $('#loginModal').modal('hide');
    return true;
}

// التحقق من صحة نموذج التسجيل
function validateRegisterForm() {
    const name = $('#registerName').val();
    const email = $('#registerEmail').val();
    const password = $('#registerPassword').val();
    const confirmPassword = $('#registerConfirmPassword').val();
    
    if (name.length < 3) {
        showNotification('error', 'الاسم يجب أن يكون 3 أحرف على الأقل');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showNotification('error', 'البريد الإلكتروني غير صحيح');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('error', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        return false;
    }
    
    if (password !== confirmPassword) {
        showNotification('error', 'كلمتا المرور غير متطابقتين');
        return false;
    }
    
    // محاكاة عملية التسجيل
    showNotification('success', 'تم إنشاء الحساب بنجاح');
    $('#registerModal').modal('hide');
    return true;
}

// الاشتراك في النشرة البريدية
function subscribeNewsletter() {
    let name = $('#newsletterName').val();
    let email = $('#newsletterEmail').val();
    
    if (!name || !email) {
        showNotification('error', 'يرجى ملء جميع الحقول');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('error', 'البريد الإلكتروني غير صحيح');
        return;
    }
    
    // محاكاة عملية الاشتراك
    showNotification('success', 'تم الاشتراك في النشرة البريدية بنجاح');
    $('#newsletterModal').modal('hide');
    $('#newsletterForm')[0].reset();
}

// التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}