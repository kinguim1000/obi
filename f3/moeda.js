scanf("%d%d", "quantidade", "k");
let array = [];
for (let i = 0; i < quantidade; i++) {
  scanf("%d", "num");
  array = array.concat(num);
}
let arrayorg = array.sort((a, b) => a - b);
let maior = arrayorg[arrayorg.length - 1];
let menor = arrayorg[0];
let cont = [];
for (let c = arrayorg.length; c > 0; c--) {
  if (arrayorg[c] == arrayorg[c - 1]) {
    cont[arrayorg[c]] = cont[arrayorg[c]]++;
    arrayorg.splice(c, 1);
  }
}
let numerosdif = arrayorg.length - k;

printf("%d", valor);
