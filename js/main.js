const mobilImageIcone = document.getElementById("mobile-img");
console.log(mobilImageIcone);
mobilImageIcone.addEventListener("click", function (e) {
  console.log("HELLO WORLD", e.target.currentSrc);
  let wantedPath = "http://127.0.0.1:5500/assets/images/icon-menu-close.svg";
  if (e.target.currentSrc === wantedPath) {
    const hiddenList = document.getElementsByClassName("d-flex-colum")[0];
    wantedPath = "http://127.0.0.1:5500/assets/images/icon-menu.svg";
    hiddenList.classList.replace("d-flex-colum", "hidden-navbar");
    console.log("CASE ONE");
    mobilImageIcone.src = wantedPath;
  } else {
    const hiddenList = document.getElementsByClassName("hidden-navbar")[0];
    console.log("CASE TWO");
    mobilImageIcone.src = wantedPath;
    hiddenList.classList.replace("hidden-navbar", "d-flex-colum");
  }
});

// document
//   .getElementsByClassName("d-flex-colum")[0]
//   .addEventListener("click", function () {
//     mobilImageIcone.src = "http://127.0.0.1:5500/assets/images/icon-menu.svg";
//   });
