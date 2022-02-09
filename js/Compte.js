

export default class Compte{

    constructor(titulaire, montant = 0){

        this.titulaire = titulaire;
        this.solde = montant;
    }

    crediter(montant){
        this.solde += montant;

    }

    debiter(montant){
        this.solde -=  montant
    }

    affichersolde(){

        if(this.solde>0){

            console.log("le compte presente un solde de : "+this.solde +" €" );
        }else{
            console.log("le compte presente un decouvert de : "+(-this.solde) +" €" );

        }
    }
}