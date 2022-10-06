scanf("%d%d", "quantidade", "k");
let array = [];
for (let a = 0; a < quantidade; a++) {
  scanf("%d", "num");
  array = array.concat(num);
}
if (k == 1) {
  let contador = 0;
  array = array.sort((a, b) => a - b);
  maior = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    contador = contador + maior - array[i];
  }
}

printf("%d\n", contador);
