import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private Http:HttpClient) { }

  public quizzes(){
    return this.Http.get(`${baseUrl}/quiz/`);
  }


  public addQuiz(quiz:any){
    return this.Http.post(`${baseUrl}/quiz/`,quiz);
  }

  //delete
  public deleteQuiz(qId:any){
    return this.Http.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getQuiz(qId:any){
    return this.Http.get(`${baseUrl}/quiz/${qId}`);
  }

  public updateQuiz(quiz:any){
    return this.Http.put(`${baseUrl}/quiz/`,quiz);
  }

}




