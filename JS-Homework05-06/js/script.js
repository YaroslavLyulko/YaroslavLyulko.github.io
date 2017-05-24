//* JS Homework #05-06 */
(function() {
  'use strict';

var Clock = {
  isStarted: false,
  isPaused: false,
  currDate: Date(),
  oldDate: Date(),
  accDate: 0,

  start: function () {
    var self = this;

    if (!this.isStarted){
      this.isStarted = true;
      this.oldDate = new Date();
    }

    this.interval = setInterval(function () {
      self.currDate = new Date();
      self.accDate += self.currDate - self.oldDate;
      self.oldDate = self.currDate;

      var internalAccDate = new Date();
      internalAccDate.setTime(self.accDate);
      
      var hours = internalAccDate.getUTCHours();
      var minutes = internalAccDate.getUTCMinutes();
      var seconds = internalAccDate.getUTCSeconds();
      var milliseconds = internalAccDate.getUTCMilliseconds();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
      if ((milliseconds >= 10) & (milliseconds < 100)) milliseconds = "0" + milliseconds;
      if (milliseconds < 10) milliseconds = "00" + milliseconds;
      document.getElementById("currentTime").innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }, 10);
  },

  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
    this.isStarted = false;
    this.isPaused = true;
  },

  resume: function () {
    if (!this.interval) this.start();
  },

  clear: function () {
    if (this.isStarted || this.isPaused) {
      var tagBtnStart = document.getElementById('btnStart');
      tagBtnStart.setAttribute('value', 'Start');
      document.getElementById("currentTime").innerHTML = "00:00:00.000";
      clearInterval(this.interval);
      delete this.interval;
      this.isStarted = false;
      this.isPaused = false;
      this.accDate = 0;
    }
  }
};

function startClock(){
  if (!Clock.isStarted) {
    Clock.start();
    var tagBtnStart = document.getElementById('btnStart');
    tagBtnStart.setAttribute('value', 'Pause');
  } 
  else if (Clock.isStarted) {
    Clock.pause();
    var tagBtnStart = document.getElementById('btnStart');
    tagBtnStart.setAttribute('value', 'Resume');
  }
  else if (Clock.isPaused) {
    Clock.resume();
    var tagBtnStart = document.getElementById('btnStart');
    tagBtnStart.setAttribute('value', 'Pause');
  }
}

function pauseClock(){
  Clock.pause();
}

function resumeClock(){
  Clock.resume();
}

function clearClock(){
  Clock.clear();
}

var tagBtnStart = document.getElementById('btnStart');
tagBtnStart.addEventListener('click', startClock);
var tagBtnClear = document.getElementById('btnClear');
tagBtnClear.addEventListener('click', clearClock);

})();