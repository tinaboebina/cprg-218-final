//----- HAMBURGER MENU -----//
const myFunction = () => {
  const x = document.getElementById("links");
  x.style.display = x.style.display === "block" ? "none" : "block";
};

//----- TOGGLE ACCORDION -----//
const acc = document.querySelectorAll(".accordion");

acc.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

//----- UPDATE FOOTER TO CURRENT YEAR -----//
const updateFooterDate = () => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
};

updateFooterDate();

setInterval(updateFooterDate, 1000 * 60 * 60 * 24 * 365);
