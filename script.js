const navBarItem = document.querySelectorAll(".navBar__item");

//loop thrg all navBarItem and set eventlistner for click event
navBarItem.forEach((item) => {
  item.addEventListener("click", () => {
    navBarItem.forEach((ele) => {
      ele.classList.contains("active") ? ele.classList.remove("active") : "";
    });
    item.classList.toggle("active");
  });
});

const toggleArrow = document.querySelector(".toggle__arrow");
const navBar = document.querySelector(".navBar");
const pgContent = document.querySelector(".pgContent");

toggleArrow.addEventListener("click", () => {
  toggleArrow.classList.toggle("collapse");
  navBar.classList.toggle("collapse");
  pgContent.classList.toggle("collapse");
});
