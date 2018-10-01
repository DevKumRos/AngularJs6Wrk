import { EmpolyeeServiceService } from '../empolyee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empolyee-details',
  templateUrl: './empolyee-details.component.html',
  styleUrls: ['./empolyee-details.component.css']
})
export class EmpolyeeDetailsComponent implements OnInit {

  constructor(private _empolyeeService:EmpolyeeServiceService) { }

  ngOnInit() {
   this._empolyeeService.getEmpolyees().subscribe(data => this.employees = data,
   error => this.errorMessage = error);
  }

  public employees = [];
  public errorMessage;
}
