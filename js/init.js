const replaceWindow = () => {
  var proceed = document.getElementById("proceed");
  proceed.classList.remove("proceed");
  proceed.classList.add("proceed-go");

  window.localStorage.setItem("currentCoderId", currentCoderId);
  setTimeout(() => {
    window.location = "./pages/challenge.html";
  }, 500);
};

const participants = ["D", "M", "N", "A"];
let currentCoderId = 0;

const leftSlider = () => {
  currentCoderId =
    (currentCoderId + participants.length - 1) % participants.length;
  document.getElementById("avatar").innerHTML = participants[currentCoderId];
};
const rightSlider = () => {
  currentCoderId = (currentCoderId + 1) % participants.length;
  document.getElementById("avatar").innerHTML = participants[currentCoderId];
};
