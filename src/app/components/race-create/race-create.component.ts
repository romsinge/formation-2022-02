import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PoneyData } from 'src/app/models/poney-data.model';
import { RaceData } from 'src/app/models/race-data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  poneyDatas$?: Observable<PoneyData[]>
  raceData: RaceData = {
    name: '',
    poneyIds: []
  }

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.poneyDatas$ = this.dataService.getPoneys()
  }

  handleSubmit() {
    this.http.post('http://localhost:3000/races', this.raceData).subscribe()
  }

}
