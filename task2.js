function checkProperty(propName, obj) {
  return obj.hasOwnProperty(propName);
}

// Проверка
const person = {
  city: "Moscow",
};

const student = Object.create(person);
student.ownCity = "Piter";

console.log(checkProperty("ownCity", student)); // true
console.log(checkProperty("city", student)); // false
