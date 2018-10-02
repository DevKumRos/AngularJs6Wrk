import { EmpolyeeServiceService } from '../empolyee-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {

  constructor(private _empolyeeService:EmpolyeeServiceService, private router:Router) { }

  ngOnInit() {
     this._empolyeeService.getEmpolyees().subscribe(data => this.employees = data,
     error => this.errorMessage = error);
  }
  
  onSelectedEmployee(employee){
    this.router.navigate(['/employeedetails', employee.id]);
  }
  
  public employees = [];
  public errorMessage;
}
