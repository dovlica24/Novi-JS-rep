"use strict";

let prviBroj=5;
let drugiBroj=4;
prviBroj +=3;
drugiBroj -=4;



let zbir = prviBroj + drugiBroj;
let razlika = prviBroj - drugiBroj;
let  proizvod =prviBroj * drugiBroj;
let kolicnik =prviBroj / drugiBroj;

console.log(`Zbir broja ${prviBroj} i ${drugiBroj} je: ${zbir}`); 
console.log(`Razlika broja ${prviBroj} i ${drugiBroj} je: ${razlika}`);
console.log(`Proizvod broja ${prviBroj} i ${drugiBroj} je: ${proizvod.toFixed(2)}`);
console.log(`Kolicnik broja ${prviBroj} i ${drugiBroj} je: ${kolicnik}`);



// console.log("Ostatak je",7%1);


const daLiJeIstina = true;

const daLiJeLaz = false;




console.log(daLiJeIstina || daLiJeLaz); 

 


