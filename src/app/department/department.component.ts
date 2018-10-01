import { DepartmentService } from '../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 public departments = [];
  public errorMessage;
  
  constructor(private _deptService : DepartmentService) { }

  ngOnInit() {
    this._deptService.getDepartments().subscribe(data => this.departments = data,
     error => this.errorMessage = error);
  }


}
