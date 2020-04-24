import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import{ShopkeeperService} from 'src/app/shared/shopkeeper.service';
import {Shopkeeper} from 'src/app/shared/shopkeeper.model';


@Component({
  selector: 'app-invent-list',
  templateUrl: './invent-list.component.html',
  styleUrls: ['./invent-list.component.css']
})
export class InventListComponent implements OnInit {

  constructor(public objservice:ShopkeeperService) { }

  ngOnInit() {
    this.objservice.refreshList();
  }

  sendtoForm(selectRecord){
    this.objservice.formData=Object.assign({},selectRecord);
  }

  delRecord(objp:Shopkeeper)
  {if(confirm('Are you sure to delete this PassPort?'))
  {
    this.objservice.deleteShopkeeper(objp.ProductId).subscribe(res=>
      {this.objservice.refreshList();
      alert('Record Deleted!!!');
    },
    err=>{
      alert('Error!!!'+err);
    }
    )
  }
}


}
