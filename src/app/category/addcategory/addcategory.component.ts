import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  form!:FormGroup;

  constructor(private catService: CategoryService, private router:Router){}

  ngOnInit(): void {    //initialize form   
    this.form = new FormGroup ({
      id : new FormControl(0),
      name : new FormControl('', Validators.required)
    })
  }
  
  submit(){
    this.catService.add(this.form.value).subscribe(result=>{
      alert('added sucessfully'); //redirected to category list
      this.router.navigate(['/categories'])
    },err=>{
      alert('error')
      console.log(err);
    })
  }
}
