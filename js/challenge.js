let currentCoderId = Number(window.localStorage.getItem("currentCoderId"));

// const loading = () => {
//   var welcome = document.getElementById("welcome");
//   switch (currentCoderId) {
//     case 0:
//       welcome.innerHTML = "Welcome Dhanesh";
//       break;
//     case 1:
//       welcome.innerHTML = "Welcome Muzammil";
//       break;
//     case 2:
//       welcome.innerHTML = "Welcome Najim Rahman";
//       break;

//     default:
//       welcome.innerHTML = "this is default";
//       break;
//   }
// };

/*

let problem = {
    {
        day : 1,

    }
}


let individualCards = "";

let totalCards = 
'<div class="cards">' + individualCards + "</div>";


*/

let challengeDay = 3;
let problemNumber = 1;
document.getElementById("day-number").innerHTML = "Day-" + challengeDay;
document.getElementById("problem-number").innerHTML =
  "Problem #" + problemNumber;
document.getElementById("problem-description").innerHTML =
  "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.";
document.getElementById("problem-heading").innerHTML = "Sherlock and Array";
document.getElementById("date").innerHTML = "13-July-2020";

const showAllDays = () => {
  alert(
    "🤯🤯 ........ Eda mwonoose wait cheyy , ithokke ndakkunne ulloo ....Thalkalam innathe task cheyy...."
  );
};
