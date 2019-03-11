export class AssetPair {
  public baseName: string;
  public quoteName: string;

  constructor(baseName: string, quoteName: string) {
    this.baseName = baseName;
    this.quoteName = quoteName;
  }
}
