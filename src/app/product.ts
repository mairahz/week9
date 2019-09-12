export class Product {
  _id: number;
  name: string;
  desc: string;
  price: number;
  units: number;
  constructor(id, name, desc, price, units) {
    this._id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.units = units;
  }
}
