"use strict";

const btnGetAdvice = document.querySelector(".get-data");

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

const createCard = function ({ slip: adviceData }) {
  const div = document.createElement("div");

  const id = document.createElement("p");
  id.textContent = adviceData.id;

  const advice = document.createElement("p");
  advice.textContent = adviceData.advice;

  div.append(id, advice);

  document.querySelector(".container").append(div);
};

const showError = function (errorMessage) {
  const p = document.createElement("p");
  p.textContent = `💣💣 Something went wrong: ${errorMessage}`;

  document.body.prepend(p);
};

const wait = function (second = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, second * 1000);
  });
};

/*
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
*/

// fetch("https://api.adviceslip.com/advice")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// https://api.adviceslip.com/advice/{slip_id}

/*
const getAdvice = async function (adviceId) {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/${adviceId}`
    );

    const data = await response.json();

    if (data.message?.type === "error") {
      throw new Error(`invalid id: ${adviceId}`);
    }

    return data;
  } catch (err) {
    // console.error(`💣💣💣 Something goes wrong: ${err.message}`);
    showError(err.message);
  }
};

// getAdvice(15).then((advice) => console.log(advice));

(async function () {
  const advice = await getAdvice(15);
  console.log(advice);
})();
*/

const getAdvice = async function (adviceId) {
  try {
    const response = await fetch(
      `	https://api.adviceslip.com/advice/${adviceId}`
    );

    const data = await response.json();

    if (data.message?.type === "error") {
      throw new Error(`invalid id: ${adviceId}`);
    }

    return data;
  } catch (err) {
    showError(err.message);
  }
};

/* 
Promise.all => 'fulfilled' => all promises fulfilled
Promise.race => fulfilled when first Promise settled
Promise.allSettled => fulfilled when all Promise settled
Promise.any => fulfilled when first promise fulfilled
*/
(async function () {
  //   const response = await Promise.allSettled([
  //     fetch("https://api.quotable.io/quotes/D_S3tmLBb8"),
  //     wait(2),
  //   ]);

  //   const response = await Promise.all([
  //     fetch("https://api.quotable.io/quotes/D_S3tmLBb8"),
  //     wait(2),
  //   ]);

  const response = await Promise.any([
    fetch("https://api.quotable.io/quotes/D_S3tmLBb8"),
    wait(0),
  ]);

  console.log(response);
  if (!response) console.log("request took too long");
})();
