import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { LoginModule } from './login/login.module';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
