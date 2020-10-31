import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InformationComponent } from './components/pages/information/information.component';
import { ProductsComponent } from './components/pages/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'information', component:InformationComponent},
  {path:'products', component:ProductsComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'contactus', component:ContactComponent},
  {path:'**', component:ErrorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route_col = [HomeComponent, AboutComponent, ContactComponent, InformationComponent, ProductsComponent, ErrorComponent];
