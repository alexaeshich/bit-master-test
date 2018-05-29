var link = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".main-nav__toggle");
var list = document.querySelector(".main-nav__list");


  link.addEventListener('click',function(event){event.preventDefault();

    if (popup.classList.contains("main-nav__toggle--closed")) {
      popup.classList.add("main-nav__toggle--opened");
      popup.classList.remove("main-nav__toggle--closed");
      list.classList.remove("site-list--none");
    }

    else if (popup.classList.contains("main-nav__toggle--opened")) {
          popup.classList.add("main-nav__toggle--closed");
          list.classList.add("site-list--none");
          popup.classList.remove("main-nav__toggle--opened");
}})
