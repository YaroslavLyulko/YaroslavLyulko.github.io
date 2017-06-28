$(document).ready(function() {
'use strict';

function getAnswers(arr) {
	return _.map(arr, function(item) {
		return item.value;
	});
}

function getCorrectAnswers(arr) {
	return _.map(arr, function(item) {
		return item.checked;
	});
}

function getUserAnswers(arr) {
	return _.map(arr, function(item) {
		return item.checked;
	});
}

//Test Data Initialization
var data = {
   testTitle: 'Тест по какой-то теме',
   questions: [
     {
       question: 'Вопрос #1 - Арбуз это ...',
       answers: ['ягода', 'фрукт', 'овощ'],
       correctAnswers: [1]
     },
     {
       question: 'Вопрос #2 - Тональный крем нужно наносить ...',
       answers: ['кончиками пальцев', 'кисточкой', 'бьютиблендером', 'спонжиком'],
       correctAnswers: [1, 2, 3, 4]
     },
     {
       question: 'Вопрос #3 - База под тональный крем подбирается в зависимости от ...',
       answers: ['типа кожи', 'цвета кожи', 'времени года', 'запаха'],
       correctAnswers: [1, 3]
     }
   ]
 };

localStorage.setItem('Test', JSON.stringify(data));

var parent = document.getElementById('container');
var sourse = document.getElementById('tmpl').textContent;
var template = _.template(sourse);

var parsedTestData = JSON.parse(localStorage.getItem('Test'));
parent.innerHTML = template(parsedTestData);

//class test definition
function Test(question, answers, correctAnswers) {
  this.question = question;
  this.answers = answers;
  this.correctAnswers = correctAnswers;
}

// Save Question - click action
document.getElementsByClassName('hwClasses__btnSaveQuestion')[0].addEventListener("click", function(){
  
  var arrCorrectAnswersCB = getCorrectAnswers(document.querySelectorAll('.hwClasses input[type="checkbox"]'));
  var arrCorrectAnswers = [];

  var positiveArr = arrCorrectAnswersCB.filter(function(item) {
      return item === true;
  });

  arrCorrectAnswersCB.forEach(function(item, i) {
    if (item === true){
      arrCorrectAnswers.push(i + 1);
    }
  });

console.log('positiveArr', positiveArr);

  if (positiveArr.length == 0){
    alert("Не указан правильный вариант(ы) ответа!");
  } else if (positiveArr.length == 1){
    var TestRadio = new Test();
    TestRadio.question = document.getElementsByClassName('hwClasses__inputQuestion')[0].value;
    TestRadio.answers = getAnswers(document.getElementsByClassName('hwClasses__inputAnswer'));
    TestRadio.correctAnswers = arrCorrectAnswers;
    console.log('TestRadio', TestRadio);
    data.questions.push(TestRadio);
    localStorage.setItem('Test', JSON.stringify(data));

    var parsedTestData = JSON.parse(localStorage.getItem('Test'));
    var parent = document.getElementById('container');
    var sourse = document.getElementById('tmpl').textContent;
    var template = _.template(sourse);

    var parsedTestData = JSON.parse(localStorage.getItem('Test'));
    parent.innerHTML = template(parsedTestData);

    // updateTest();
    updateArrCorrectAnswers();
  } else if (positiveArr.length > 1) {
    var TestCheckbox = new Test();
    TestCheckbox.question = document.getElementsByClassName('hwClasses__inputQuestion')[0].value;
    TestCheckbox.answers = getAnswers(document.getElementsByClassName('hwClasses__inputAnswer'));
    TestCheckbox.correctAnswers = arrCorrectAnswers;
    console.log('TestCheckbox', TestCheckbox);
    data.questions.push(TestCheckbox);
    localStorage.setItem('Test', JSON.stringify(data));

    var parsedTestData = JSON.parse(localStorage.getItem('Test'));
    var parent = document.getElementById('container');
    var sourse = document.getElementById('tmpl').textContent;
    var template = _.template(sourse);

    var parsedTestData = JSON.parse(localStorage.getItem('Test'));
    parent.innerHTML = template(parsedTestData);
    // updateTest();
    updateArrCorrectAnswers();
  }

console.log('data = ', data);

});

//Result check
var arrCorrectAnswers = [];
  
function updateArrCorrectAnswers(){  
  
  arrCorrectAnswers = [];
  
  var result;
  var parsedTestData = JSON.parse(localStorage.getItem('Test'));

  _.forEach(parsedTestData.questions, itemQuestions => {
    _.forEach(itemQuestions.answers, (itemAnswers, indexAnswers) => {
      result = false;
      _.forEach(itemQuestions.correctAnswers, itemCorrectAnswers => {
        if ((indexAnswers + 1) == itemCorrectAnswers) {
          result = true;
        } 
      });
      if (result == true) {
          arrCorrectAnswers.push(true);
        } else {
          arrCorrectAnswers.push(false);
       }
    });
  });
}

updateArrCorrectAnswers();


var  arrAnswers,
  resultMessage = document.getElementById('resultText');

document.getElementById("btnCheckResult").addEventListener("click", function() {
  var checkboxes = document.querySelectorAll('.testBox input[type="checkbox"]');
    console.log('checkboxes ' + checkboxes);
    arrAnswers = getUserAnswers(checkboxes);
    console.log('cAnswers - ' + arrCorrectAnswers + ' ' + arrCorrectAnswers.length + ' ' + typeof(arrCorrectAnswers));
		console.log('uAnswers - ' + arrAnswers + ' ' + arrAnswers.length + ' ' + typeof(arrAnswers));
    
    if (_.isEqual(arrCorrectAnswers, arrAnswers)) {
      console.log('test done successfully!');
      resultMessage.innerHTML = "Test done successfully!"
      $('#myModal').modal('show');
    } else {
      console.log('test failed =((.. try again');
      resultMessage.innerHTML = "Test failed =((.. try again!"
      $('#myModal').modal('show');
    }

    checkboxes.forEach(function(item) {
      item.checked = false;
    });

});

//Next homework - API
var parent2 = document.getElementById('container2');
var sourse2 = document.getElementById('tmpl2').textContent;
var API_KEY = '5723966-7e68f329c0132750f857a39d3';

function getPictures() {

var searchValue = document.getElementsByClassName('searchBox__searchInput')[0].value;
console.log('searchValue = ', searchValue);
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchValue)+"&per_page=200";

fetch(URL)
  .then(function(response){
    if (response.ok){
      return response.json();
    }
    throw new Error('ERROR fetching data!');
  })
  .then(function(data){
    console.log(data);
    var templateAPI = _.template(sourse2);
    parent2.innerHTML = templateAPI(data);
  })
  .catch(function(error){
    console.log('Error --- ', error);
  });

}

document.getElementsByClassName('searchBox__btnSearch')[0].addEventListener("click", getPictures);
document.getElementsByClassName('searchBox__searchInput')[0].addEventListener("keypress", function(e){
  if(e.keyCode === 13){getPictures();}
  }
    );
});