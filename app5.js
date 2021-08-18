// const iconList = [
//   {
//     title: " Stamping",
//     img: "./icons/stamping.svg",
//   },
//   {
//     title: " Injection molding",
//     img: "./icons/Injection-molding.svg",
//   },
//   {
//     title: " Coil Winding",
//     img: "/icons/Xoil-Winding.svg",
//   },
//   {
//     title: " Magnetizing",
//     img: "/icons/Magnetism-icon.svg",
//   },
//   {
//     title: " Assembly",
//     img: "/icons/assebmbly.svg",
//   },
//   {
//     title: " Metalization",
//     img: "/icons/metalization.svg",
//   },
// ];

const icons1 = document.querySelectorAll("#icon1");
const icons2 = document.querySelectorAll("#icon2");
const icons3 = document.querySelectorAll("#icon3");
const icons4 = document.querySelectorAll("#icon4");
const icons5 = document.querySelectorAll("#icon5");
const icons6 = document.querySelectorAll("#icon6");
const reads1 = document.querySelectorAll("#read1");
const reads2 = document.querySelectorAll("#read2");
const reads3 = document.querySelectorAll("#read3");
const reads4 = document.querySelectorAll("#read4");
const reads5 = document.querySelectorAll("#read5");
const reads6 = document.querySelectorAll("#read6");

icon1.addEventListener("mouseover", () => {
  read1.classList.toggle("hide");
});
icon1.addEventListener("mouseout", () => {
  read1.classList.add("hide");
});
icon2.addEventListener("mouseover", () => {
  read2.classList.toggle("hide");
});
icon2.addEventListener("mouseout", () => {
  read2.classList.add("hide");
});
icon3.addEventListener("mouseover", () => {
  read3.classList.toggle("hide");
});
icon3.addEventListener("mouseout", () => {
  read3.classList.add("hide");
});
icon4.addEventListener("mouseover", () => {
  read4.classList.toggle("hide");
});
icon4.addEventListener("mouseout", () => {
  read4.classList.add("hide");
});
icon5.addEventListener("mouseover", () => {
  read5.classList.toggle("hide");
});
icon5.addEventListener("mouseout", () => {
  read5.classList.add("hide");
});
icon6.addEventListener("mouseover", () => {
  read6.classList.toggle("hide");
});
icon6.addEventListener("mouseout", () => {
  read6.classList.add("hide");
});
