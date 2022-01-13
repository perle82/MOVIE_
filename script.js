/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */


const Movie = {
        title: "Ocean",
        director: "John",
        budget: 100000000,
      };

      function testNum(budget){
     let result;

  if( budget > 100000000 ){
      result = "true";
  }
  else {
      result = "false";
  }
return result;
      }
  console.log(testNum(100000056));
