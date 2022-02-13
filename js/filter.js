const overlayContainer = document.querySelector(".overlay");
const filterButton = document.querySelector(".filter--button");
const filterSection = document.querySelector(".filter--section");
const filterClose = document.querySelector(".filter--close");

overlayContainer.addEventListener("click", () => {
  closeFilter();
});

filterButton.addEventListener("click", () => {
  filterSection.classList.add("open");
  overlayContainer.classList.remove("hide");
});

filterClose.addEventListener("click", () => {
  closeFilter();
});

const closeFilter = () => {
  overlayContainer.classList.add("hide");
  filterSection.classList.remove("open");
};
