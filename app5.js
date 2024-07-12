"use strict";

const ispitajBroj = (broj) => {
  if(broj>5) {
    console.log(`Broj ${broj} je veci od 5`);
  }

  else if (broj<5) {
    console.log(`Broj ${broj} je manji od 5`);
  }

  

 else  {
  console.log(`Broj ${broj} je jednak broju 5`);
 }

  };
  
  
 ispitajBroj(5);
 ispitajBroj(4);
 ispitajBroj(54);

 let dan = "utorak";

 switch(dan) {

case "ponedeljak":
  console.log(`Hej, danas je ponedeljak, prvi radni dan`);
  break;

  case "utorak":
  console.log(`Hej, danas je utorak, drugi radni dan`);
  break;

  case "sreda":
  console.log(`Hej, danas je sreda, treci radni dan`);
  break;

  case "cetvrtak":
  console.log(`Hej, danas je cetvrtak, cetvrti radni dan`);
  break;



  case "petak":
  console.log(`Hej, danas je petak, peti radni dan`);
  break;



  case "subota":
  console.log(`Hej, danas je subota, prvi dan vikenda`);
  break;



  case "nedelja":
  console.log(`Hej, danas je nedelja, drugi dan vikenda`);
  break;


default:
  console.log(`Hej ludace pa ${dan} nije dan u nedelji!`);
  break;


 }


 // DOMACI: Napraviti funkciju koja vraca poruke da li je broj paran ili nije, pri tome gledaj da bude poruka i ako je nula

 //kako mozemo da ispitamo da li je broj paran ili ne? Radili smo % ostatak. Znaci ako se broj podeli sa broj%2, a ostatak je nula to znaci da je broj paran. U slucaju da ostatak nije nula onda je broj neparan. Imaj u vidu da stavis uslov i nula


 function ispitajParnost (number) {

if (number%2==0) {
  console.log(`Broj ${number} je paran`);
}

else if (number===0) {
 
  console.log(`Broj ${number} je nula`);
}

else {
  console.log(`Broj ${number} je neparan`);
}



 };


 ispitajParnost(2);
 ispitajParnost(34);
 ispitajParnost(39);
 ispitajParnost(0);