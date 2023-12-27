import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DatePipe } from '@angular/common';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { Token } from '@angular/compiler';
import { TokenInterceptor } from './Auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    ListCategoryComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent,
    LoginComponent,
    RegisterComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,
  {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
