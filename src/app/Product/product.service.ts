import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl=`${environment.baseApiUrl}Products`;

  constructor(private client:HttpClient) { }

  getList():Observable<Product[]>{
    return this.client.get<Product[]>(this.apiUrl);

  }
  add(prod : Product):Observable<Product>{
    return this.client.post<Product>(this.apiUrl,prod)
  }

  delete(id : number):Observable<void>{   //it does not return any data
    return this.client.delete<void>(this.apiUrl + '/' +id);  //pass the id in url whih is to delete
  }

  getById(id:number):Observable<Product>{
    return this.client.get<Product>(this.apiUrl + '/' +id)
  }

  update(p:Product):Observable<void>{       //update method give  no return
    return this.client.put<void>(this.apiUrl +'/' +p.id,p)
  } 
}
