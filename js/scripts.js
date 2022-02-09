import Titulaire from '/js/Titulaire.js';
import Compte from '/js/Compte.js';
import CompteEpargne from '/js/CompteEpargne.js'



// ---------- Test de ma class Titulaire

let titulaire1 = new Titulaire('Vegeta', 'SAN');


console.log(titulaire1);

let titu2 = new Titulaire ('Goku', 'SAN');

console.log(titu2);

titu2.identite();

// -------------- Test Class Compte

let compte1 = new Compte(titu2, 25)

console.log(compte1);

//------ Test fonction Crediter et debiter 

compte1.crediter(50);

compte1.debiter(12);
compte1.debiter(200)
compte1.crediter(150)

// ----------Test de la condition Decouvert ou non

compte1.affichersolde();
console.log(compte1);

// -------------- test du compte epargne

let compteEpargne = new CompteEpargne(titu2, 50);


compteEpargne.crediter(35);
compteEpargne.crediter(35);

compteEpargne.crediter(35);

compteEpargne.crediter(35);
compteEpargne.crediter(10);


console.log(compteEpargne);
compteEpargne.affichersolde()