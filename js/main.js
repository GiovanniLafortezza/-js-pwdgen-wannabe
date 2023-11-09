// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let age = prompt("Inserisci la tua età");
let profession = prompt("Inserisci la tua prodessione");
let email = prompt("Inserisci la tua email di contatto");

// Converto la variabile age (che era un testo per via del prompt) in un NUMERO
age = parseInt(age);

// Elaborazione delle statistiche
let futureAgeIn25Years = age + 25;
let tenYearsAgoAge = age - 10;
let adultFromYears = age - 18;
let yearsTo65 = 65 - age;

// Compliazione del biglietto
let businessCard = `
-------------- Il tuo bigliettino da visita --------------
> Informazioni personali:
Nome e Cognome: ${name} ${surname}
Età: ${age}

> Informazioni di contatto:
Email: ${email}

>Informazioni di lavoro:
Professione: ${profession}

>Informazioni elaborate:
Tra 25 anni avrai: ${futureAgeIn25Years} anni.
10 anni fa avevi: ${tenYearsAgoAge} anni.
Sei maggiorenne da ${adultFromYears} anni.
Ti mancano ${yearsTo65} anni per essere over 65.
-------------------------------------------------------------
`;

console.log(businessCard);

// Qui posso poi compilare l'eventuale pagina HTML prodisposta.
document.getElementById("user_age").innerHTML = age;


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
