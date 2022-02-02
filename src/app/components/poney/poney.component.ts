import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PoneyData } from 'src/app/models/poney-data.model';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {
  
  @Input() poneyData?: PoneyData
  @Output() win: EventEmitter<PoneyData> = new EventEmitter()

  intervalId: any

  constructor() { }

  ngOnInit(): void {
    this.startRunning()
  }

  ngOnDestroy(): void {
    this.stopRunning()
    this.poneyData!.distance! = 0
  }

  startRunning() {
    this.intervalId = setInterval(() => {
      this.poneyData!.distance! += Math.ceil(Math.random() * 10)
      
      if (this.poneyData?.distance! >= 90) {
        this.poneyData!.distance! = 90
        this.stopRunning()
        this.win.emit(this.poneyData)
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

}
