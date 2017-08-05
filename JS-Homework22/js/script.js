$(document).ready(function() {
'use strict';
const data = {
   testTitle: 'Тест по какой-то теме',
   questions: [
     {
       title: 'Вопрос #1 - Арбуз это ...',
       answers: ['ягода', 'фрукт', 'овощ'],
       correctAnswers: [1]
     },
     {
       title: 'Вопрос #2 - Тональный крем нужно наносить ...',
       answers: ['кончиками пальцев', 'кисточкой', 'бьютиблендером', 'спонжиком'],
       correctAnswers: [1, 2, 3, 4]
     },
     {
       title: 'Вопрос #3 - База под тональный крем подбирается в зависимости от ...',
       answers: ['типа кожи', 'цвета кожи', 'времени года', 'запаха'],
       correctAnswers: [1, 3]
     }
   ]
 };

localStorage.setItem('Test', JSON.stringify(data));

const testData = localStorage.getItem('Test');
const parsedTestData = JSON.parse(testData);

const parent = document.getElementById('container');
const sourse = document.getElementById('tmpl').textContent;
const template = _.template(sourse);

parent.innerHTML += template(parsedTestData);

//Result check
var checkboxes = document.querySelectorAll('input[type="checkbox"]'),
  arrCorrectAnswers = [],
  arrAnswers,
  resultMessage = document.getElementById('resultText');

_.forEach(parsedTestData.questions, itemQuestions => {
  _.forEach(itemQuestions.answers, (itemAnswers, indexAnswers) => {
    let result = false;
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

// arrCorrectAnswers = [true,false,false,true,true,true,true,true,false,true,false];

document.getElementById("btnCheckResult").addEventListener("click", () => {
    
    arrAnswers = getAnswers(checkboxes);
    
    if (_.isEqual(arrCorrectAnswers, arrAnswers)) {
      resultMessage.innerHTML = "Test done successfully!"
      $('#myModal').modal('show');
    } else {
      resultMessage.innerHTML = "Test failed =((.. try again!"
      $('#myModal').modal('show');
    }

    checkboxes.forEach(item => item.checked = false);

	});

function getAnswers(arr) {
	return _.map(arr, item => item.checked);
}
});