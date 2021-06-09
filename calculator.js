const res = document.getElementById("res");
const Num = document.querySelectorAll(".btn");
let operation;
let operand1, operand2;
Num.forEach((element) => {
  element.addEventListener("click", () => {
    Numbers(element.textContent);
  });
});

document.getElementById("btnClr").addEventListener("click", Clear);

document.getElementById("btnEql").addEventListener("click", Equal);

document.getElementById("btnSum").addEventListener("click", () => {
  operation = "+";
  operand1 = res.textContent;
  res.innerHTML = res.textContent + "+";
});
document.getElementById("btnSub").addEventListener("click", () => {
  operation = "-";
  operand1 = res.textContent;
  res.innerHTML = res.textContent + "-";
});
document.getElementById("btnMul").addEventListener("click", () => {
  operation = "*";
  operand1 = res.textContent;
  res.innerHTML = res.textContent + "*";
});
document.getElementById("btnDiv").addEventListener("click", () => {
  operation = "/";
  operand1 = res.textContent;
  res.innerHTML = res.textContent + "/";
});

function Numbers(n) {
  res.innerHTML = res.textContent + n;
}
function One() {
  res.innerHTML = res.textContent + "1";
}
function Clear() {
  res.innerHTML = " ";
}
function Equal() {
  operand2 = res.textContent.slice(operand1.length + 1, res.textContent.length);
  let result;
  switch (operation) {
    case "+": {
      result = parseInt(operand1) + parseInt(operand2);
      break;
    }
    case "-": {
      result = parseInt(operand1) - parseInt(operand2);
      break;
    }
    case "*": {
      result = parseInt(operand1) * parseInt(operand2);
      break;
    }
    case "/": {
      result = parseInt(operand1) / parseInt(operand2);
      break;
    }
    default: {
      result = "";
    }
  }
  res.innerHTML = result;
}
