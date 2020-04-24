import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Shopkeeper} from './shopkeeper.model';

@Injectable({
  providedIn: 'root'
})
export class ShopkeeperService {

  readonly ourapiurl = 'https://localhost:44349/api';
  formData:Shopkeeper;
  list:Shopkeeper[];

constructor(private objhttp:Http) { }

  postShopkeeper()
  {
    return this.objhttp.post(this.ourapiurl+'/Shopkeepers',this.formData);
  }

  putShopkeeper()
  {
    return this.objhttp.put(this.ourapiurl+'/Shopkeepers/'+this.formData.ProductId,this.formData);
  }

  deleteShopkeeper(pid)
  {
    return this.objhttp.delete(this.ourapiurl+'/Shopkeepers/'+pid);
  }

  refreshList()
  {
    this.objhttp.get(this.ourapiurl+'/Shopkeepers').subscribe(values=>{this.list=values.json() as Shopkeeper[]});
  }

  // searchList(pid)
  // {
  //   this.objhttp.get(this.ourapiurl+'/Shopkeepers/'+pid).subscribe(values=>{this.list=values.json() as Shopkeeper[]});
  // }


}
