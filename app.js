function snow() {
  let santa = document.querySelector(".santa-div");
  let btn = document.querySelector(".snow-btn");
  let btn2 = document.querySelector(".enter-site");
  let santa_heading = document.querySelector(".santa-heading");
  santa.classList.toggle("snow-gif");
  btn.classList.add("hidden");
  santa_heading.textContent =
    "Hello there! Please click 'Enter the site' button to proceed";
  btn2.classList.remove("hidden");
}
