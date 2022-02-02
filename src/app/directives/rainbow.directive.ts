import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { PoneyData } from '../models/poney-data.model';

@Directive({
  selector: '[ambRainbow]',
})
export class RainbowDirective implements OnInit {

  @Input('ambRainbow') backgroundColor: string = ''
  @Input() poneyData?: PoneyData

  timeoutId: any

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor
  }

  @HostListener('dblclick')
  handleDblclick() {
    this.poneyData!.distance! += 10

    const runningImage = this.poneyData!.image!.replace('rainbow', 'running')
    const rainbowImage = this.poneyData!.image!.replace('running', 'rainbow')
    this.poneyData!.image! = rainbowImage

    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(() => {
      this.poneyData!.image! = runningImage
    }, 1000)
  }
}
