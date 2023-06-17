import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JuiceslistComponent } from './juiceslist/juiceslist.component';
import { MilkshakeslistComponent } from './milkshakeslist/milkshakeslist.component';
import { MocktailslistComponent } from './mocktailslist/mocktailslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { Productdetails1Component } from './productdetails1/productdetails1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Productdetails2Component } from './productdetails2/productdetails2.component';
import { FrontComponent } from './front/front.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {path:'',component:FrontComponent},
  {path:'home',component:WelcomeComponent},
  {path:'about',component:AboutComponent,
  children:[
    {path:'productdetails1',component:Productdetails1Component}
  ]
},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Juices',component:JuiceslistComponent},
  {path:'Milkshakes',component:MilkshakeslistComponent},
  {path:'Mocktails',component:MocktailslistComponent},
  {path:'Juices/:name/:id',component:ProductdetailsComponent},
  {path:'Milkshakes/:name/:id',component:Productdetails1Component},
  {path:'Mocktails/:name/:id',component:Productdetails2Component},
  {path:'payment',component:PaymentComponent},
  {path:'success',component:SuccessComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
