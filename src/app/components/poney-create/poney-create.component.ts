import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'amb-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {
  
  poneyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required, this.isGif]),
  })

  constructor() { }

  ngOnInit(): void {
    // Creer un validateur asynchrone isNameUnique
    // pour le champ name
    // qui va verifier dans la DB si le name n'existe pas déjà
    // en passant par le DataService
  }

  isGif(control: FormControl): ValidationErrors | null {
    return new RegExp(/^.+\.gif$/i).test(control.value) ? null : {
      isNotGif: true
    }
  }

  handleSubmit() {
    console.log(this.poneyForm)
  }

}
