import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FAQComponent } from './faq/faq.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { Card1Component } from './card1/card1.component';
import { JuiceslistComponent } from './juiceslist/juiceslist.component';
import { MilkshakeslistComponent } from './milkshakeslist/milkshakeslist.component';
import { MocktailslistComponent } from './mocktailslist/mocktailslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { Productdetails1Component } from './productdetails1/productdetails1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Productdetails2Component } from './productdetails2/productdetails2.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FrontComponent } from './front/front.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerComponent,
    FAQComponent,
    CardComponent,
    ButtonComponent,
    SubBannerComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    Card1Component,
    JuiceslistComponent,
    MilkshakeslistComponent,
    MocktailslistComponent,
    ProductdetailsComponent,
    Productdetails1Component,
    PagenotfoundComponent,
    Productdetails2Component,
    Navbar2Component,
    FrontComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
