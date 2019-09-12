import { Component, OnInit } from '@angular/core';
import { ProddataService } from '../services/proddata.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  constructor(private proddata: ProddataService, private router: Router) { }

  ngOnInit() {
    this.proddata.read().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProd(id){
    if (confirm("Are you sure you want to delete this item?")){
      this.proddata.delete(id).subscribe((data) => {
        this.products = data;
      });
    }
  }

  updateProd(product: Product){
    localStorage.removeItem('product');
    localStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['edit']);
  }

}
