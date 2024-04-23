//----- HAMBURGER MENU -----//
function myFunction() {
  var x = document.getElementById("Links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//----- TOGGLE ACCORDION -----//
const acc = document.getElementsByClassName("accordion"); // SELECT ACCORDION

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    acc[i].classList.toggle("active");

    const panel = acc[i].nextElementSibling;
    const panelStyle = window.getComputedStyle(panel);
    panelStyle.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
  });
}

//----- UPDATE FOOTER TO CURRENT YEAR -----//
const updateFooterDate = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
};

updateFooterDate();

setInterval(updateFooterDate, 1000 * 60 * 60 * 24 * 365);