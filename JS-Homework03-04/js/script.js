//* JS Homework #03-04 */
(function() {
  'use strict';

var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      }
    ]
  },
  // $createAskBlock
    createAskBlock: function() {
        var frag = document.createDocumentFragment();
        var testTitle = this.createNode('div', 'testBox1__title', null, this.data.title);
        var container = this.createNode('div', 'testBox1', null, null);

        frag.appendChild(testTitle);

    // var attrArr1 = [{name: 'type', value: 'checkbox'}, {name: 'id', value: 'test1-answ1'}];
    // var attrArr2 = [{name: 'for', value: 'test1-answ1'}];



       for (var i = 0, length = this.data.questions.length; i < length; i++) {
         var question = this.createNode('div', 'testBox1__question', null, this.data.questions[i].title);
         var fragAnswers = document.createDocumentFragment();
         for (var j = 0, length = this.data.questions[i].answers.length; j < length; j++) {
             var answer = this.createNode('div', 'testBox1__answer', null, null);
             var connector = 'test' + [i+1] + '-answ' + [j+1];
             console.log(connector);
             var attrArrattrCheckbox = [{name: 'type', value: 'checkbox'}, {name: 'id', value: connector}];
             var attrArrLabel = [{name: 'for', value: connector}];
             var elCheckbox = this.createNode('input', null, attrArrattrCheckbox, null);
             var elLabel = this.createNode('label', null, attrArrLabel, this.data.questions[i].answers[j]);
             answer.append(elCheckbox, elLabel)
             fragAnswers.appendChild(answer);
        }
        
        console.log(question);
         frag.appendChild(question);
         frag.appendChild(fragAnswers);
       }

       container.appendChild(frag);

      return container;
    },

  // $createNode
    createNode: function(type, cls, attributes, textNode) {
      var el = document.createElement(type);

      if (cls && (typeof cls === 'string')) {
        el.classList.add(cls);
      }

      if (attributes && (typeof attributes === 'object')) {
        for (var i = 0; i < attributes.length; i++) {
          el.setAttribute(attributes[i].name, attributes[i].value);
        }
      }

      if (textNode && (typeof textNode === 'string')) {
        el.appendChild(document.createTextNode(textNode));
      }

      return el;
    },
    // $init
    init: function() {
      var container = document.querySelector('#root');
        console.log(container);
      container.appendChild(this.createAskBlock());
      console.log(this.createAskBlock());
    }
};

test.init();
})();