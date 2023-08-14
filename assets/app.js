let who = ['The dog🐶', 'My grandma🧑‍🦳', 'His turtle🐢', 'My bird🐦'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function excuseGenerator() {
  //Esta Funcion se explixca; si who tiene una longitud de 4 (índices de Who 0, 1, 2, 3) [Math.floor (Redondea el numero o induce) (Math.random(nos da un indice aleatorio) * who.length (longitud de la variable))
  let randomWho = who[Math.floor(Math.random() * who.length)]; 
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`; // se concatenan las variables creadas anteriormente
  return excuse;
}

function displayExcuse() {// se reemplaza o se crea el texto html
  let excuse = excuseGenerator();
  let excuseElement = document.getElementById('excuse');
  excuseElement.textContent = excuse;
}

window.onload = function() {//Genera la excusa cuando la pagina se ha recargado completamente
  displayExcuse();
};
