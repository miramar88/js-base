let materialMap = new Map([
  ['yarn', '100g'],
  ['needles', 4],
  [4, 'markers'],
  [true, 'read instructions']
]);

for (let material of materialMap.keys()) {
  console.log(material);
}

materialMap.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
})