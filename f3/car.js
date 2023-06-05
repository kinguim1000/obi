km = 300 / 100;
arr = [
  [2, 3],
  [4, 5],
  [2, 6],
];
let diferenca;
let obj = [];
for (let p in arr) {
  for (let t = p; t < arr.length; t++) {
    //vai iniciar com o proprio coord
    diferenca =
      Math.abs(arr[p][0] - arr[t][0]) + Math.abs(arr[p][1] - arr[t][1]);
    console.log(diferenca);
    if (diferenca == 0) obj = obj.concat([[p]]);
  }
}
console.log(obj);
