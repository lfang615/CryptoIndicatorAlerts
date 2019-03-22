import { Pipe, PipeTransform } from '@angular/core';
import { AssetPair } from './asset-pair.model';
@Pipe({
  name: 'selectedFilter'
})
export class SelectedFilterPipe implements PipeTransform {
  transform(items: AssetPair[]): any[] {
    //if (!items) return [];
    //if (!searchText) return items;
    //searchText = searchText.toLowerCase();
    //return items.filter(it => {
    //  return it.baseName.toLowerCase().includes(searchText);
    //});
    return items.filter(x => x.isSelected);
  }
}
