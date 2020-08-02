"use strict"
// document.getElementById('div[id="one"]').style.backgroundImage = "url('image/menu/Place_Your_Image_Here_(Double_Click_to_Edit)_2.png')"
document.getElementById("one").style.backgroundImage = "url('image/menu/Place_Your_Image_Here_\(Double_Click_to_Edit\).png')";
let doc = document.getElementById("two").style
doc.backgroundImage = "url('image/menu/Place_Your_Image_Here_2.png')";
doc.width = "316px";
doc.height = " 316px";
document.getElementById("three").style.backgroundImage = "url('image/menu/Place_Your_Image_Here_\(Double_Click_to_Edit\)_3.png')";

let backgroundFunction = (doc_name, width = "611px", height = "613px",
    url = "url('image/menu/Place_Your_Image_Here_\(Double_Click_to_Edit\)_3.png')",
    margin_top = "", margin_left = "") => {
    let doc = document.getElementById(doc_name).style
    doc.backgroundImage = url;
    doc.width = width;
    doc.height = height;
    doc.backgroundSize = "cover";
    if (margin_left != "")
        doc.marginLeft = margin_left;
    if (margin_top != "")
        doc.marginTop = margin_top;
}
backgroundFunction("first_meal");
backgroundFunction("second_meal", "667px", "667px", "url('image/menu/Place_Your_Image_Here_2.png')");
// backgroundFunction("image_3", "824px", " 829px", "url('image/menu/pizza_1.png')");
// backgroundFunction("image_3", "448px", "391px", "url('image/menu/pizza_2.png')", "874px", "306px")