/*
1. Створити клас Людина.
Властивості:
імʼя;
стать.
Методи:
конструктор, який приймає два параметри: імʼя та стать.
2. Створити клас Квартира.
Властивості:
конструктор не потрібен;
масив жителів, який при створенні пустий.
Методи:
додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
3. Створити клас Будинок.
Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;
додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/
import { Human, Appartment, Building } from "./classes.js";

// Створення екземплярів класу Людина
const person1 = new Human("Anna", "female");
const person2 = new Human("John", "male");
const person3 = new Human("Emily", "female");
const person4 = new Human("Michael", "male");

// Створення екземплярів класу Квартира та додавання мешканців
const appartment1 = new Appartment();
appartment1.addResident(person1).addResident(person2);

const appartment2 = new Appartment();
appartment2.addResident(person3);

const appartment3 = new Appartment();
appartment3.addResident(person4);

// Створення екземпляру класу Будинок та додавання квартир
const building = new Building(3); // Максимум 3 квартири в цьому будинку
building
  .addAppartment(appartment1)
  .addAppartment(appartment2)
  .addAppartment(appartment3);

console.log(building);
