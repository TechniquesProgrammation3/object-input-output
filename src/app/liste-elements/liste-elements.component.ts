import { Component, OnInit, Input } from '@angular/core';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-liste-elements',
  templateUrl: './liste-elements.component.html',
  styleUrls: ['./liste-elements.component.css']
})
export class ListeElementsComponent implements OnInit {
  @Input() formulaire: Formulaire;

  constructor() { }

  ngOnInit(): void {
  }

}
