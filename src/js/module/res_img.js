// /* --------------------
// ResponsiveImage
// -------------------- */

var view;

const watchView = () => {
  const wid = $(window).width();
  if (wid <= 767) {
    if (view == "sp") return;
    view = "sp";
    imgChange();

  } else {
    if (view == "pc") return;
    view = "pc";
    imgChange();
  }
}

const imgChange = () => {
  let current_path;
  let change_path;

  switch (view) {
    case "sp":
      current_path = "_pc";
      change_path = "_sp";
      break;
    case "pc":
      current_path = "_sp";
      change_path = "_pc";
      break;
  }

  let $res_obj = document.querySelectorAll('.img_res');

  $res_obj.forEach((obj, i) => {
    const file_name = obj.getAttribute('src').replace(current_path, change_path);
    obj.setAttribute();
  });
}