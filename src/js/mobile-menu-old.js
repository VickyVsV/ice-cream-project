(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('.js-open-menu'),
    secondOpenMenu: document.querySelector('.menu__second-btn'),
    firstOpenMenu: document.querySelector('.menu__first-btn'),
    navMenu: document.querySelector('.memu__navigtion'),
    menu: document.querySelector('.menu__container'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu-nav'),
    menuSVG: document.querySelectorAll('.menu__svg'),
  };

  for(let i=0;i<refs.openMenuBtn.length;i++)
  {
    refs.openMenuBtn[i].addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    refs.menu.classList.toggle('mobile-menu-open');
    console.log("menuSVG lenth"+refs.menuSVG.length);
    for(let i=0;i<refs.menuSVG.length;i++)
    {
      refs.menuSVG[i].classList.toggle('is-none');
    }
    refs.body.classList.toggle('no-scroll');
    refs.navMenu.classList.toggle("is-open");
    refs.secondOpenMenu.classList.toggle("is-open");
    refs.firstOpenMenu.classList.toggle("is-open");
  }


  function removeMenu() {
    refs.menu.classList.add('mobile-menu-open');
    refs.body.classList.remove('no-scroll');
  }
})();
/*
(() => {
  const mobileMenu = document.querySelector('.menu__container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const bod = document.querySelector("body");

  const toggleMenu = () => {
  const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('mobile-menu-open');

  const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('mobile-menu-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(body);
  });
})();*/