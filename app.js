"use strict";


// console.log("Cao ja sam Vlado");



// window.console.log ("hehe");

// var mojeIme = "Vlado";
// let mojeIme2 = "Vlado";
// const mojeIme3 ="Vlado"; // komentar

// const mojeIme4 = "hehe";
// let mojeIme5;


// mojeIme5
// console.log(mojeIme5)

// mojeIme5 ="454";

// mojeIme5

// console.log (mojeIme5);

// mojeIme5 ="dadada"

// mojeIme5 = "45677";
// console.log (mojeIme5);

// mojeIme5 = 1923;
// console.log (mojeIme5);

// const broj=3123;

// mojeIme5 = null;
// console.log (mojeIme5);




// let brojVeciOdTri = 5 < 3;

// console.log ("Da li je?",brojVeciOdTri);

// const podaci = {
//   ime: "Vlado",
//   godine: 25,
//   ozenjen: false,
//   pol: "Musko",
//   pije: false,
//   pusi: false,

// };

// console.log ("Moje ime je:" ,podaci.ime);
// console.log("Imam:", podaci.godine, "godina");

// let izjava = "Moje ime je " + podaci.ime + " imam " + podaci.godine + " godina.";

// console.log (izjava);


// let zbir = "25" + 25;
// console.log (zbir);

// let izjava2 = `Moje ime je ${podaci.ime} imam ${podaci.godine} godina.`;
// console.log (izjava2);

// let niz = [4, 5 , 6, 7,8,9,10];

// niz.push(24,25,26);

// niz.reverse();

// let niz2 = ["cao" , "zdravo" , "zbogom"];

// console.log (niz);

// console.log (niz2);

// let noviNiz = niz.pop();
// console.log (niz);
// console.log (noviNiz);

// const Inzenjer = {

// ime:"Vlado",
// radniStaz:"5 godina",
// godine:4,



// }

// console.log(Inzenjer);

const osoba1 = {
  ime:"Vlado",
  prezime: "Zlatovic",
  godine:25,
  mesto:"Beograd",
  posao1: "programer",
  posao: {
    kuvar:"2006-2015",
    programer:"     2016-",
  },
  "srecni Brojevi":[50,1, 9,49,3, 17, 21, 46, 47],
}

const dodatnaVrednost = {
  posao3: "gejmer",
}


console.log(`Moje ime je ${osoba1["ime"]}, prezivam se ${osoba1.prezime }, zivim u ${osoba1.mesto}u i radim kao ${osoba1.posao1} od ${osoba1.posao.programer.trim().replace("-",".")} godine`);


console.log(`Moji srecni brojevi su: ${osoba1["srecni Brojevi"].join(" ")}`);

console.log(Object.assign(osoba1, {posao2: "inzenjer"}));

console.log(Object.assign(osoba1,dodatnaVrednost));

console.log(osoba1.posao.hasOwnProperty("kuvar"));





