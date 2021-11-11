let num = [-3, -2, -1, 0, 1, 2, 3, -3];
let check;
for (let i = 0; i < num.length; i++) {
  if (num[i] != num[i + 1]) {
    check = false;
    console.log(check);
    break;
  }

}