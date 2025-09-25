// عرض الإشعارات
function showNotification(type, message) {
    let icon = '';
    switch(type) {
        case 'success':
            icon = 'fas fa-check-circle';
            break;
        case 'error':
            icon = 'fas fa-exclamation-circle';
            break;
        case 'warning':
            icon = 'fas fa-exclamation-triangle';
            break;
        default:
            icon = 'fas fa-info-circle';
    }
    
    $.notify({
        message: message,
        icon: icon
    }, {
        type: type,
        placement: {
            from: 'top',
            align: 'left'
        },
        delay: 3000,
        animate: {
            enter: 'animated fadeInRight',
            exit: 'animated fadeOutRight'
        },
        template: '<div data-notify="container" class="alert alert-{0} alert-dismissible" role="alert">' +
                  '<span data-notify="icon"></span> ' +
                  '<span data-notify="message">{2}</span>' +
                  '</div>'
    });
}