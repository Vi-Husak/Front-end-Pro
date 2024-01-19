/* 
Частина №1

Створити скрипт яки повинен виконувати наступне:
    запитати у користувача рік народження;
    запитати в нього, в якому місті він живе;
    запитати його улюблений вид спорту.

При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
    його вік;
    якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, 
    столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

Частина №2

Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення 
“Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

Все це має бути відображено в одному вікні (алерті).

Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” 
і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
*/

const year = prompt("Введіть рік свого народження:");
const currentYear = new Date().getFullYear();
const messages = [];

if (year === null || !year)
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
else if (isNaN(year) || Math.floor(year) <= 0 || Math.floor(year) > currentYear)
  alert("Ви ввели невірно рік народження.");
else {
  const age = currentYear - Math.floor(year);
  messages.push(`Ваш вік ${age} років.`);
}

const city = prompt("Введіть місто в якому ви проживаєте:")
  ?.trim()
  .toLowerCase();

if (city === null || !city)
  alert("Шкода, що Ви не захотіли ввести місто в якому ви проживаєте.");
else if (city.length < 2) alert("Ви ввели невірно місто.");
else {
  let cityMessage = "столиці ";
  switch (city) {
    case "київ":
      cityMessage += "України.";
      break;
    case "вашингтон":
      cityMessage += "США.";
      break;
    case "лондон":
      cityMessage += "Великої Британії.";
      break;

    default:
      const formettedCity = city.charAt(0).toUpperCase() + city.slice(1);
      cityMessage = `місті ${formettedCity}.`;
      break;
  }

  messages.push(`Ти живеш у ${cityMessage}`);
}

const sport = prompt("Введіть ваш улювлений вид спорту:")?.trim().toLowerCase();

if (sport === null || !sport)
  alert("Шкода, що Ви не захотіли ввести улюблений вид спорту.");
else {
  messages.push(`Ваш улюблений вид спорту ${sport}.`);
  let sportMessage = "";
  switch (sport) {
    case "футбол":
      sportMessage += "Ліонеля Мессі?";
      break;
    case "бокс":
      sportMessage += "Олександр Усик?";
      break;
    case "баскетбол":
      sportMessage += "Майкл Джордан?";
      break;

    default:
      break;
  }
  sportMessage && messages.push(`Круто! Хочеш стати як ${sportMessage}`);
}

const finalMessage = messages.join("\n");
finalMessage
  ? alert(finalMessage)
  : alert("Шкода, що Ви не захотіли ввести ніякої інформації.");
