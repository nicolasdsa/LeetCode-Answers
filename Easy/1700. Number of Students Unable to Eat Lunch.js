/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  while (students.length != 0) {
    if (students[0] == sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      continue;
    }

    student = students.shift();
    students.push(student);

    if (students.every((elem) => elem == 1) && sandwiches[0] == 0) {
      break;
    }

    if (students.every((elem) => elem == 0) && sandwiches[0] == 1) {
      break;
    }
  }

  return students.length;
};
