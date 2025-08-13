import "./styles.css";
import "./modern-css-reset.css";

const dropdownIcon = document.querySelector(".dropdown-top");
dropdownIcon.addEventListener("click", () => {
  toggleDropdown();
});

function toggleDropdown() {
  const parentElement = document.querySelector(".dropdown");
  const dropdownElements = parentElement.querySelectorAll(".dropdown-item");
  dropdownElements.forEach((element) => {
    if (!element.classList.contains("show")) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}
