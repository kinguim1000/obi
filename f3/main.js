let arr = [];
for (let i = 0; i < 4; i++) {
  scanf("%d", "num");
  arr = arr.concat(num);
}
if (arr[2] > arr[0] / 2 || arr[2] > arr[1] / 2) {
  printf("%s\n", "N");
} else if (!Number.isInteger(360 / arr[3])) {
  printf("%s\n", "N");
} else {
  printf("%s\n", "S");
}
