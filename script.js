"use strict";
let navigation_box = document.getElementById("navigation");
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
let isHere = (box, marginTop, marginBottom) => {
  return (
    getBottom(box) > getBottom(navigation_box) &&
    getBottom(navigation_box) >= getTop(box)
  );
};
window.addEventListener("scroll", function () {
  if (
    isHere(menu_box) ||
    isHere(shares_box) ||
    isHere(info_box) ||
    isHere(contact_box)
  ) {
    document.getElementById("navigation").style.backgroundColor = "#27292c";
  } else {
    document
      .getElementById("navigation")
      .style.removeProperty("background-color");
  }
});
if (window.innerWidth <= 768) {
  let search_form = document
    .getElementById("navigation_menu")
    .lastElementChild.cloneNode(true);
  document.getElementById("navigation_menu").prepend(search_form);
  document.getElementById("navigation_menu").lastElementChild.remove();
}
let handler = () => {
  let navigation_list = document.getElementById("navigation_menu");
  if(navigation_list.style.visibility==="visible"){
  navigation_list.style.visibility="hidden"
  navigation_list.style.height="0"
  
  }
  else{
    navigation_list.style.visibility="visible"
    navigation_list.style.height="100%"
    document.getElementById("navigation").style.backgroundColor = "#27292c";
  }
};
let navigation_button = document.getElementById("navigation_button");
navigation_button.addEventListener("click", handler);
