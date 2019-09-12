export class Product {
  id: number;
  // productID: number;
  name: string;
  desc: string;
  price: number;
  units: number;
  constructor( productID, name, desc, price, units) {
    this.id = productID;
    // this.productID = productID;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.units = units;
  }
}
