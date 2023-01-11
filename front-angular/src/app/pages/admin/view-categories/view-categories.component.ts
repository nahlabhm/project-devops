import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent  implements OnInit{
categories=[{
    title:'',
    description:''
  
  }
];

constructor(private _category:CategoryService){}
ngOnInit(): void{

  this._category.categories().subscribe(
    (data:any)=>
  {
    this.categories=data;
    console.log(this.categories);
  },
  (error)=>{
    console.log(error);
    Swal.fire('Error','error in Loading Data','error');
  }
  
  );}

  deleteCategory(categoryId:any){
    Swal.fire({
      icon:'info',
      title:'are you sure ',
      confirmButtonText:'delete',
      showCancelButton:true,

    }).then((result)=>{
      if(result.isConfirmed){
        this._category.deleteCategory(categoryId).subscribe(
          (data)=> {
            this.categories=this.categories.filter((_category)=>_category.title != categoryId);
            Swal.fire('Success','category deleted','success');
    
          },
          (error)=> {
            Swal.fire('Error','error in deleting category ','error');
          }
          
          );
    }
  });
  
    
  }

}
