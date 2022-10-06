scanf("%d", "val1");
for (let b = 0; b < val1; b++) {}
if (val1 % 4 == 0) {
  for (let a = 0; a < 4; a++) {
    brr = brr.concat(arr[a]);
  }

  console.log(brr.join(""));
  printf("%d\n", parseInt(brr.join("")));
} else {
  if (val1 % 2 == 1) {
    val1 = val1 - 1;
  }
  let valor = [];
  for (let i = 0; i < val1 / 2; i++) {
    valor.push(arr[i]);
  }
  printf("%d\n", parseInt(valor.join("")));
}

//let val1 = 4;
//let arr = [1, 0, 1, 1];
//let valor = [];
