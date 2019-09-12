import { Component, OnInit } from '@angular/core';
import { ProddataService } from '../services/proddata.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  prodOrigin = JSON.parse(localStorage.getItem('product'));
  product = JSON.parse(localStorage.getItem('product'));
  name:string = "";
  desc:string = "";
  price:number = null;
  units:number = null;
  id:number = null;

  constructor(private router:Router, private proddata:ProddataService) { }

  ngOnInit() {
    this.name = this.prodOrigin.name
    this.desc = this.prodOrigin.desc
    this.price = this.prodOrigin.price
    this.units = this.prodOrigin.units
    this.id = this.prodOrigin.id

  }

  edit(event){
    event.preventDefault();
    this.product.name = this.name;
    this.product.desc = this.desc;
    this.product.price = this.price;
    this.product.units = this.units;
    console.log(this.product)
    this.proddata.update(this.product).subscribe(data => {
      console.log(data)
      if (data.ok != null) {
        this.router.navigate(['list']);
      }
    })
  }

}
