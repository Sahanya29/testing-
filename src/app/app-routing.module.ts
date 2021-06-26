import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import{Data1Component } from './data1/data1.component';
import{Data2Component} from './data2/data2.component';


const routes: Routes = [
  { path:'home', component : HomeComponent},
  
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'test', component:TestComponent},
  { path: 'products', component:ProductsComponent,children:[
    {path:'mobiles', component:MobilesComponent},
    {path:'bikes',component:BikesComponent},
    {path:'televisions', component:TelevisionsComponent}
  ]},
  { path:'', redirectTo:'/login',pathMatch:'full'},
  { path:'data1', component:Data1Component },
  { path:'data2', component:Data2Component },
  {path:'test',component:TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
