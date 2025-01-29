const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const date = new Date();
const year = date.getFullYear();
const lastModified = document.lastModified;
const copyrightYear = document.querySelector("#current-year");
const lastUpdate = document.querySelector("#lastModified");
const profilePic = document.querySelector(".js-menu-icon");
const navBar = document.querySelector(".nav");
const coursesSection = document.querySelector(".courses__section");
const allBtn = document.querySelector(".allBtn");
const cseBtn = document.querySelector(".cseBtn");
const wddBtn = document.querySelector(".wddBtn");
const cseCourses = courses.filter((course) => course.subject === "CSE");
const wddCourses = courses.filter((course) => course.subject === "WDD");
const courseDetails = document.querySelector("#course-details");
let courseList;

copyrightYear.innerHTML = `©${year}<br>`;
lastUpdate.textContent = `Last update: ${lastModified}`;

function displayCreditsInfo(courses) {
  const existingCreditsInfo = document.querySelector(".creditsInfo__div");
  if (existingCreditsInfo) {
    existingCreditsInfo.remove();
  }

  const creditsInfoDiv = document.createElement("div");
  creditsInfoDiv.classList.add("creditsInfo__div");
  const paraEl = document.createElement("p");
  paraEl.textContent = `Total Credits: ${reduce(courses)}`;
  creditsInfoDiv.append(paraEl);
  coursesSection.append(creditsInfoDiv);
}

function renderCourses(courses) {
  courseList = document.createElement("div");
  courseList.classList.add("js-course-list");
  const listContainer = document.createElement("ul");
  courses.forEach((course) => {
    const courseName = document.createElement("li");
    courseName.classList.add("course__list");
    courseName.textContent = `${course.subject} ${course.number}`;
    listContainer.append(courseName);
    if (course.completed === true) {
      courseName.classList.add("completed");
    } else {
      courseName.classList.add("incomplete");
    }
    courseName.addEventListener("click", () => {
      displayCourseDetails(course);
    });
  });
  coursesSection.append(courseList);
  courseList.append(listContainer);
}

function filterOnClick(courses, button) {
  button.addEventListener("click", () => {
    courseList.innerHTML = "";
    displayCreditsInfo(courses);
    renderCourses(courses);
  });
}

function reduce(courses) {
  const totalCredits = courses.reduce((accumulator, course) => {
    return (accumulator += course.credits);
  }, 0);
  return totalCredits;
}

function displayCourseDetails(course) {
    const technologiesHTML = 
        course.technology.length > 1
        ? `<p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>`
        : `<p><strong>Technologies</strong>: ${course.technology}</p>`;

  courseDetails.innerHTML = `
    <button id='closeModal'>❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    ${technologiesHTML}`

  courseDetails.showModal();

  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

profilePic.addEventListener("click", () => {
  profilePic.classList.toggle("rotate");
  navBar.classList.toggle("js-open-navBar");
});

displayCreditsInfo(courses);
renderCourses(courses);
filterOnClick(courses, allBtn);
filterOnClick(cseCourses, cseBtn);
filterOnClick(wddCourses, wddBtn);