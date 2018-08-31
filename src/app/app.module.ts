import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*** Routes *****/
import { AppRoutingModule } from './app-routing.module';

/***** Components *****/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

/******** Services *************/
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
