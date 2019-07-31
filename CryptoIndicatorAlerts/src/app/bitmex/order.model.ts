export class OrderExecution {
  public id: string;
  public symbol: string;
  public side: string;
  public orderQty: string;
  public price: string;
  public stopPx: string;
  public pegOffsetValue: string;
  public pegPriceType: string;
  public ordType: string;
  public ordStatus: string;
  public timeIn: string;

  constructor(id?: string, symbol?: string, side?: string, orderQty?: string,
    price?: string, stopPx?: string, ordType?: string, ordStatus?: string, timeIn?: string) {
    this.id = id;
    this.symbol = symbol;
    this.side = side;
    this.orderQty = orderQty;
    this.price = price;
    this.stopPx = stopPx;
    this.ordType = ordType;
    this.ordStatus = ordStatus;
    this.timeIn = timeIn;
  }
}
