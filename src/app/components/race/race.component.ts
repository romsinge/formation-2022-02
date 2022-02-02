import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable, of, switchMap } from 'rxjs';
import { PoneyData } from 'src/app/models/poney-data.model';
import { RaceData } from 'src/app/models/race-data.model';
import { DataService } from 'src/app/services/data.service';
import { PoneyComponent } from '../poney/poney.component';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  @ViewChildren('poneyChildren') poneyChildren?: QueryList<PoneyComponent>
  
  raceData$?: Observable<RaceData | undefined>
  poneyDatas$: Observable<PoneyData[]> = of([])

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.raceData$ = this.route.params.pipe(
      switchMap(({id}) => {
        return this.dataService.getRaceById(id)
      })
    )

    this.poneyDatas$ = this.dataService.getPoneys()
  }

  handleWin(poneyData: PoneyData) {
    console.log('WINNER : ', poneyData.name)

    // STOP ALL PONIES
    this.poneyChildren?.forEach(poneyChild => poneyChild.stopRunning())
  }
}
