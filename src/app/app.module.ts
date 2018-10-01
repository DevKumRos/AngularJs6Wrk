import { AppRoutingModule, routingComponent } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DepartmentService } from './department.service';
import { RegistrationComponent } from './registration/registration.component';
import { StructuraltestComponent } from './structuraltest/structuraltest.component';
import { EmpolyeeServiceService } from './empolyee-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StructuraltestComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmpolyeeServiceService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
