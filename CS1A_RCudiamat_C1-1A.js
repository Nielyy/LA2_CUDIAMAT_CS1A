
const student1 = {
  firstName: "Rona mae",
  middleName: "Sambrano",
  lastName: "Roy",
  birthdate: "October 25, 2006",
  birthplace: "Lancuas, San Emilio, Ilocos Sur, Philippines 2722",
  address: "Lancuas, San Emilio, Ilocos Sur, Philippines 2722",
  course: "Bachelor of Secondary Education(1st year) ",
  dreamJob: "Teacher"
};

const student2 = {
  firstName: "Gary Dave",
  middleName: "Ramirez",
  lastName: "Acena",
  birthdate: "October 8, 2004",
  birthplace: "San Agustin, Candon City, Ilocos Sur, Philippines 2710",
  address: "San Agustin, Candon City, Ilocos Sur, Philippines 2710",
  course: "Bachelor of Science in Computer Science 2",
  dreamJob: "Company Programmer"
};



function formatStudentInfo(student) {
  return `[${student.firstName} ${student.middleName} ${student.lastName}] was born [${student.birthdate}] at [${student.birthplace}], and currently living at [${student.address}]. [${student.firstName.toLowerCase()} ${student.middleName.toLowerCase()} ${student.lastName.toLowerCase()}] is taking up [${student.course}] and dreams to be [${student.dreamJob}] after graduation.`;
}

console.log(formatStudentInfo(student1));
console.log(formatStudentInfo(student2));