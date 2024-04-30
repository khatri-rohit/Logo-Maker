const reset = document.querySelector("#res");
const form = document.querySelector("form");
const input = document.querySelector("input");
const logo = document.querySelector("#logo");
const empty = document.querySelector(".empty");

async function generateLogo(e) {
  e.preventDefault();
  let value = input.value;
  if (value) {
    await fetch(`https://logo.clearbit.com/${value.toLowerCase()}.com`)
      .then((res) => {
        if (res.ok) {
          const img = document.createElement("img");
          img.src = `https://logo.clearbit.com/${value.toLowerCase()}.com`;
          img.alt = value;
          console.log(logo);
          console.log(img);
          logo.innerHTML = "";
          empty.remove();
          logo.appendChild(img);
          reset.style.display = "block";
        }
      })
      .catch((err) => {
        console.log(err);
        logo.innerHTML = "";
        empty.firstElementChild.innerText = "No Logo found";
        logo.appendChild(empty);
        reset.style.display = "block";
      });
  } else {
    logo.innerHTML = "";
    console.log("Else condition");
    logo.appendChild(empty);
  }
}

form.addEventListener("submit", generateLogo);
reset.addEventListener(
  "click",
  () => {
    logo.innerHTML = "";
    empty.firstElementChild.innerText = "Enter Domain";
    logo.appendChild(empty);
    input.value = "";
    console.log("Reset Button");
    input.placeholder = "Enter";
    reset.style.display = "none";
  },
  false
);
