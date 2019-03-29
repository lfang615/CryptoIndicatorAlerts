export class AssetPair {
  public Id: number;
  public BaseName: string;
  public QuoteName: string;
  public IsSelected: boolean;

  constructor(id: number, baseName: string, quoteName: string, isSelected: boolean) {
    this.Id = id;
    this.BaseName = baseName;
    this.QuoteName = quoteName;
    this.IsSelected = isSelected;
  }
}
