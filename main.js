import './style.css';
import { setupCalculator } from './calculator.js';

document.querySelector('#app').innerHTML = `
  <div></div>
`;

setupCalculator(document.querySelector('#app'));