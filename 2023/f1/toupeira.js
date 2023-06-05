// cabeçalho para incluir printf, scanf e fgets
// em programas javascript

const scanfPrintfObi = require("scanf-printf-obi");

var scanf_stub = require("scanf-printf-obi").scanf,
  printf_stub = require("scanf-printf-obi").sprintf,
  fgets_stub = require("scanf-printf-obi").fgets;

function scanf(format) {
  var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
  eval(res);
}

function printf(args) {
  var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
  process.stdout.write(res);
}

function fgets(args) {
  var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
  eval(res);
}
// final de cabeçalho
scanf("%d%d", "saloes", "caminhos");
var total = 0;
var arr = [];
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
