import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{
  constructor(private route:ActivatedRoute,private quiz:QuizService , private cat:CategoryService,private router:Router){}
  qId=0;
  _quiz: any;
  categories: any;

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qid'];

    this.quiz.getQuiz(this.qId).subscribe(
      (data:any)=>
      {
        this._quiz=data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    );

    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;

      },
      (error)=>{
        alert('error in loading')
      }
    );
  }

    public updateData(){
      this.quiz.updateQuiz(this._quiz).subscribe(

        (data)=>{
          Swal.fire('Success','Quiz Updated','success').then((e)=>{
            this.router.navigate(['/admin/quizzes']);
          });
        },
        (error)=>{
          Swal.fire('Error','error in updating quiz','error');
        }
      );
}
   
    
  }


