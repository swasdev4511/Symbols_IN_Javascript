// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Symbols in JS</h1>`;

var sym = Symbol('age');

var obj = {
  name: 'Ajay',
  [sym]: 28,
  [Symbol('gender')]: '55',
  [Symbol('gender')]: 'Male',
  profession: 'Teaacher'
};

console.log('object keys ⇒ ', Object.keys(obj));

for (let item in obj) {
  console.log('prop ⇒ ', item);
}

const symbols = Object.getOwnPropertySymbols(obj);

const genderSym = symbols.find(
  i => i.description && i.description.includes('gender')
);
console.log('genderSym ⇒ ', genderSym);
