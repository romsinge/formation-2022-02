import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { PoneyData } from '../models/poney-data.model';
import { RaceData } from '../models/race-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getRaces(): Observable<RaceData[]> {
    return this.http.get<RaceData[]>('http://localhost:3000/races')
  }

  getPoneys(): Observable<PoneyData[]> {
    return this.http.get<PoneyData[]>('http://localhost:3000/poneys')
  }

  getRaceById(id: string): Observable<RaceData | undefined> {
    return this.getRaces().pipe(map(raceDatas => raceDatas.find(raceData => raceData.id === id)))
  }

  isNameUnique(name: string): Observable<boolean> {
    return this.getPoneys().pipe(
      map(poneyDatas => {
        return !poneyDatas.some(poneyData => {
          return poneyData.name === name
        })
      })
    )
  }
}
