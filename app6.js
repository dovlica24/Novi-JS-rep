"use strict";


// for( let i=0; i<10; i++){
//   console.log(i);
// }


let i=0;
// while(i<5) {
//   console.log(i);
//   i++;
// }


do {
 
  console.log(i);
  i++;
} while (i<5);


const objekat = {
ime:"Vlado",
prezime:"Zlatovic",
godine:25,



};


for(let kljuc in objekat) {
  console.log(`${kljuc}:${objekat[kljuc]}`)
}


const niz = [1,23,4,5,6,25,10,22,134];

// for (let broj of niz) {
//  console.log(broj);
// }


// for (let i=0; i<niz.length;i++) {
//   console.log(niz[i]);
// }

const parniBrojevi = niz.filter(function vratiVrednost(broj) {
  return broj < 5;
});


console.log(parniBrojevi);



const uvecaniBrojevi = niz.map((broj)=>{
 return broj *2;
});


console.log(uvecaniBrojevi);



//niz.forEach(num=>console.log(num));


const specijalanBroj = niz.find((broj)=> {

  return broj ===5;
});



console.log(specijalanBroj);