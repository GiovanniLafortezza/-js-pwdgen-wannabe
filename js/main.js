// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favouriteColor = prompt("Inserisci il tuo colore preferito");



let businessCard=
`
> Informazioni personali:
Nome e Cognome: ${name} ${surname} ${favouriteColor} 21
`;

console.log(businessCard);

// Qui posso poi compilare l'eventuale pagina HTML prodisposta.


/* OUTPUT PREVISTO DAL MIO SCRIPT
-------------- Il tuo bigliettino da visita --------------
> Informazioni personali:
Nome e Cognome: Pinco Pallino
Eta': 20

> Informazioni di contatto:
Email: pincopallino@gmail.com

> Informazioni sul lavoro:
Professione: Studente
-------------------------------------------------------------
*/

/* Variante funzionante ma meno elegante
console.log("-------------- Il tuo bigliettino da visita --------------");
console.log("> Informazioni personali:");
console.log("Nome e Cognome: " + name + " " + surname);
console.log("Eta': " + age);
console.log("");
console.log("> Informazioni di contatto:");
console.log("Email: " + email);
console.log("");
console.log(">Informazioni di lavoro:");
console.log("Professione: " + profession);
console.log("-------------------------------------------------------------");
*/
