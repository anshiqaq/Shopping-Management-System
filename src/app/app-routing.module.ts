import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { routeAuthGuard } from './Auth/route-auth.guard';

const routes: Routes = [
  {path:'categories',component:ListCategoryComponent, canActivate:[routeAuthGuard]},
  {path:'categories/add',component:AddcategoryComponent, canActivate:[routeAuthGuard]},
  {path:'Product/edit/:id',component:UpdateProductComponent, canActivate:[routeAuthGuard]},
  {path:'Products',component:ProductListComponent,  canActivate:[routeAuthGuard]},
  {path:'Products/add', component:AddProductComponent, canActivate:[routeAuthGuard]},
  {path:'categories/edit/:id',component:UpdateCategoryComponent, canActivate:[routeAuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
