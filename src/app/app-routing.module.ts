import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventListComponent } from './invent-list/invent-list.component';
import { InventComponent } from './invent/invent.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'invent',component:InventComponent},
  {path:'invent-list',component:InventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
