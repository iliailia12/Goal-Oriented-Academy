
import { readInputs } from './inputReader.js';
import { showData } from './inputPrinter.js';

document.getElementById("sendBtn").addEventListener("click", () => {
  const data = readInputs(); 
  showData(data);            
});
