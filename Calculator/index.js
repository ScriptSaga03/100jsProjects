let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let inputValue = "";
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttontext = button.innerText;
    console.log(buttontext);

    if (buttontext === "Reset") {
      inputValue = "";
      input.value = "";
    } else if (buttontext === "DEL") {
      inputValue = inputValue.slice(0, -1);
      input.value = inputValue;
    } else if (buttontext === "=") {
      try {
        inputValue = eval(inputValue);
        input.value = inputValue;
      } catch {
        input.value = "Error";
        input.value='';
      }
    } else {
      inputValue += buttontext;
      input.value = inputValue;
    }
  });
});
