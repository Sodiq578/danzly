
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

    

 




// Agar Swiper instansiya o'rnalgan bo'lsa
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Loop qilishni qo'shdim
  justifyContent: 'center',
  navigation: { // Ko'rsatgichlarni qo'shdim
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});


// Swiper uslublarini dinamik ravishda yangilash
swiper.params.slidesPerView = 4; // Rasmlar sonini o'zgartirish
swiper.params.spaceBetween = 5; // Rasmlar orasidagi bo'shlikni o'zgartirish
swiper.update(); // O'zgartirishlarni aks ettirish uchun Swiper-ni yangilash

