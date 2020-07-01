import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student} from './student';
import { Observable } from  'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  api_url = environment.API_URL;
  constructor(private httpClient:HttpClient) {     
  }
  AddStudent(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(`${this.api_url}/students/`, student);
  }
  GetAllStudents():Observable<Student[]>{    

    return this.httpClient.get<Student[]>(`${this.api_url}/students/`)
      .pipe(
        map(items=>{
          return items.map(item=>{
            return new Student(item);
          });     
        })
      )
  } 
}
