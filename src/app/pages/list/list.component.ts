import { Component, OnInit, ɵConsole } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentService } from "../../student.service";
import { Student } from '../../student';
@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false,
      position:'right'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    hideSubHeader:true,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      staffName: {
        title: 'Staff',
        type: 'string',
      },
    },
  };

  source: LocalDataSource;
  searchWord:string;
  selectedStudent:Student;
  showDetail:boolean;
  constructor(private studentService:StudentService) { 
    this.source = new LocalDataSource();
  }

  ngOnInit(): void {
    this.studentService.GetAllStudents().subscribe((data:Student[])=>{
      console.log(data);
      console.log(data[0].getContactInfo());
      this.source.load(data);
      console.log(this.source);
    });
    this.showDetail = false;
  }
  onSearchWordChange(newWord:string){
    this.searchWord = newWord;
    console.log(this.searchWord);
    this.source.setFilter([{field:'name',search:this.searchWord}]);    
  }
  onUserRowSelect(event){
    console.log(event.data);
    let data = event.data;
    this.selectedStudent = new Student(event.data);
    this.showDetail = true;
    
  }
  onBack(){
    console.log("========");
    this.showDetail = false;
  }
}
