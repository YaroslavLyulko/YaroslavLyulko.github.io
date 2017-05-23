//* JS Homework #05-06 */
(function() {
  'use strict';

var Clock = {
  startHours: 0,
  startMinutes: 0,
  startSeconds: 0,
  startMilliseconds: 0,
  currDate: Date(),
  oldDate: Date(),
  subDate: Date(),
  accDate: 0,

  start: function () {
    var self = this;

    var date = new Date();
    if ((this.startHours === 0) & (this.startMinutes === 0) & (this.startSeconds === 0) & (this.startMilliseconds === 0)){
      this.startHours = date.getHours();
      this.startMinutes = date.getMinutes();
      this.startSeconds = date.getSeconds();
      this.startMilliseconds = date.getMilliseconds();
      document.getElementById("startTime").innerHTML = this.startHours + ":" + this.startMinutes + ":" + this.startSeconds + "." + this.startMilliseconds;
      this.oldDate = date;
    }

    this.interval = setInterval(function () {
      self.currDate = new Date();
      self.subDate = self.currDate - self.oldDate;
      self.accDate += self.subDate;
      console.log('accDate = ' + self.accDate);
      self.oldDate = self.currDate;

      var internalAccDate = new Date();
      internalAccDate.setTime(self.accDate);
      console.log('Прошло = ' + internalAccDate);
      
      var hours = internalAccDate.getUTCHours();
      var minutes = internalAccDate.getUTCMinutes();
      var seconds = internalAccDate.getUTCSeconds();
      var milliseconds = internalAccDate.getUTCMilliseconds();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
      document.getElementById("currentTime").innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }, 100);
  },

  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
    this.startHours = 0;
    this.startMinutes = 0;
    this.startSeconds = 0;
    this.startMilliseconds = 0;
  },

  resume: function () {
    if (!this.interval) this.start();
  }
};

// Clock.start();

// $('#pauseButton').click(function () { Clock.pause(); });
// $('#resumeButton').click(function () { Clock.resume(); });

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
var tagBtnReset = document.getElementById('btnPause');
tagBtnReset.addEventListener('click', pauseClock);
var tagBtnReset = document.getElementById('btnResume');
tagBtnReset.addEventListener('click', resumeClock);

})();