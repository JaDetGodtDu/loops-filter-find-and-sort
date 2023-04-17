"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");

  console.log(names);
  console.log(years);
  console.log(teacher);
  console.log(teachers);
  names.forEach(showName);
  loopThroughYears();
  loopThroughFiveFirstYears();
  loopThroughLastFiveYears();
  logNumbers();
  logTeachers();
  teachersOver40();
  forOfSearchTeachersByName("sen");
}

// ========== forEach ========== //
function showName(name, i) {
  console.log(name);
  console.log(i);
  if (i == 0) {
    console.log("første index");
  } else if (i == names.length - 1) {
    console.log("sidste index");
  } else if (i % 2 == 0) {
    console.log("this index is even");
  }
}

// ========== for loop ========== //
function loopThroughYears() {
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    console.log(year);
    console.log(i);
    if (i == years.length - 1) {
      console.log("This is the last year on list");
    } else if (year == 2023) {
      console.log("This is the current year");
    }
  }
}
function loopThroughFiveFirstYears() {
  for (let i = 0; i < 5; i++) {
    const year = years[i];
    console.log(year);
  }
  console.log("first five years");
}
function loopThroughLastFiveYears() {
  for (let i = years.length - 5; i < years.length; i++) {
    const year = years[i];
    console.log(year);
  }
  console.log("last five years");
}
function logNumbers() {
  for (let i = 0; i <= 9; i++) {
    console.log(i);
  }
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  for (let i = 10; i >= 0; i--) {
    console.log(i);
    if (i == 0) {
      console.log("lift off!");
    }
  }
  for (let i = 0; i <= 19; i = i + 2) {
    console.log(i);
  }
  for (let i = 1; i <= 16777216; i = i * 2) {
    console.log(i);
  }
  for (let i = 111; i <= 138; i = i + 3) {
    console.log(i);
  }
  for (let i = 100; i >= 0; i = i - 10) {
    console.log(i);
  }
}

// ========== for of loop ========== //
function logTeachers() {
  for (const teacher of teachers) {
    console.log(teacher);
  }
}
function teachersOver40() {
  const results = [];
  for (const teacher of teachers) {
    if (teacher.age >= 40) {
      results.push(teacher);
    }
  }
  console.log(results);
}
function forOfSearchTeachersByName(searchValue) {
  console.log(searchValue);
}

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
