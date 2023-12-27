import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId: number = 0;
  product1!: Product;
  list: Category[] = [];
  form!: FormGroup;

  constructor(private route: ActivatedRoute, private pService: ProductService,
    private catService: CategoryService, private dtpipe: DatePipe,private router : Router) { }

  ngOnInit(): void {    //1st get the routeparameter productid
    this.productId = this.route.snapshot.params['id']     //use Activeted route to get value frm src, id should be same as the url in route
    console.log(this.productId)

    this.form = new FormGroup({               //2 create the form group
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.min(1), Validators.required]),
      categoryId: new FormControl(null,),
      manufacturedDate: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    });

    this.catService.getList().subscribe(result => {          //3rd get the categoryList
      console.log(result);
      this.list = result;
    });

    //call service meth     4th get the product
    this.pService.getById(this.productId).subscribe(p => {      //return product so (p)
      console.log(p)
      this.product1 = p;
      // this.form.patchValue(this.product1)
      this.form.setValue({
        id: this.product1.id,
        name: this.product1.name,
        price: this.product1.price,
        categoryId: this.product1.categoryId,
        manufacturedDate: this.dtpipe.transform(this.product1.manufacturedDate, 'yyyy-MM-dd'),
        //coverting frm p.md to yyyy-mm-dd and store in md lft    ...pipe need to be register inproviders
        imageUrl: this.product1.imageUrl
      })
    }, err => {
      console.log(err)
      alert('error');
    });
  }

  submit() {
    this.pService.update(this.form.value).subscribe(() => {
      alert('updated Sucessfully');
      //navigate to productList
      this.router.navigate(['/Products'])
    },err=>{
      alert('error'),
      console.log(err);
    })
  }
}