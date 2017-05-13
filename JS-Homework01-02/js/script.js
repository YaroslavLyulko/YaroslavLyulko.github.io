//* JS Homework #01 */
function pow(){
var EnteredNumber = prompt("Введите число");
var EnteredPower = prompt("Введите степень");
var Result = 1;

if ((Math.round(EnteredNumber) != EnteredNumber) || (Math.round(EnteredPower) != EnteredPower)) {
    console.log("Введено не целое число");
    return;
}

if ((isNaN(+EnteredNumber)) || (isNaN(+EnteredPower))){
    console.log("Результат моей функции Pow = " + "NaN");
    console.log("Результат JS функции Pow = " + Math.pow(EnteredNumber, EnteredPower));
    return;
} 

if (EnteredPower > 0){
  for (var i = 0; i < EnteredPower; i++) {
  Result = Result * EnteredNumber;
  }
} 
else if (EnteredPower < 0){
  for (var i = 0; i < Math.abs(EnteredPower); i++) {
  Result = Result * EnteredNumber;
  }
  Result = 1 / Result;
}

console.log("Результат моей функции Pow = " + Result);
console.log("Результат JS функции Pow = " + Math.pow(EnteredNumber, EnteredPower));
} 

pow();

//* JS Homework #02 */

function authorization(){
  var ArrNames = new Array(5);
  var UserName;
  var UserIndex;

  for (var i = 0; i < 5; i++) {
    UserIndex = i + 1;
    ArrNames[i] = prompt("Введите имя пользователя №" + UserIndex + " для создания массима имен");
  }

  console.log("Массив введенных имен = " + ArrNames);
  
  UserName = prompt("Введите имя пользователя для авторизации");
  for (var i = 0; i < 5; i++) {
    if (UserName === ArrNames[i]) {
    alert(UserName + ", вы успешно вошли");
    return;
    }
  }
  alert("Пользователь с именем " + UserName + " не найден!");

}

authorization();