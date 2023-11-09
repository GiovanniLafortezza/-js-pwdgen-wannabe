// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favouriteColor = prompt("Inserisci il tuo colore preferito");
let randomNumber = Math.floor(Math.random() * 10);

//let primoNumero = prompt("Inserisci il primo numero");
//let secondoNumero =prompt("Inserisci il secondo numero");
//let divisioneNumeri = primoNumero / secondoNumero; 
//divisioneNumeri = Math.trunc(divisioneNumeri);

let password =
`
 ${name}${surname}${favouriteColor}${randomNumber}

`;

console.log(password);

document.getElementById("user_psw").innerHTML = password;



