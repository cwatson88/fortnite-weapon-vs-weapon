import * as fn from "./fornite-tracker.json";

const weapons = Object.values(fn).pop();

// const r = weapons.map(item => {
//   const x = item.Name || "";
//   const regex = /(?<=src=\)(.*)(?=\<\/\a\>)/;
//   const found = x.match(regex);
//   item.Name = found[0];
//   return item;
// });

// console.log(r);

// const regex = /(?<=src=")(.*)(?=" alt)/;
// const res = weapons.map(item => {
//   const found = item.Image.match(regex);
//   item.ImageSrc = found[0];
//   return item;
// });
// console.log(res);
