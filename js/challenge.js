// import { problem } from "./modules/problem.js";

let currentCoderId = Number(window.localStorage.getItem("currentCoderId"));
/*
let individualCards = "";

let totalCards = '<div class="cards">' + individualCards + "</div>";
*/
const loggers = ["Danesh", "Muzammil", "Najim Rahman"];
console.log("Welcome " + loggers[currentCoderId]);

let challengeDay = 5;
let problemNumber = 1;
document.getElementById("day-number").innerHTML = "Day-" + challengeDay;
document.getElementById("problem-number").innerHTML =
  "Problem #" + problemNumber;
document.getElementById("problem-description").innerHTML =
  "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.";
document.getElementById("problem-heading").innerHTML = "Sherlock and Array";
document.getElementById("date").innerHTML = "19-July-2020";

const showAllDays = () => {
  alert(
    "🤯🤯 ........ Eda mwonoose wait cheyy , ithokke ndakkunne ulloo ....Thalkalam innathe task cheyy...."
  );
};
