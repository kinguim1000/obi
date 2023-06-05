function callback(element) {
  if (element[0] == a || element[0] == b) {
    if (element[0] == b || element[0] == a) temp1 = false;
  }
}
scanf("%d%d", "saloes", "caminhos");
var total = 0;
const arr = [];
for (var i = 0; i < caminhos; i++) {
  scanf("%d%d", "l1", "l2");
  arr.push([l1, l2]);
}

scanf("%d", "sugestoes");
var a, b, temp, temp1;
for (var c = 0; c < sugestoes; c++) {
  scanf("%d%d", "reps", "a");
  temp = true;
  for (var j = 0; j < reps - 1; j++) {
    scanf("%d", "b");

    temp1 = true;

    arr.forEach(callback);

    if (temp1) {
      temp = false;
    }

    a = b;
  }
  if (temp) {
    total += 1;
  }
}
printf("%d\n", total);
