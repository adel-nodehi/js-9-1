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

new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve();
  }, 1000);
})
  .then(function () {
    console.log("1 second passed");

    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  })
  .then(function () {
    console.log("2 second passed");
  });
