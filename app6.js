const counters = document.querySelectorAll(".counter");
const number = document.querySelector(".number");

// --------------------------------

// const speed = 10;

// window.onscroll = function () {
//   scrollCounterDisplay();
// };

// const scrollCounterDisplay = () => {
//   if (document.documentElement.scrollTop > 1850) {
//     counters.forEach((counter) => {
//       const updateCount = () => {
//         const target = +counter.getAttribute("data-target");
//         const count = +counter.innerText;

//         let inc = target / speed;

//         if (count < target) {
//           number.innerText = (count + inc - 0.1).toFixed(1);
//           setTimeout(updateCount, 1000);
//         } else {
//           count.innerText = target;
//         }
//       };

//       updateCount();
//     });
//   }
// };

// console.log(myFunction);

// ----
// counters.forEach((counter) => {
//   const updateCount = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;

//     let inc = target / speed;

//     if (count < target) {
//       number.innerText = (count + inc - 0.1).toFixed(1);
//       setTimeout(updateCount, 1000);
//     } else {
//       count.innerText = target;
//     }
//   };

//   updateCount();
// });

// -----
// console.log(ev);

// window.onscroll = function (ev) {
//   if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
//     // you're at the bottom of the page

//     counters.forEach((counter) => {
//       const updateCount = () => {
//         const target = +counter.getAttribute("data-target");
//         const count = +counter.innerText;

//         let inc = target / speed;
//         // let inc1 = inc;

//         if (count < target) {
//           number.innerText = count + inc;
//           setTimeout(updateCount, 1200);
//         } else {
//           count.innerText = target;
//         }
//       };

//       updateCount();
//     });

//     console.log("Bottom of page");
//   }
//   console.log(123);
// };
