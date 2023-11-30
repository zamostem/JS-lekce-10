const btn = document.querySelector("#test")
const vyhra = () => {
    alert("Vyhrál jsi iPhone 8!")
}

btn.addEventListener("click", vyhra)

/*const calc = (num1, op, num2) => {
    if (op === '+') {
      return num1 + num2;
    }
    if (op === '-') {
      return num1 - num2;
    }
    if (op === '*') {
      return num1 * num2;
    }
    if (op === '/') {
      return num1 / num2;
    }
  
    return null;
  };*/

  const plus = (num1, num2) => {
    return num1 + num2;
  };
  
  const minus = (num1, num2) => {
    return num1 - num2;
  };
  
  const times = (num1, num2) => {
    return num1 * num2;
  };
  
  const divide = (num1, num2) => {
    return num1 / num2;
  };

  const calc = (num1, operace, num2) => {
    return operace(num1, num2);
  };

  let cislo1 = 30
  let cislo2 = 50

  calc(cislo1, times, cislo2) // op === times
  calc(cislo1, divide, cislo2) // op === divide