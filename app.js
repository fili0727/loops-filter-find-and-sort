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
  console.log(teacher);
  console.log(teachers);
  console.log(names);
  console.log(years);
  loopThroughNames();
  loopThroughTeachers();
  loopThroughYears();
  loopThroughName();
  loopThroughYears();
  loopThroughFiveFirstYears();
  loopThrougLastFiveYears();
  logNumbers();
  namesss();
  teachersLoop();
  teachersOver40();
  forOfSearchTeachersByName("er");
}

// ========== forEach ========== //
function loopThroughNames() {
  names.forEach(logName);
}
function logName(name, index) {
  console.log(index);

  if (index === 0) {
    console.log("first name in array", name);
  } else if (index === names.length - 1) {
    console.log("Last name in array", name);
  } else if (index % 2 === 1) {
    console.log("every other name", name);
  } else {
    console.log(name);
  }
}

function loopThroughTeachers() {
  teachers.forEach(logTeachers);
}
function logTeachers(teachers, index) {
  console.log(index);

  if (index === 0) {
    console.log("first teacher in array", teachers);
  } else if (index === teachers.length - 1) {
    console.log("Last teacher in array", teachers);
  } else if (index % 2 === 1) {
    console.log("every other teacher", teachers);
  } else {
    console.log(teacher);
  }
}
function loopThroughYears() {
  years.forEach(logYears);
}
function logYears(years, index) {
  console.log(index);

  if (index === 0) {
    console.log("first year in array", years);
  } else if (index === years.length - 1) {
    console.log("Last year in array", years);
  } else if (index % 2 === 1) {
    console.log("every other year", years);
  } else {
    console.log(years);
  }
}
// ========== for loop ========== //
function loopThroughName() {
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
  }
}
function loopThroughYears() {
  for (let index = 0; index < years.length; index++) {
    console.log(index);
    if (index === years.length - 1) {
      console.log("last year in array", years[index]);
    }
    if (years[index] === 2023) {
      console.log("current year", years[index]);
    }
    console.log(years[index]);
  }
}
function loopThroughFiveFirstYears() {
  for (let index = 0; index < 5; index++) {
    console.log(index);
    console.log(years[index]);
  }
}

function loopThrougLastFiveYears() {
  for (let index = 4; index < 9; index++) {
    console.log(index);
    console.log(years[index]);
  }
}
function logNumbers() {
  for (let index = 0; index < 10; index++) {
    const element = [index];
    console.log(index);
  }
  for (let index = 1; index < 11; index++) {
    const element = [index];
    console.log(index);
  }
  for (let index = 10; index > -1; index--) {
    const element = [index];
    console.log(index);
    if (element[index] === 0) {
      console.log("liftoff", index);
    }
  }
  for (let index = 1; index < 20; index += 2) {
    const element = [index];
    console.log(index);
  }
  for (let index = 1; index < 16777217; index *= 2) {
    const element = [index];
    console.log(index);
  }
  for (let index = 111; index < 139; index += 3) {
    const element = [index];
    console.log(index);
  }
  for (let index = 100; index > -1; index -= 10) {
    const element = [index];
    console.log(index);
  }
}
// ========== for of loop ========== //
function namesss() {
  for (const name of names) {
    console.log(name);
  }
}
function teachersLoop() {
  for (const teacher of teachers) {
    console.log(teacher);
  }
}

function teachersOver40() {
  const results = [];
  for (const teacher of teachers) {
    if (teacher.age > 40) {
      results.push(teacher);
    }
  }
  console.log(results);
}

function forOfSearchTeachersByName(searchValue) {
  console.log(searchValue);
  const results = [];
  for (const teacher of teachers) {
    console.log(teacher);
    if (teacher.name.includes(searchValue)) {
      console.log(teacher);
    }
  }
  console.log(teacher.name.includes(searchValue));
}
// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
