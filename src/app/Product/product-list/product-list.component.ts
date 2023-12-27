import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list1:Product[]=[];
 private productId = 0;

  constructor(private proService:ProductService){}


  ngOnInit():void {
    this.proService.getList().subscribe(result=>{
        console.log(result);
        this.list1 = result;
    },err=>{
    alert(err);
  })
  }

  delete(){
    console.log('Product to delete :' +this.productId)
    this.proService.delete(this.productId).subscribe(()=>{     //service is not returning date its void
      alert('delete is Succesfull');
      this.ngOnInit();                                         //for refreshing automtcly
    },err=>{
      console.log(err);
      alert(err);
    }  )  
  }

  setProductId(id : number){
    this.productId = id;
  }
  
   
}
