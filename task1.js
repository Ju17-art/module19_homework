function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

// Проверка
const person = {
  city: "Moscow",
};

const student = Object.create(person);
student.ownCity = "Piter";
student.name = "Sasha";

printOwnProperties(student);
