// let user = {
//   name: "John",
//   age: 23,
//   id: 1,
// };

// let a = 3;
// let b = 5;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// console.log(Number.MAX_SOF_INTEGER);

// let son = 12.3456;
// let toFixedSon = son.toFixed(2);

// console.log(toFixedSon); // 12.35

// let yosh = 18;
// let ravon = yosh < 18 ? "Kichkina" : "Katta";

// for (let i = 1; i <= 3; i++) {
//   console.log("Tashqi sikl: " + i);

//   for (let j = 1; j <= 3; j++) {
//     console.log("  Ichki sikl: " + j);
//   }
// }

// let son = 15;
// let tartib = 1;

// while (tartib <= son) {
//   console.log(tartib);
//   tartib++;
// }

// let son = 1;

// do {
//   console.log("Salom, dunyo! " + son);
//   son++;
// } while (son <= 5);

// let oy = 7; // Misol uchun, 7-noyabr

// switch (oy) {
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor fasli");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz fasli");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz fasli");
//     break;
//   case 12:
//   case 1:
//   case 2:
//     console.log("Qish fasli");
//     break;
//   default:
//     console.log("Noto'g'ri oy raqami");
//     break;
// }
// let salomIsm = (ism) => {
//   console.log("Salom, " + ism + "!");
// };

// salomIsm("Umedjon");

// let jsonMatn = '{"ism":"John","yosh":30,"kasalxona":false}';
// let shaxs = JSON.parse(jsonMatn);
// console.log(shaxs);

// let massiv1 = [1, 2, 3];
// let massiv2 = [4, 5, 6];

// let yangiMassiv = massiv1.concat(massiv2);

// console.log(yangiMassiv);

// let massiv = [1, 2, 3, 4, 5];

// massiv.forEach((element) => {
//   console.log(element);
// });

let massiv = [1, 2, 3, 4, 5];

for (let element of massiv) {
  console.log(element);
}
