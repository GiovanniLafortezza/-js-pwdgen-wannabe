// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favouriteColor = prompt("Inserisci il tuo colore preferito");
let primoNumero = prompt("Inserisci il primo numero");
let secondoNumero =prompt("Inserisci il secondo numero");

let divisioneNumeri = primoNumero / secondoNumero; 
let businessCard=
`
> Informazioni personali:
Nome e Cognome: ${name}${surname}${favouriteColor}${divisioneNumeri}

`;

console.log(businessCard);



