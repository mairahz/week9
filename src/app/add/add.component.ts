import { Component, OnInit } from '@angular/core';
import { ProddataService } from '../services/proddata.service';
import { Product } from '../product';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  animations:[
    trigger('iderrorState', [
      state('show', style({
        opacity:1,
        display:'block'
      })),
      state('hide', style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ]),
    trigger('noticeState', [
      state('show', style({
        opacity:1,
        display:'block'
      })),
      state('hide', style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ])
  ]
})
export class AddComponent implements OnInit {
  name:string = "";
  desc:string = "";
  price:number = null;
  units:number = null;
  id:number = null;
  newProd:Product;
  newProdMsg = "";
  iderrormsg:string = "This id already exists. A different ID is required.";
  ideerrormsg2:string = "";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;

  constructor(private proddata:ProddataService) { }

  ngOnInit() {
  }

  get stateName(){
    return this.iderrorshow ? 'show':'hide';
  }

  get noticeName(){
    return this.noticeshow ? 'show':'hide';
  }

  addnewProduct(event){
    event.preventDefault();
    if(this.id == null){
      this.iderrorshow = !this.iderrorshow;
    } else {
      this.newProd = new Product(this.id, this.name, this.desc, this.price, this.units);
      this.proddata.add(this.newProd).subscribe((data)=>{
        console.log(data);
        this.noticeshow = true;
        if(data.err == null){
          // this.newProdMsg = data.num + " new product (" + this.name + ") was added";
          alert(data.num + " new product (" + this.name + ") was added")
        } else {
          this.newProdMsg = data.err;
        }
        this.id = null;
        this.name = "";
        this.desc = "";
        this.price = null;
        this.units = null;
      });

    }
  }

  checkvalidid(event){
    this.noticeshow = false;
    this.proddata.checkvalidid(event).subscribe((data)=>{
      if(data.success == 0){
        // this.ideerrormsg2 = " Something above " + data.topnum;
        this.iderrorshow = !this.iderrorshow;
        alert(" Something above " + data.topnum)
      } else {
        this.iderrorshow = false;
        this.ideerrormsg2 = null;
      }
    })
  }

}
