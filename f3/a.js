scanf("%d", "quantidade");

if (quantidade % 4 == 0) {
  scanf("%d%d%d%d", "num1", "num2", "num3", "num4");
  //for (let i = 3; i < quantidade; i++) {
  //  scanf("%d", "num");
  //}
  let a = num1 * 1000 + num2 * 100 + num3 * 10 + num4;
  printf("%d\n", a);
} else {
  let a = 0;
  if (quantidade % 2 == 1) {
    quantidade = quantidade - 1;
  }
  for (let i = 0; i < quantidade / 2; i++) {
    scanf("%d", "num");
    a = a * 10 + num;
  }
  for (let i = quantidade / 2; i < quantidade / 2; i++) {
    scanf("%d", "num");
    let b = b * 10 + num;
  }
  if (a + 1 == b) {
    printf("%d\n", a);
  }
}
