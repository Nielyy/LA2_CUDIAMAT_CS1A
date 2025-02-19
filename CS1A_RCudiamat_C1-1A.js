
const student1 = {
  firstName: "Juan",
  middleName: "Gamoso",
  lastName: "Dela Cruz",
  birthdate: "January 1, 2001",
  birthplace: "Upper Bonifacio, Baguio City, Benguet, Philippines 2600",
  address: "San Nicolas, Candon City, Ilocos Sur, Philippines 2710",
  course: "Bachelor of Science in Computer Science",
  dreamJob: "Software Engineer"
};

const student2 = {
  firstName: "Maria",
  middleName: "Santos",
  lastName: "Garcia",
  birthdate: "March 15, 2002",
  birthplace: "Poblacion, Vigan City, Ilocos Sur, Philippines 2700",
  address: "Barangay 1, Laoag City, Ilocos Norte, Philippines 9900",
  course: "Bachelor of Science in Information Technology",
  dreamJob: "Data Scientist"
};



function formatStudentInfo(student) {
  return `[${student.firstName} ${student.middleName} ${student.lastName}] was born [${student.birthdate}] at [${student.birthplace}], and currently living at [${student.address}]. [${student.firstName.toLowerCase()} ${student.middleName.toLowerCase()} ${student.lastName.toLowerCase()}] is taking up [${student.course}] and dreams to be [${student.dreamJob}] after graduation.`;
}

console.log(formatStudentInfo(student1));
console.log(formatStudentInfo(student2));