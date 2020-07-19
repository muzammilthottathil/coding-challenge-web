const problem = {
  day1: [
    {
      heading: "first Day",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N"],
      date: "19-July-2020",
    },
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
  ],
  day2: [
    {
      heading: "Second day",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N"],
      date: "19-July-2020",
    },
  ],
  day3: [
    {
      heading: "third Day",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
  ],
  day4: [
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N"],
      date: "19-July-2020",
    },
    {
      heading: "Reverse Alternate Nodes",
      description:
        "Given a perfect binary tree having N nodes, you have to reverse its alternate levels. That is reverse level 2, level 4 and so on. Root is at level 1.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Reverse Level Order Traversal",
      description:
        "Given a binary tree.Traverse the tree in the manner of reverse level order.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
  ],
  day5: [
    {
      heading: "Sherlock and Array",
      description:
        "Check whether there exists an element in the array such that sum of elements on its left is equal to the sum of elements on its right.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Reverse Alternate Nodes",
      description:
        "Given a perfect binary tree having N nodes, you have to reverse its alternate levels. That is reverse level 2, level 4 and so on. Root is at level 1.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
    {
      heading: "Reverse Level Order Traversal",
      description:
        "Given a binary tree.Traverse the tree in the manner of reverse level order.",
      link: "http://hr.gs/4ta16",
      whoDone: ["M", "N", "D"],
      date: "19-July-2020",
    },
  ],
};

/* ==================================================================
   ==================================================================


                        Javasrcipt Here


  ===================================================================
  ===================================================================*/

let currentCoderId = Number(window.localStorage.getItem("currentCoderId"));
const coders = ["D", "M", "N"];

let problemNumber,
  problemLink,
  date,
  problemHeading,
  problemDescription,
  whoDoneIndividual;

const individualCards = (
  problemNumber,
  date,
  problemHeading,
  problemDescription,
  whoDoneHtml,
  problemLink
) => {
  let cardTop =
    '<div class="top"><div id="problem-number">Problem #' +
    problemNumber +
    '</div><div id="date">' +
    date +
    "</div></div>";

  let cardMiddle =
    '<div class="middle"><div id="problem-heading">' +
    problemHeading +
    '</div><div id = "problem-description">' +
    problemDescription +
    "</div></div >";

  let cardBottom =
    '<div class="bottom"><div class="who-done">' +
    whoDoneHtml +
    '</div><a href="' +
    problemLink +
    '" class="get-task">GET TASK NOW</a></div >';

  return '<div class="card">' + cardTop + cardMiddle + cardBottom + "</div>";
};

let whoDoneHtml = "";

let totalIndividualCards;

const totalCards = (totalIndividualCards) =>
  '<div class="cards">' + totalIndividualCards + "</div>";

let dayNumber;

const dayNumberHtml = (dayNumber) =>
  '<div id="day-number">Day-' + dayNumber + "</div>";

let challengeDay = 5;
problemNumber = 1;

let totalProblemCount = Object.keys(problem).length;
dayNumber = 3;
let currentDay = 5;
let dayRetrive = "day" + currentDay;

const showAllDays = () => {
  totalProblems = "";

  for (let i = 1; i <= totalProblemCount; i++) {
    let day = "day" + i;
    totalIndividualCards = "";

    problem[day].forEach((task, taskNumber) => {
      whoDoneHtml = "";
      problemNumber = taskNumber + 1;
      date = task.date;
      problemHeading = task.heading;
      problemDescription = task.description;
      for (let i in task.whoDone) whoDoneHtml += " " + task.whoDone[i] + " ";
      problemLink = task.link;

      totalIndividualCards += individualCards(
        problemNumber,
        date,
        problemHeading,
        problemDescription,
        whoDoneHtml,
        problemLink
      );
    });

    totalProblems += dayNumberHtml(i) + totalCards(totalIndividualCards);
  }

  let challengeDayHtml = totalProblems;

  document.getElementById("challenge-day").innerHTML = challengeDayHtml;
  document.getElementById("show-today").style.display = "inline-block";
};

const loadCurrentDay = () => {
  totalIndividualCards = "";
  problem[dayRetrive].forEach((task, taskNumber) => {
    whoDoneHtml = "";
    problemNumber = taskNumber + 1;
    date = task.date;
    problemHeading = task.heading;
    problemDescription = task.description;
    for (let i in task.whoDone) whoDoneHtml += " " + task.whoDone[i] + " ";
    problemLink = task.link;

    totalIndividualCards += individualCards(
      problemNumber,
      date,
      problemHeading,
      problemDescription,
      whoDoneHtml,
      problemLink
    );
  });

  let challengeDayHtml =
    dayNumberHtml(currentDay) +
    totalCards(totalIndividualCards) +
    '<div class="show-all-challenges"><span onclick = "showAllDays()" > Show all Days</span>' +
    '<span onclick = "loadUnsolved()" >Unsolved Tasks</span></div >';

  document.getElementById("challenge-day").innerHTML = challengeDayHtml;
  document.getElementById("show-today").style.display = "none";
};

const loadUnsolved = () => {
  totalIndividualCards = "";
  let unSolvedCount = 0;
  for (let i = 1; i <= totalProblemCount; i++) {
    let day = "day" + i;

    problem[day].forEach((task, taskNumber) => {
      if (!task.whoDone.includes(coders[currentCoderId])) {
        unSolvedCount++;

        whoDoneHtml = "";
        problemNumber = taskNumber + 1;
        date = task.date;
        problemHeading = task.heading;
        problemDescription = task.description;
        for (let i in task.whoDone) whoDoneHtml += " " + task.whoDone[i] + " ";
        problemLink = task.link;

        totalIndividualCards += individualCards(
          problemNumber,
          date,
          problemHeading,
          problemDescription,
          whoDoneHtml,
          problemLink
        );
      }
    });
  }

  let challengeDayHtml;

  if (unSolvedCount) {
    challengeDayHtml =
      '<div id="day-number">Unsolved</div>' + totalCards(totalIndividualCards);

    document.getElementById("challenge-day").innerHTML = challengeDayHtml;
  } else {
    challengeDayHtml =
      '<div id="day-number">No Unsolved</div>' +
      totalCards(totalIndividualCards);

    document.getElementById("challenge-day").innerHTML = challengeDayHtml;
  }

  document.getElementById("show-today").style.display = "inline-block";
};

const load = () => {
  loadCurrentDay();
};

const showToday = () => {
  loadCurrentDay();
};
