scanf("%d%d", "inutil1", "inutil2");
scanf("%d%d", "cidades", "quantidade");
let array;
for (let i = 0; i < cidades; i++) {
  scanf("%d%d", "x", "y");
  array.push([x, y]);
}
let contador = 0;
let val;

for (let i = 0; i < array.length - 1; i++) {
  let cidade1 = array[i][0] + array[i][1];
  let a = i + 1;

  let cidade2 = array[a];

  let cidade2s = cidade2[0] + cidade2[1];
  if (cidade2s - cidade1 < 0) {
    val = cidade1 - cidade2s;
  } else {
    val = cidade2s - cidade1;
  }
  if (val > quantidade / 100) {
    contador++;
  }
}
printf("%d\n", contador);
