(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.datedelta = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = DateDelta;
  function DateDelta() {
    // the default values
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;

    if (arguments.length > 0 && typeof arguments[0] === 'number') {
      this.year = parseInt(arguments[0], 10);
    }

    if (arguments.length > 1 && typeof arguments[1] === 'number') {
      this.month = parseInt(arguments[1], 10);
    }

    if (arguments.length > 2 && typeof arguments[2] === 'number') {
      this.day = parseInt(arguments[2], 10);
    }

    if (arguments.length > 3 && typeof arguments[3] === 'number') {
      this.hour = parseInt(arguments[3], 10);
    }

    if (arguments.length > 4 && typeof arguments[4] === 'number') {
      this.minute = parseInt(arguments[4], 10);
    }

    if (arguments.length > 5 && typeof arguments[5] === 'number') {
      this.second = parseInt(arguments[5], 10);
    }

    if (arguments.length > 6 && typeof arguments[6] === 'number') {
      this.millisecond = parseInt(arguments[6], 10);
    }
  }

  DateDelta.prototype.getYear = function getYear() {
    return this.year;
  };
  DateDelta.prototype.getYears = DateDelta.prototype.getYear;

  DateDelta.prototype.getMonth = function getMonth() {
    return this.month;
  };
  DateDelta.prototype.getMonths = DateDelta.prototype.getMonth;

  DateDelta.prototype.getDay = function getDay() {
    return this.day;
  };
  DateDelta.prototype.getDays = DateDelta.prototype.getDay;

  DateDelta.prototype.getHour = function getHour() {
    return this.hour;
  };
  DateDelta.prototype.getHours = DateDelta.prototype.getHour;

  DateDelta.prototype.getMinute = function getMinute() {
    return this.minute;
  };
  DateDelta.prototype.getMinutes = DateDelta.prototype.getMinute;

  DateDelta.prototype.getSecond = function getSecond() {
    return this.second;
  };
  DateDelta.prototype.getSeconds = DateDelta.prototype.getSecond;

  DateDelta.prototype.getMillisecond = function getMillisecond() {
    return this.millisecond;
  };
  DateDelta.prototype.getMilliseconds = DateDelta.prototype.getMillisecond;
});
