let studentLabs2 = [
  {
    student: "Blake",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runab: function (num) {
      return num * num;
    },
  },
];

const gradeLabs = (studentLab) => {
  let grades = {};
  studentLab.forEach((obj) => {
    let res = "passed";
    try {
      obj.runLab();
    } catch (error) {
      res = "failed";
      console.log("Error throw");
    } finally {
      grades[obj.student] = res;
    }
  });
  return grades;
};
console.log(gradeLabs(studentLabs2));
