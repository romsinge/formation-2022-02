import { Pipe, PipeTransform } from '@angular/core';
import { PoneyData } from '../models/poney-data.model';

@Pipe({
  name: 'isRacing'
})
export class IsRacingPipe implements PipeTransform {

  transform(poneyDatas: PoneyData[] | null = [], poneyIds: string[] = []): PoneyData[] {
    return poneyDatas?.filter(poneyData => poneyIds.includes(poneyData.id!)) || []
  }

}
