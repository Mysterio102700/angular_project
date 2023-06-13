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


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Juices',component:JuiceslistComponent},
  {path:'Milkshakes',component:MilkshakeslistComponent},
  {path:'Mocktails',component:MocktailslistComponent},
  {path:':{name}/:{id}',component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
