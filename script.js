"use strict";
let navigation_box = document.getElementById("navigation");
let navigation_bottom_coord = navigation_box.getBoundingClientRect().bottom;
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
let isHere = (box,marginTop,marginBottom) => {
  return (
    getBottom(box)+navigation_box.getBoundingClientRect().bottom > navigation_bottom_coord &&
    navigation_bottom_coord >= getTop(box)
  );
};
window.addEventListener("scroll", function () {
  if (
    isHere(menu_box) ||
    isHere(shares_box) ||
    isHere(info_box) ||
    isHere(contact_box)
  ) {
    navigation_box.style.backgroundColor = "#27292c";
  } else {
    navigation_box.style.removeProperty("background-color");
  }
});
