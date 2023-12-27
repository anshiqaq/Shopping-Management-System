import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  list:Category[]=[];
  
  form!:FormGroup;

  constructor(private proService : ProductService,private router: Router,private catService:CategoryService){}
  
  ngOnInit(): void {
    this.catService.getList().subscribe(result=>{  //for the drop down
      console.log(result);
      this.list = result;
    })

    this.form = new FormGroup({
      id : new FormControl(0),
      name : new FormControl('', Validators.required),
      price : new FormControl(null,[Validators.min(1),Validators.required]),
      categoryId : new FormControl('',),
      manufacturedDate : new FormControl('',Validators.required),
      imageUrl : new FormControl('',Validators.required)
  })   

  }
  submit(){
    console.log(this.form.value)
    this.proService.add(this.form.value).subscribe(result=>{
      alert('added Sucessfully');
      this.router.navigate(['/Products'])
    },err=>{
      alert('error');
      console.log(err);
    })
  }
}
