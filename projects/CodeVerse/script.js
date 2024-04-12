//fill icon

const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("ph-fill");
  });
  icon.addEventListener("mouseout", () => {
    icon.classList.remove("ph-fill");
    icon.classList.add("ph");
  });
});

//filter search

const inputFilter = document.querySelector("#text");
const cards = document.querySelectorAll(".cards li");

inputFilter.addEventListener("input", filterCards);

function filterCards() {
  if (inputFilter.value !== "") {
    for (let card of cards) {
      let heading = card.querySelector("h2");
      heading = heading.textContent.toLocaleLowerCase();

      let filterText = inputFilter.value.toLocaleLowerCase();

      if (!heading.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
