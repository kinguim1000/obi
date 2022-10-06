km = 300 / 100;
arr = [
  [2, 3],
  [4, 5],
  [2, 6],
];
let diferenca;
for (let p in arr) {
  for (let t = p; t < arr.length; t++) {
    diferenca =
      Math.abs(arr[p][0] - arr[t][0]) + Math.abs(arr[p][1] - arr[t][1]);
    console.log(diferenca);
  }
}
