scanf("%d%d%d%d", "total", "c1", "c2", "c3");
var arr = [c1, c2, c3];
arr.sort((a, b) => a - b);
if (total < arr[0]) {
  printf("%d\n", 0);
} else if (total < arr[0] + arr[1]) {
  printf("%d\n", 1);
} else if (total < arr[0] + arr[1] + arr[2]) {
  printf("%d\n", 2);
} else {
  printf("%d\n", 3);
}
