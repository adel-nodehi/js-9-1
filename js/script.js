"use strict";
/*
setTimeout(function () {
  console.log("1 second passed");
  setTimeout(function () {
    console.log("2 second passed");
    setTimeout(function () {
      console.log("3 second passed");
      setTimeout(function () {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// creating Promise

const wait = function (second = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

wait()
  .then(function () {
    console.log("1 second passed");

    return wait(2);
  })
  .then(function () {
    console.log("2 second passed");

    return wait();
  })
  .then(function () {
    console.log("3 second passed");

    return wait();
  })
  .then(function () {
    console.log("4 second passed");
  });
