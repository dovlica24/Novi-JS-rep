"use strict";

let broj = 0;
let razlika =1917;


function nazivFunkcije(a, b,c) {

console.log(arguments);
let zbir = a+b +c;
console.log(zbir);
  console.log(`Hej, zbir  brojeva ${a} i ${b} i ${c} je ${zbir}`);
  return "ja sam Dovlica";
}


const drugaFunkcija = function(a,b,c) {

 let zbir= a+b +c;
 return zbir;
};

const trecaFunkcija = ()=> {
broj++;
  console.log(`Broj je:${broj}`);
};



const vrednostPrva = nazivFunkcije(6,2,3);

const vrednostZbira = drugaFunkcija(44,22,33);


const vrednostGlavna = vrednostPrva + vrednostZbira

console.log(`Vrednost zbira je: ${vrednostPrva}`);




