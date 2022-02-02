import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RaceData } from 'src/app/models/race-data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  raceDatas: RaceData[] = []
  subscriptions$: Subscription = new Subscription()

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptions$.add(
      this.dataService.getRaces().subscribe(raceDatas => {
        this.raceDatas = raceDatas
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe()
  }

}
