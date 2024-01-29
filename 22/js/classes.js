export class Student {
  constructor(name, surname, birthYear) {
    if (!name || !surname || !birthYear)
      throw new Error("Parameters are required");

    if (
      !Number.isInteger(+birthYear) ||
      +birthYear > new Date().getFullYear() ||
      new Date().getFullYear() < 0
    )
      throw new Error("Invalid Birth Year");

    this.name = name;
    this.surname = surname;
    this.birthYear = +birthYear;
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
    let totalClasses = 0,
      numVisits = 0;

    for (const attendance of this.attendance) {
      if (attendance === null) break;
      totalClasses += 1;
      if (attendance) numVisits += 1;
    }

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
      this.attendance[index] = true;
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
