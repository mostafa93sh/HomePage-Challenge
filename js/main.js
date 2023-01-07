const mobilImageIcone = document.getElementById("mobile-img");
console.log(mobilImageIcone);
mobilImageIcone.addEventListener("click", function (e) {
  console.log("HELLO WORLD", e.target.currentSrc);
  const wantedPath = "http://127.0.0.1:5500/assets/images/icon-menu-close.svg";
  mobilImageIcone.src = wantedPath;
  const hiddenList = document.getElementsByClassName("hidden-navbar")[0];
  hiddenList.classList.replace("hidden-navbar", "d-flex-colum");
});
