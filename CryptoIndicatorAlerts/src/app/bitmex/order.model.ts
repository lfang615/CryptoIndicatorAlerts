export class OrderExecution {
  public id: number;
  public symbol: string;
  public side: string;
  public orderQty: number;
  public price: number;
  public stopPx: number;
  public pegOffsetValue: number;
  public pegPriceType: string;
  public ordType: string;
  public timeIn: string;

  constructor(id: number, symbol: string, side: string, orderQty: number,
    price: number, ordType: string, timeIn: string) {
    this.id = id;
    this.symbol = symbol;
    this.side = side;
    this.orderQty = orderQty;
    this.price = price;
    this.ordType = ordType;
    this.timeIn = timeIn;
  }
}
