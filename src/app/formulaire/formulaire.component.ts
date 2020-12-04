import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {  
    @Input() formulaire: Formulaire;
    @Output() formulaireChange = new EventEmitter();
    
    changeNom(nouvelleValeur) {
      let nouveauFormulaire : Formulaire = {nom: nouvelleValeur, 
                                            prenom : this.formulaire.prenom, 
                                            description:this.formulaire.description
                                          };
      this.formulaire = nouveauFormulaire;
      this.formulaireChange.emit(nouveauFormulaire);
    }

    changePrenom(nouvelleValeur) {
      let nouveauFormulaire : Formulaire = {nom: this.formulaire.nom, 
                                            prenom : nouvelleValeur, 
                                            description:this.formulaire.description
                              };
      this.formulaire = nouveauFormulaire;      
      this.formulaireChange.emit(nouveauFormulaire);
    }

    changeDescription(nouvelleValeur) {
      let nouveauFormulaire : Formulaire = {nom: this.formulaire.nom, 
                                            prenom : this.formulaire.prenom, 
                                            description:nouvelleValeur
                                          };
      this.formulaire = nouveauFormulaire;      
      this.formulaireChange.emit(nouveauFormulaire);
    }

  constructor() { }

  ngOnInit(): void {
  }
}
