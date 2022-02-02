import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {
  
  poneyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required], [this.isNameUnique.bind(this)]),
    image: new FormControl('', [Validators.required, this.isGif]),
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  isGif(control: FormControl): ValidationErrors | null {
    return new RegExp(/^.+\.gif$/i).test(control.value) ? null : {
      isNotGif: true
    }
  }

  isNameUnique(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.dataService.isNameUnique(control.value)
      .pipe(map(isUnique => isUnique ? null : {
        isNotUnique: true
      }))
  }

  handleSubmit() {
    console.log(this.poneyForm)
  }

}
