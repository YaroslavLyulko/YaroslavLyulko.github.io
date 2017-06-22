$(document).ready(function() {
'use strict';
var data = {
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

var testData = localStorage.getItem('Test');
console.log('testData = ' + testData);
var parsedTestData = JSON.parse(testData);
console.log('parsedTestData = ' + parsedTestData);

var parent = document.getElementById('container');
var sourse = document.getElementById('tmpl').textContent;
var template = _.template(sourse);

parent.innerHTML += template(parsedTestData);

//Result check
var checkboxes = document.querySelectorAll('input[type="checkbox"]'),
  arrCorrectAnswers = [],
  arrAnswers,
  resultMessage = document.getElementById('resultText');

// for (var i = 0, length1 =  parsedTestData.questions.length; i < length1; i++) {
//   for (var j = 0; j < parsedTestData.questions[i].answers.length; j++) {
//     var result = false;
//     for (var k = 0; k < parsedTestData.questions[i].correctAnswers.length; k++) {
//       if ((j + 1) == parsedTestData.questions[i].correctAnswers[k]) {
//         result = true;
//       } 
//     }
//     if (result == true) {
//         arrCorrectAnswers.push(true);
//       } else {
//         arrCorrectAnswers.push(false);
//       }
//   }
// }

var result;

_.forEach(parsedTestData.questions, function(itemQuestions) {
  _.forEach(itemQuestions.answers, function(itemAnswers, indexAnswers) {
    result = false;
    _.forEach(itemQuestions.correctAnswers, function(itemCorrectAnswers) {
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

document.getElementById("btnCheckResult").addEventListener("click", function() {
    
    arrAnswers = getAnswers(checkboxes);
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

function getAnswers(arr) {
	return _.map(arr, function(item) {
		return item.checked;
	});
}
});