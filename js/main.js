
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            $('#navbarSupportedContent').collapse('hide');
        } else {
            $('#navbarSupportedContent').collapse('show');
        }
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');

        var isOpen = false;

        navbarToggler.addEventListener('click', function () {
            if (isOpen) {
                navbarCollapse.classList.remove('show');
            } else {
                navbarCollapse.classList.add('show');
            }

            isOpen = !isOpen;
        });
    });


    

    function changeBackground() {
        document.querySelector('.simple__min-box').classList.add('red-background');
        document.querySelector('.simple__min-boxs').classList.add('red-background');
    }
    



    document.addEventListener('DOMContentLoaded', function () {
        var simpleMinBox = document.querySelector('.simple__min-box');
    
        simpleMinBox.addEventListener('mouseover', function () {
            var simpleMinBoxsWhan = document.querySelector('.sipmple__min-boxs-whan');
            simpleMinBoxsWhan.style.backgroundColor = 'white'; /* Yashil rangni o'zingiz tanlang */
        });
    
        simpleMinBox.addEventListener('mouseout', function () {
            var simpleMinBoxsWhan = document.querySelector('.sipmple__min-boxs-whan');
            simpleMinBoxsWhan.style.backgroundColor = ''; /* Agar qayta o'rgatmagan bo'lsangiz, bo'sh qo'ying */
        });
    });
    