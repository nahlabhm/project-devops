import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories=[
    {
      cid:'',
      title:'',
    },
   
  
  ];
 categoryData={
   
    titre:'',
    description:'',
    maxMarks:'',
    numberQuestions:'',
    active:'true',
    category:{
      cid:'',
     
    },
  };

  constructor(private cat:CategoryService, private _snack:MatSnackBar,private quiz:QuizService){}

  ngOnInit(): void {

    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Errror in Loding data from server','error');
      }
    );
    
    }
  //
  addQuiz(){
    if(this.categoryData.titre.trim()==''|| this.categoryData.titre==null)
    {
      this._snack.open('title Required','',{
        duration:3000,
      });
      return;
    }
    this.quiz.addQuiz(this.categoryData).subscribe(
      (data)=>
      {
        Swal.fire('Success','quiz is added','success');
        this.categoryData={
          titre:'',
          description:'',
          maxMarks:'',
          numberQuestions:'',
          active:'true',
          category:{
            cid:'',
           
          },

        };
      },
      
      (error)=>{
        Swal.fire('Error','Server error','error');
        console.log(error);
      });
  }

}
