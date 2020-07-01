import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Student } from "../../student";
@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() student:Student;
  @Output() onBack = new EventEmitter();
  constructor() { }

  ngOnInit(): void {      
  }

  back(){
    console.log("back");
    this.onBack.emit();
  }
  get contactInfo(){return this.student.getContactInfo()}
  get highSchoolInfo(){return this.student.getHighSchoolInfo();}
  get collegeInfo(){return this.student.getCollegeInfo();}
  get militaryInfo(){return this.student.getMilitaryInfo();}
  get employmentInfo(){return this.student.getEmploymentInfo();}
}
