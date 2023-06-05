scanf("%d", "quantidade");
var arr = [];
for (var i = 0; i < quantidade; i++) {
  scanf("%s%d", "l1", "l2");
  arr.push([l1, l2, i]);
}
arr.sort((a, b) => b[1] - a[1]);

printf("%s\n%d\n", arr[0][0], arr[0][1]);
