import { Pipe, PipeTransform } from '@angular/core';
import { AssetPair } from './asset-pair.model';
@Pipe({
  name: 'selectedFilter'
})
export class SelectedFilterPipe implements PipeTransform {
  transform(items: AssetPair[]): any[] {
    return items.filter(x => x.IsSelected);
  }
}
