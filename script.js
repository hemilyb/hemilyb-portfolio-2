//menu
const dropDown = document.querySelector('.dropdown-list');
const dropDownBtn = document.querySelector('.dropdown-btn');

const toggle = () => dropDown.classList.toggle("active");

document.addEventListener('click', (e) => {
  if(!dropDownBtn.contains(e.target)) dropDown.classList.remove("active")
});

//pop-up
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  const popupContent = popup.querySelector(".popup-content");
  const closePopup = popup.querySelector(".close-popup");
  const overlay = document.querySelector(".overlay");

  popup.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!popupContent.classList.contains("active")) {
      popupContent.classList.remove("hidden");
      popupContent.classList.add("active");
      closePopup.classList.remove("hidden");
      overlay.classList.add("show");
    }
  });

  closePopup.addEventListener("click", (e) => {
    e.stopPropagation();
    popupContent.classList.remove("active");
    popupContent.classList.add("hidden");
    overlay.classList.remove("show");
  });

  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && !e.target.classList.contains("popup")) {
      popupContent.classList.remove("active");
      popupContent.classList.add("hidden");
      overlay.classList.remove("show");
    }
  });
});


