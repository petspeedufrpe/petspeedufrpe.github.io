console.log('oi');

(function () {
    console.log('oi');
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) header.classList.add('header-claro');
        else header.classList.remove('header-claro');
    });
})();
