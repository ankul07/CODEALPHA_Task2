// console.log("chal raha hai");
// alert("javascript connect html succesfully ho gaya");

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacter = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculateFunction = (val) => {
  // console.log(val);
  display.focus();
  if (val === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (val === "AC") {
    output = "";
  } else if (val === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialCharacter.includes(val)) return;
    output += val;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    calculateFunction(e.target.dataset.value)
  );
});
