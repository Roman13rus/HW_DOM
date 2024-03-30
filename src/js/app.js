import GamePerson from './gamePerson/gamePerson';
import '../css/index.css'

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.playing-field');
  const person = new GamePerson(table);
  console.log(person);
  setInterval(() => {
    person.dellPersonCell();
    person.randomCell();
    person.addPersonInCell();
  }, 2000);
});
