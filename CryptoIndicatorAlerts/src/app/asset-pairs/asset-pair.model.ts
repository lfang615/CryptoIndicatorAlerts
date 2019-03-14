export class AssetPair {
  public baseName: string;
  public quoteName: string;
  public isSelected: boolean;

  constructor(baseName: string, quoteName: string) {
    this.baseName = baseName;
    this.quoteName = quoteName;
    this.isSelected = false;
  }
}
