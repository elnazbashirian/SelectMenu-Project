let targetDiv = document.querySelector(".below-box");
let upperbox = document.querySelector(".upper-box");
let uppertext = document.querySelector(".upper-text");
let options = document.querySelectorAll(".option");
let input = document.querySelector(".input");

function ShowHide() {
  if (targetDiv.style.visibility === "visible") {
    targetDiv.style.visibility = "hidden";
    input.style.visibility = "hidden";
  } else {
    targetDiv.style.visibility = "visible";
    input.style.visibility = "visible";
  }
}
options.forEach((option) => {
  option.addEventListener("click", () => {
    uppertext.innerHTML = option.innerHTML;
    targetDiv.style.visibility = "hidden";
    input.style.visibility = "hidden";
  });
});
input.addEventListener("input", () => {
  let searchItem = input.value;
  options.forEach((option) => {
    let text = option.innerHTML;
    if (text.indexOf(searchItem)!=-1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});
