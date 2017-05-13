//* JS Homework #01 */
function pow(){
var Number = prompt("Введите число");
var Power = prompt("Введите степень");
var Result = 1;

if ((isNaN(+Number)) || (isNaN(+Power)))
{
    console.log("Результат моей функции Pow = " + "NaN");
    console.log("Результат JS функции Pow = " + Math.pow(Number, Power));
    return;
} 

if (Power > 0){
  for (var i = 0; i < Power; i++) {
  Result = Result * Number;
  }
} 
else if (Power < 0){
  for (var i = 0; i < Math.abs(Power); i++) {
  Result = Result * Number;
  }
  Result = 1 / Result;
}

console.log("Результат моей функции Pow = " + Result);
console.log("Результат JS функции Pow = " + Math.pow(Number, Power));
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