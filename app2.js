"use strict";

let mojeIme;
mojeIme = "Vlado";

console.log(mojeIme);

const mojeIme1 = "Dovlica";



console.log(mojeIme1);

const podaciOKorisniku = {
  ime:"Dovlica",
  prezime:"Zlatovic",
  godine:25,
  ozenjen:false,
  radniOdnos:false,
}

console.log(podaciOKorisniku.radniOdnos);

const BrojManjiOdPet = 3 < 5;

console.log(BrojManjiOdPet);


console.log(podaciOKorisniku.ime,BrojManjiOdPet,podaciOKorisniku.godine,podaciOKorisniku.prezime);

let izjava = `Moje ime je ${podaciOKorisniku.ime}, imam ${podaciOKorisniku.godine} godina i prezivam se ${podaciOKorisniku.prezime}`

console.log (izjava);


let izjavaDva = `broj 6 ${mojeIme1}`;

console.log(izjavaDva);


let niz = [1,2,3,4,5,6];

console.log (niz.length);

niz.push(7,8,9,24,22);



console.log (niz);

let niz2 = niz.reverse();

console.log(niz2);








