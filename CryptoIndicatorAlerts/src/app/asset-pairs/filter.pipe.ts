import { Pipe, PipeTransform } from '@angular/core';
import { AssetPair } from './asset-pair.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: AssetPair[], searchText: string): any[] {
    if(!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.BaseName.toLowerCase().includes(searchText);
    });
  }

}
