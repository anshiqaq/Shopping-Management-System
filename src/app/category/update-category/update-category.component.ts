import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  form! : FormGroup;
  categoryId = 0;
  category1! : Category;


constructor(private catService : CategoryService, private route : ActivatedRoute,
  private router : Router){}

  ngOnInit(): void {
    this.categoryId=this.route.snapshot.params['id']
    console.log(this.categoryId);

    this.form=new FormGroup({
      id : new FormControl(0),
      name : new FormControl('',Validators.required)
    });

    this.catService.getById(this.categoryId).subscribe(c=>{
      console.log(c);
      this.category1=c;

      this.form.setValue({
        id : this.category1.id,
        name : this.category1.name
    })   
    },err=>{
      console.log(err)
      alert('error');
    });    
  } 


  submit(){
    this.catService.update(this.form.value).subscribe(()=>{
      alert('updated Sucessfully')
      this.router.navigate(['/categories'])
    },err=>{
      alert('error'),
      console.log(err);
    })
  
  }
}

