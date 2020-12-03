import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { CartPageComponent } from './components/shopping/cart/cart-page.component';
import { ShoppingComponent } from './components/shopping/shopping.component';



const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'shop',component:ShoppingComponent
  },
  {
    path:'cart',component:CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
