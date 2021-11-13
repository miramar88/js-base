let x;

function isSimple(x) {
  if (x < 0 || x > 1000) {
    console.log("Неверное значение");
  } else if (x >= 0 && x <= 1000) {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        console.log('x не является простым числом');
        break;
      }
      console.log("x - простое число");
      break;
    }
  } else if (typeof x == 'string' || typeof x == 'boolean') {
    console.log("Неверное значение");
  }
}

isSimple();
