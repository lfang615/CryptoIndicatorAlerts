export class AssetPair {
  public id: number;
  public baseName: string;
  public quoteName: string;
  public isSelected: boolean;

  constructor(id: number, baseName: string, quoteName: string, isSelected: boolean) {
    this.id = id;
    this.baseName = baseName;
    this.quoteName = quoteName;
    this.isSelected = isSelected;
  }
}
