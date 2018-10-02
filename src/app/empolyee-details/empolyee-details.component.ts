import { EmpolyeeServiceService } from '../empolyee-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'empolyee-details',
  templateUrl: './empolyee-details.component.html',
  styleUrls: ['./empolyee-details.component.css']
})
export class EmpolyeeDetailsComponent implements OnInit {

  constructor(private _empolyeeService:EmpolyeeServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    let empId= parseInt(this.route.snapshot.paramMap.get("id"));
    this.empolyeeId = empId;
    console.log("Emp Id", empId);
   this._empolyeeService.getEmpolyees().subscribe(data => this.employees = data,
   error => this.errorMessage = error);
  }
  public empolyeeId;
  public employees = [];
  public errorMessage;
}
