"use strict";

// DOMACI: Napraviti funkciju koja vraca poruke da li je broj paran ili nije, pri tome gledaj da bude poruka i ako je nula

 //kako mozemo da ispitamo da li je broj paran ili ne? Radili smo % ostatak. Znaci ako se broj podeli sa broj%2, a ostatak je nula to znaci da je broj paran. U slucaju da ostatak nije nula onda je broj neparan. Imaj u vidu da stavis uslov i nula


 function funkcijaParNepar (broj) {

if (broj ===0) {
  console.log(`Broj ${broj} je nula.`);
}

else if (broj %2 ===0) {
  console.log(`Broj ${broj} je paran.`);
}

else {
  console.log(`Broj ${broj} je neparan.`);
}






 };

 funkcijaParNepar(0);




 //napraviti funkciju koja ce da prima 2 argumenta, prvi ce biti da li je korisnik polozio tipovanje (znaci bice boolean vrednost), a druga vrednost ce biti broj godina. Funkcija ce da ispituje da li je korisnik adekvatan za polaganje voznje. Ako je korisnik polozio tipovanje i ima vise od ili jednako 18 godina onda mozemo da posaljemo poruku (console.log-ujemo) "Korisnik moze da polaze ispit." Ako korisnik nije polozio tipovanje ili nema dovoljno godina mozemo da napisemo poruku "Korisnik nije ispunio uslove za polaganje"



 function polaganjeVoznje (tipovanje, godine) {
if (tipovanje && godine >=18) {
  console.log(`Korisnik ima pravo na polaganje voznje`);
}
 

 else {
console.log (`Korisnik NEMA pravo na polaganje voznje`);

if (!tipovanje && godine <18) {
  console.log(`Korisnik NEMA nijedan uslov za polaganje ispita!`);
}

else if (godine <18) {

  console.log(`Korisnik nema dovoljan broj godina: (${godine})`);
}

else {
  console.log(`Korisnik nije polozio tipovanje`);
}

} 

}



 polaganjeVoznje(false,12);








 