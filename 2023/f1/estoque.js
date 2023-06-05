var total = 0;
var arr = [];
scanf("%d%d", "x", "y");
for (var i = 0; i < x; i++) {
  arr.push([]);
  for (var j = 0; j < y; j++) {
    scanf("%d", "v");
    arr[i].push(v);
  }
}

scanf("%d", "pedido");

for (var k = 0; k < pedido; k++) {
  scanf("%d%d", "pedidox", "pedidoy");

  if (arr[pedidox - 1][pedidoy - 1] != 0) {
    total = total + 1;
    arr[pedidox - 1].splice(pedidoy - 1, 1, arr[pedidox - 1][pedidoy - 1] - 1);
  }
}
printf("%d\n", total);
