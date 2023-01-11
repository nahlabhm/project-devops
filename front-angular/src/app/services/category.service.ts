import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private Http:HttpClient) { }

  //load all the categories 
  public categories(){
    return this.Http.get(`${baseUrl}/category/`);
  }

  //add  new category
  public addCategory(category: any){
    return this.Http.post(`${baseUrl}/category/`, category);

  }

   //delete
   public deleteCategory(categoryId:any){
    return this.Http.delete(`${baseUrl}/category/${categoryId}`);
  }
}
