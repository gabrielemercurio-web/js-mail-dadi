// Chiedi all'utente la sua email
var mailUtente = prompt ('Scrivi qua la tua Email:');
console.log(mailUtente);

// Creare un array contenente le email "autorizzate"
var autorizzati = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'paperino@gmail.com', 'paperina@gmail.com'];
console.log([autorizzati]);

// Controlla che sia nella lista di chi può accedere
// e stampa un messaggio appropriato (sei in lista/non sei in lista)
// debugger;

var mailTrovata = false;

for (var i = 0; i < autorizzati.length; i++) {
    if (mailUtente == autorizzati[i]) {
        mailTrovata = true;
    }
}
if (mailTrovata == true) {
    alert('Email trovata');
} else {
    autorizzati.push(mailUtente);
    alert('Email non era presente ed stata aggiunta');
}
