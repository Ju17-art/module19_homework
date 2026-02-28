function createObjectWithoutPrototype() {
  return Object.create(null);
}

// Проверка
const obj = createObjectWithoutPrototype();

console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null
