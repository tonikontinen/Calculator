"use strict";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const negPos = document.getElementById("negPos");
const globalClear = document.getElementById("globalClear");
const clearEntry = document.getElementById("clearEntry");
const decimal = document.getElementById("decimal");

let calcHistory = "";
let calcInput = "";
let operator = "";
let numberOne = "";
let numberTwo = "";

clearEntry.addEventListener("click", () => {
  console.log("ce");
});

globalClear.addEventListener("click", () => {
  console.log("c");
});

negPos.addEventListener("click", () => {
  document.querySelector(".screen").textContent = "wtf";
});

equals.addEventListener("click", () => {
  console.log("equals");
});

for (let i = 0; i < operators.length; i++)
  operators[i].addEventListener("click", () => {
    console.log("operators");
  });

for (let i = 0; i < numbers.length; i++)
  numbers[i].addEventListener("click", () => {
    document.querySelector(".screen").textContent = "wtf";
  });
