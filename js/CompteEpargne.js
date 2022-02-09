import Compte from "/js/Compte.js";


export default class CompteEpargne extends Compte{

    constructor(titulaire, montant = 0, taux = 0.005, rythme = 5000 ){
         //super permet daller chercher le constructeur du parent (compte) et on lui met les paamettre deja passer sur notre constructeur
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;

        //interet de taux  toutes les "rythme" milliseconde(0.5%)toutes les secondes
        setInterval(()=>{
            this.solde *= 1+this.taux;  
            // console.log(this.solde);        
        }, this.rythme)
    }

}