class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = energy;
  }
  info() {
    return `${this.name} is a ${this.age} years old ${this.role},with ${this.energy} energy`;
  }
}

class Teacher extends UniversityMember {}

class Student extends UniversityMember {}

class University {
  teachers = [];
  students = [];

  addMember(member) {
    if (member.role === "student") {
      this.students = [...this.students, member];
    } else {
      this.teachers = [...this.teachers, member];
    }
  }
  removeMember(member) {
    if (member.role === "student") {
      this.students = this.students.filter((obj) => obj !== member);
    } else {
      this.teachers = this.teachers.filter((obj) => obj !== member);
    }
  }
  startLesson() {
    this.students.forEach((student) => {
      student.energy -= 2;
    });
    this.teachers.forEach((teacher) => {
      teacher.energy -= 5;
    });
  }
}

const memberSany = new Student("Sany", 24, "student");
const memberTony = new Student("Tony", 23, "student");
const memberRicardo = new Teacher("Ricardo", 43, "teacher");
const programmingUniversity = new University();
programmingUniversity.addMember(memberSany);
programmingUniversity.addMember(memberTony);
programmingUniversity.addMember(memberRicardo);
programmingUniversity.removeMember(memberSany);
console.log(programmingUniversity.students);
programmingUniversity.startLesson();
programmingUniversity.startLesson();
console.log(programmingUniversity);
