import { Component,OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit{

  quizzes=[
    {
      qId:'',
      titre:'',
      description:'',
      maxMarks:'',
      numberQuestions:'',
      active:'',
      category:{
        title:'',
      },
    },
  ];

  constructor(private quiz:QuizService){

  }
  ngOnInit(): void {

    this.quiz.quizzes().subscribe(
      (data:any) => {
        this.quizzes = data;
        console.log(this.quizzes); 
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','error in deleting quiz ','error');
    
      }
    );
    
  }

  deleteQuiz(qId:any){
    Swal.fire({
      icon:'info',
      title:'are you sure ',
      confirmButtonText:'delete',
      showCancelButton:true,

    }).then((result)=>{
      if(result.isConfirmed){
        this.quiz.deleteQuiz(qId).subscribe(
          (data)=> {
            this.quizzes=this.quizzes.filter((quiz)=>quiz.qId != qId);
            Swal.fire('Success','Quiz deleted','success');
    
          },
          (error)=> {
            Swal.fire('Error','error in deleting quiz ','error');
          }
          
          );
    }
  });
  
    
  }
}
