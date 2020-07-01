import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { StudentService } from "../../student.service";
import { Student } from '../../student';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy  {
  students:Student[];
  private unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private studentService:StudentService){
    this.students = new Array<Student>();
  }
  ngOnInit(): void {

    // this.studentService.GetAllStudents().pipe().toPromise().then((data:Student[])=>{
    //   this.students = data;
    // })
    // const subscription = this.studentService.GetAllStudents().subscribe((data:Student[])=>{
    //   this.students = data;
    //   console.log(this.students);
    //   subscription.unsubscribe();
    // });
  }
  ngAfterViewInit(){
    this.studentService.GetAllStudents().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((data:Student[])=>{
      this.students = data;
    })
  }
  ngOnDestroy(){
    // this.unsubscribeAll.next();
    // this.unsubscribeAll.complete();
  }
  
}
