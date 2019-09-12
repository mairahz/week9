import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProddataService {

  constructor(private http:HttpClient) { }

  add(product:Product){
    return this.http.post<any>('http://localhost:3000/api/add', product);
  }

  read(){
    return this.http.get<any>('http://localhost:3000/api/read');
  }

  getItem(productID){
    return this.http.post<any>('http://localhost:3000/api/getItem', {'productid':productID});
  }

  update(product: Product){
    return this.http.post<any>('http://localhost:3000/api/update', product);
  }

  delete(productID){
    return this.http.post<any>('http://localhost:3000/api/delete', {'productid': productID});
  }

  checkvalidid(productID){
    return this.http.post<any>('http://localhost:3000/api/valid', {'id':productID});
  }

  getCount(){
    return this.http.get<any>('http://localhost:3000/api/count');
  }
}
