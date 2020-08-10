"use strict";
let navigation_box = document.getElementById("navigation");
let home_box = document.getElementById("home");
let menu_box = document.getElementById("menu");
let shares_box = document.getElementById("shares");
let info_box = document.getElementById("info");
let contact_box = document.getElementById("contact_us");
let getTop = (box) => {
  return box.getBoundingClientRect().top;
};
let getBottom = (box) => {
  return box.getBoundingClientRect().bottom;
};
let isHere = (box) => {
  return (
    getBottom(box) > getBottom(navigation_box) &&
    getBottom(navigation_box) >= getTop(box)
  );
};

window.addEventListener("scroll", function () {
  if (window.innerWidth > 768) {
    if (getTop(home_box) < 0) {
      document.getElementById("navigation").style.backgroundColor = "#27292c";

    }
    else {
      document
        .getElementById("navigation")
        .style.removeProperty("background-color");
    }
  } else {
    document.getElementById("navigation").style.backgroundColor = "#27292c";

    if (navigation_list.style.visibility === "visible") {
    }
  }
});
if (window.innerWidth <= 768) {
  let search_form = document
    .getElementById("navigation_menu")
    .lastElementChild.cloneNode(true);
  document.getElementById("navigation_menu").prepend(search_form);
  document.getElementById("navigation_menu").lastElementChild.remove();
}

const handler = () => {
  let navigation_container = document.getElementById(
    "navigation_menu_container"
  );
  let navigation_list = document.getElementById("navigation_menu");
  if (navigation_container.style.width == "100vw") {
    navigation_container.style.width = "0vw";
    document.querySelector("body").style.overflowY = "visible";

    navigation_list.style.visibility = "hidden";
  } else {
    navigation_container.style.width = "100vw";
    document.querySelector("body").style.overflowY = "hidden";
    navigation_container.style.backgroundColor = "#27292c";

    navigation_container.addEventListener("transitionend", function f() {
      if (navigation_container.style.width == "100vw") {
        navigation_list.style.visibility = "visible";
      }
    });
  }
};

let navigation_button = document.getElementById("navigation_button");
navigation_button.addEventListener("click", handler);

// let search_form = document.getElementById("search_form")
// search_form.addEventListener("submit", scrollByItem);

// function scrollByItem() {
// let search=document.getElementById("search")
// alert(search.value)
// let elmnt = document.getElementById("search.value");
// elmnt.scrollIntoView();
// }
