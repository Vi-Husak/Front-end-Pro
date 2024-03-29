/*
Вам потрібно зробити конструктор сутності "Студент".
    Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
    І є можливість отримати вік студента та його середній бал – це методи.
    Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
    Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, 
    в масив записується true, коли викликаємо .absent() - записується false. 
    Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
    Масив – це властивість, present та absent – ​​методи.
    Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
    і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
    якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.
*/
import { Student } from "./classes.js";

const student1 = new Student("Владислав", "Баран", 2004);
student1.grades = [85, 92, 78, 89, 95];
student1.present().present().absent().absent();

console.log(student1.getFullName());
console.log(`Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAvgGrade()}`);
console.log(`Відвідуваність: ${student1.getAvgAttendance()}`);
console.log(`Висновок: ${student1.summary()}`);

const student2 = new Student("Вероніка", "Козак", 2003);
student2.grades = [92, 95, 89, 97, 93];
student2.present().present().present().absent();
console.log(student2.getFullName());
console.log(`Вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAvgGrade()}`);
console.log(`Відвідуваність: ${student2.getAvgAttendance()}`);
console.log(`Висновок: ${student2.summary()}`);
