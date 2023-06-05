scanf("%d%d", "saloes", "caminhos");
var total = 0;
const arr = [];
for (var i = 0; i < caminhos; i++) {
  scanf("%d%d", "l1", "l2");
  arr.push([l1, l2]);
}

// console.log(arr);
scanf("%d", "sugestoes");
var a, b, temp, temp1;
for (var c = 0; c < sugestoes; c++) {
  scanf("%d%d", "reps", "a");
  temp = true;
  for (var j = 0; j < reps - 1; j++) {
    scanf("%d", "b");

    //tem [1,2] preciso saber se existe [1,2] ou [2,1]
    temp1 = true;
    for (var i = 0; i < arr.length; i++) {
      //console.log([a, b], arr[i], [b, a]);
      if (
        (arr[i][0] == a || arr[i][0] == b) &&
        (arr[i][1] == a || arr[i][1] == b)
      ) {
        temp1 = false;
        break;
        //console.log("caso1");
      }
    }
    if (temp1) {
      temp = false;
    }

    a = b;
  }
  if (temp) {
    total = total + 1;
  }
}
printf("%d\n", total);
