let inputText = +prompt("Введите значение");
if (isNaN(inputText) === true) {
  console.log("Упс, кажется, вы ошиблись")
} else if (inputText % 2 === 0) {
  console.log("Чётное")
} else {
  console.log("Нечётное")
}