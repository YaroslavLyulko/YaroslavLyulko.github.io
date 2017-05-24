//* JS Homework #05-06 */
(function() {
  'use strict';

var Clock = {
  clockStarted: false,
  currDate: Date(),
  oldDate: Date(),
  accDate: 0,

  start: function () {
    var self = this;

    if (!this.clockStarted){
      this.clockStarted = true;
      this.oldDate = new Date(); //почему не работает, когда просто this.oldDate = Date();
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
    this.clockStarted = false;
  },

  resume: function () {
    if (!this.interval) this.start();
  }
};

function startClock(){
  Clock.start();
}

function pauseClock(){
  Clock.pause();
}

function resumeClock(){
  Clock.resume();
}

var tagBtnStart = document.getElementById('btnStart');
tagBtnStart.addEventListener('click', startClock);
var tagBtnPause = document.getElementById('btnPause');
tagBtnPause.addEventListener('click', pauseClock);
var tagBtnResume = document.getElementById('btnResume');
tagBtnResume.addEventListener('click', resumeClock);

})();