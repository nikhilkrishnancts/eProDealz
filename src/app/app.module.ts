import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'home/:page', component: HomeComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductDetailsComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    WelcomeComponent,
    MainComponent,
    CarouselComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
