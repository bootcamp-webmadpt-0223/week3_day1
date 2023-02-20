// Create a collection of students (name,age)
let student = {
  name: "Student1",
};
let students = [student];
// Create a classroom object (name, teacher, students)
let classroom = { name: "WebDev", teacher: "Nico", students: students };
// Create a school object (name, classrooms)
let school = {
  name: "Ironhack",
  classrooms: [classroom],
};
classroom = school;
// Create school system object (schools)
let schoolSystem = [school];

schoolSystem[0].classrooms[0].students[0].name = "New student";

console.log(student);
