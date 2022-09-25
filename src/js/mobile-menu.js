(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuList: document.querySelector(".mob-nav__list"),
  };
  //console.document(refs.menuList.lenth);
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", toggleMenu);


  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }

  function removeMenu() {
   // refs.menu.classList.add("is-hidden");
  }
})();