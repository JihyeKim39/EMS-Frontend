import { Component, Injectable } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';

// @Injectable({providedIn:'root'})
@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor() {}

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'Emily',
        lastName: 'Watson',
        emailId: 'emily2@gmail.com',
      },
      {
        id: 2,
        firstName: 'Tony',
        lastName: 'Stark',
        emailId: 'ironman@gmail.com',
      },
    ];
  }
}