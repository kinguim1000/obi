scanf("%d%d", "quantidade", "k");
let array = [];
for (let a = 0; a < quantidade; a++) {
  scanf("%d", "num");
  array = array.concat(num);
}

if ((k = 1)) {
  let contador = 0;
  array = array.sort((a, b) => a - b);
  maior = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    contador = contador + maior - array[i];
  }
  printf("%d\n", contador);
}

let arrayorg = array.sort((a, b) => a - b);
const arrayrep = arrayorg.join("");

let maior = arrayorg[arrayorg.length - 1];
let menor = arrayorg[0];
let cont = [];
for (let c = arrayorg.length; c > 0; c--) {
  if (arrayorg[c] == arrayorg[c - 1]) {
    cont = cont.concat(arrayorg[c]);
    arrayorg.splice(c, 1);
  }
}
let numerosdif = arrayorg.length - k;
let differ = [];
for (let a = 1; a < arrayorg.length; a++) {
  differ[a - 1] = arrayorg[a] - arrayorg[a - 1];
}
let differs = differ.join("");
let menordif = differ.sort((a, b) => a - b)[0];
let indexofdif = differs.split("").indexOf(differ[menordif].toString());

console.log(differs.split(""));
console.log(arrayrep.split(""));
console.log(indexofdif);
let contador = 0;
let finalnum = 0;

printf("%d\n", finalnum);
