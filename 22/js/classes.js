export class Student {
  constructor(name, surname, birthYear) {
    if (!name || !surname || !birthYear)
      throw new Error("Parameters are required");

    const parsedBirthYear = parseInt(birthYear);
    if (
      isNaN(parsedBirthYear) ||
      parsedBirthYear > new Date().getFullYear() ||
      parsedBirthYear < 0
    )
      throw new Error("Invalid Birth Year");

    this.name = name;
    this.surname = surname;
    this.birthYear = +parsedBirthYear;
    this.grades = [];
    this.attendance = Array.from({ length: 25 }, () => null);
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAvgGrade() {
    if (this.grades.length === 0) return 0;
    else
      return (
        this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
      );
  }

  getAvgAttendance() {
    const classes = this.attendance.filter((val) => val !== null);
    const totalClasses = classes.length;
    const numVisits = classes.filter((val) => val === true).length;

    return totalClasses > 0 ? numVisits / totalClasses : 0;
  }

  present() {
    const index = this.attendance.indexOf(null);

    if (index !== -1) {
      this.attendance[index] = true;
    }

    return this;
  }

  absent() {
    const index = this.attendance.indexOf(null);

    if (index !== -1) {
      this.attendance[index] = false;
    }

    return this;
  }

  summary() {
    const avgGrade = this.getAvgGrade();
    const avgAttendance = this.getAvgAttendance();

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return "Добре, але можна краще";
    } else return "Редиска!";
  }
}
