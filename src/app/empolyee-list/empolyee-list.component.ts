import { EmpolyeeServiceService } from '../empolyee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {

  constructor(private _empolyeeService:EmpolyeeServiceService) { }

  ngOnInit() {
     this._empolyeeService.getEmpolyees().subscribe(data => this.employees = data,
     error => this.errorMessage = error);
  }
  
  public employees = [];
  public errorMessage;
}
