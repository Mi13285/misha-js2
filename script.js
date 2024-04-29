// Function.prototype.defer = function (mc) {
//   setTimeout(this, mc);
// };
// function f() {
//   console.log("Hello");
// }
// f.defer(1000);

// Function.prototype.defer = function (mc) {
//   let a = this;
//   return function (...args) {
//     setTimeout(() => f.apply(a, args), mc);
//   };
// };
// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2);

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Objectkeys(this).join();
//     },
//   },
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//   console.log(key);
// }

// console.log(dictionary);

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 100 } = options;
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.precision(), 1000);
  }
// }
// // class Rabbit extends Object {
// //   constructor(name) {
// //     super(name);
// //     this.name = name;
// //   }
// // }

// // let rabbit = new Rabbit("Кроль");

// // console.log(rabbit.hasOwnProperty("name"));
