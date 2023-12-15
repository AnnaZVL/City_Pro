// Бургер меню
const $btnBurger = document.querySelector('.burger'),
    $nav = document.querySelector('.header__nav'),
    $wrapper = document.querySelector('.wrapper')

// Открытие меню
$btnBurger.addEventListener('click', () => {
    $btnBurger.classList.toggle('active');
    $nav.classList.toggle('open');
    $wrapper.classList.toggle('scroll-stop')
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    $btnBurger.classList.toggle('active');
    $nav.classList.toggle('open');
    $wrapper.classList.toggle('scroll-stop')
  }
})

// Слайдер секции Hero
const swiperHero = new Swiper('.hero__swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: '.hero__pagination',
    },
    on: {
      init: function (swiper) {
        const $allSlide = document.querySelector('.hero-all');
        $allSlide.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;        
      },
      slideChange: function (swiper) {
        let $currentSlide = document.querySelector('.hero-current');      
        $currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
          
      }
    }
  });

  /* Больше текста в блоке О нас*/
const $btnMore = document.getElementById('more'),
$block = document.querySelector('.about__top');

$btnMore.addEventListener('click', () => {
  $block.classList.add('open');
  $btnMore.style.display = 'none'
})

/*Смена кнопки на ссылку в 3 блоке*/
const $servicesBtn = document.querySelectorAll('.card__btn'),
    $servicesLink = document.querySelectorAll('.card__link'),
    $servicesCard = document.querySelectorAll('.card');

$servicesBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    $servicesLink.forEach(link => {  
      link.classList.remove('open')
    });
      $servicesCard.forEach(card => {
        card.classList.remove('open');
    });  

    const $currentCard = event.currentTarget.closest('.card');
    const $currentLink = $currentCard.querySelector('.card__link');

    $currentLink.classList.toggle('open');
    $currentCard.classList.toggle('open');

    $currentLink.addEventListener('click', () => {
      $currentLink.classList.remove('open');
      $currentCard.classList.remove('open');    
    });    
  });
});

  /* Больше текста в блоке Портфолио*/
  const $btnMorePortfolio = document.getElementById('more-portfolio'),
  $blockPortfolio = document.querySelector('.portfolio__card');
  
  $btnMorePortfolio.addEventListener('click', () => {
    $blockPortfolio.classList.add('open');
    $btnMorePortfolio.style.display = 'none'
  })

// Слайдер секции Услуги
const swiperServices = new Swiper('.services__list', {
      loop: true,
      slidesPerView: 1,
      // spaceBetween: 30,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        572: {
              slidesPerView: 2,
              spaceBetween: 30,
        },         
      },
  pagination: {
    el: '.services__pagination',
  },
  on: {
    init: function (swiper) {
      const $allSlide = document.querySelector('.services-all');
      $allSlide.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;        
    },
    slideChange: function (swiper) {
      let $currentSlide = document.querySelector('.services-current');      
      $currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;        
    }
  }
});

// Слайдер секции Портфолио
const swiperPortfolio = new Swiper('.portfolio__swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.tabs__btn-next',
    prevEl: '.tabs__btn-prev',
  },
  pagination: {
    el: '.portfolio__pagination',
  },
  on: {
    init: function (swiper) {
      // Для пагинации
      const $allSlide = document.querySelector('.portfolio-all');      
      $allSlide.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;  
      let $currentSlide = document.querySelector('.portfolio-current');      
      $currentSlide.innerHTML = '01' 
      // Для навигации  
      const $allSlideTabs = document.querySelector('.tabs__text-all');
      $allSlideTabs.innerHTML = swiper.slides.length < 10 ? swiper.slides.length : swiper.slides.length; 
      let $currentSlideTabs = document.querySelector('.tabs__text-current');      
      $currentSlideTabs.innerHTML = '1' 
    },
    slideChange: function (swiper) {
      let $currentSlide = document.querySelector('.portfolio-current');      
      $currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;

      let $currentSlideTabs = document.querySelector('.tabs__text-current');      
      $currentSlideTabs.innerHTML = swiper.realIndex + 1 < 10 ? swiper.realIndex + 1 : swiper.realIndex + 1;
        
    }
  }
});

//Application
const $form = document.querySelector('.application__form'),
    $inputs = document.querySelectorAll('.form__input');

const validatorApplication = new JustValidate($form, {
  validateBeforeSubmitting: true,
});

validatorApplication
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Не более 15 символов',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения',
    },    
  ])

  //Установка маски телефона
const maskSelector = document.getElementById('phone');

Inputmask({"mask": "(999) 999-9999"}).mask(maskSelector);
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  $inputs.forEach((el) => { 
    el.addEventListener('input', () => {
    el.classList.remove('error')
    el.classList.remove('just-validate-error-field')
    })
  });

  $inputs.forEach((el) => {            
    if (el.classList.contains('just-validate-error-field')) {
          el.classList.add('error')
    };
  });
  
});

/*Карта*/
ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 14
  });

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageSize: [20, 20],
  });
  myMap.behaviors.disable('scrollZoom') //Отключение скрола колесиком
  myMap.geoObjects.add(myPlacemark)
}

/*Modal*/

const $btnModalOpen = document.querySelectorAll('[data-modal="true"]'),
    $modal = document.querySelector('.modal'),
    $btnModalClose = document.querySelector('.modal__btn-icon');

$btnModalOpen.forEach(button => {
  button.addEventListener('click', () => {
    $modal.classList.add('open');
    $wrapper.classList.add('scroll-stop');
  });
});

$btnModalClose.addEventListener('click', () => {
  $modal.classList.remove('open');
  $wrapper.classList.remove('scroll-stop');
});

const $formModal = document.querySelector('.modal__form'),
    $inputsModal = document.querySelectorAll('.modal__input');

const validatorModal = new JustValidate($formModal, {
  validateBeforeSubmitting: true,
});

validatorModal
  .addField('#name-mod', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Не более 15 символов',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения',
    },    
  ])

  //Установка маски телефона
const maskSelectorModal = document.getElementById('tel');

Inputmask({"mask": "(999) 999-9999"}).mask(maskSelectorModal);

$formModal.addEventListener('submit', (e) => {
  e.preventDefault();
  $inputsModal.forEach((el) => { 
    el.addEventListener('input', () => {
    el.classList.remove('error')
    el.classList.remove('just-validate-error-field')
    })
    
  });

  $inputsModal.forEach((el) => {            
    if (el.classList.contains('just-validate-error-field')) {
          el.classList.add('error');
    };
  });
  
  if (validatorModal.isValid) {
    $modal.classList.remove('open');
  }
});

window.addEventListener('keydown', (event) => {
  if ($modal) {
    if (event.key === 'Escape') {
      $modal.classList.remove('open');
      $wrapper.classList.remove('scroll-stop');
    }
  }
  
})

/*Scroll Up*/
const $btnScroll = document.querySelector('.scroll-up');
const offset = 500;
const scroll = () => window.scrollY || document.documentElement.scrollTop

window.addEventListener('scroll', () => {
  if (scroll() > offset) {
    $btnScroll.classList.add('scroll-up__active')
  } else {
    $btnScroll.classList.remove('scroll-up__active')
  };
});

$btnScroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});