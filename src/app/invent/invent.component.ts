import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from 'src/app/shared/shopkeeper.service';
import {NgForm} from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {Shopkeeper} from 'src/app/shared/shopkeeper.model';

@Component({
  selector: 'app-invent',
  templateUrl: './invent.component.html',
  styleUrls: ['./invent.component.css']
})
export class InventComponent implements OnInit {

  constructor(private objservice:ShopkeeperService) { }

  ngOnInit() {
    this.resetForm();  
  }

  resetForm(form?:NgForm)
{
  if(form!=null)
 { form.form.reset();}
 else{
this.objservice.formData={ProductId:0,ProductName:'',ProductPrice:'',Quantity:'',Date:''}
}
}

onSubmit(form:NgForm)
{
if(this.objservice.formData.ProductId==0){
  this.insertRecord(form);
}
else{
  this.updateRecord(form);
}
}

 insertRecord(form:NgForm)
 {
   this.objservice.postShopkeeper().subscribe(
     res=>{
    this.resetForm(form);
    this.objservice.refreshList();
    alert('Record Insertion Success!!!');
  },
    err=>{alert('Error!!!'+err);})
 }

updateRecord(form:NgForm)
{
this.objservice.putShopkeeper().subscribe(
  res=>{
    this.resetForm();
    this.objservice.refreshList();
    alert('Record updated!!!');
  },
  err=>{
    alert('Error!!!'+err);
  }
)
}

}
