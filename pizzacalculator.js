//Roelof Koops Opdracht:Pizza calculator


document.write ('Aantal grote pizzas: ') //zet neer hoeveel grote pizza's de klant wil
var grote =(prompt ('Hoeveel grote pizzas wilt u bestellen? De grote pizza heeft een diameter van 35 centimeter en kost €4,- per stuk')); //vraagt aan de klant hoeveel grote pizza's de klant wil
document.write (grote) //zet het aantal grote pizzas neer dat de klant bestelt heeft
document.write ( "<br/>"); //maakt een enter
document.write ('Aantal gemiddelde pizzas: '); //zet neer hoeveel gemiddelde pizza's de klant wil
var gemiddelde =(prompt ('Hoeveel gemiddelde pizzas wilt u bestellen? de gemiddelde pizza heeft een diameter van 25 centimeter en kost €3,- per stuk')); //vraagt aan de klant hoeveel grote pizza's de klant wil
document.write (gemiddelde) //zet het aantal gemiddelde pizza's neer dat de klant heeft ingevoert
document.write ( "<br/>"); //maakt een enter
document.write ('Aantal kleine pizzas: '); //zet neer hoeveel kleine pizza's de klant wil
var kleine =(prompt('Hoeveel kleine pizzas wilt u bestellen? de kleine pizza heeft een diameter van 15 centimeter en kost €2,- per stuk')); //vraagt aan de klant hoeveel grote pizza's de klant wil
document.write (kleine) //zet het aantal kleine pizzas neer dat de klant bestelt heeft
document.write ( "<br/>"); //maakt een enter
document.write ( "<br/>"); //maakt een enter
document.write ( "<br/>"); //maakt een enter
document.write ( "<br/>"); //maakt een enter
document.write('grote pizzas: €') //
document.write (grote * 4) //berekent en plaatst de prijs van de grote pizzas
document.write ( "<br/>"); //maakt een enter
document.write('gemiddelde pizzas: €')
document.write (gemiddelde * 3) //berekent en plaatst de prijs van de gemiddelde pizzas
document.write ( "<br/>"); //maakt een enter
document.write('kleine pizzas: €')
document.write (kleine * 2)  //berekent en plaatst de prijs van de kleine pizzas
document.write ( "<br/>"); //maakt een enter
document.write ( "<br/>"); //maakt een enter
document.write ('totaal prijs: €'); //zet de tekst
document.write (grote * 4 + gemiddelde * 3 + kleine * 2); //berekent en plaatst de totaale prijs
