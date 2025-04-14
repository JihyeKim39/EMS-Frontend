import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ 이거 추가!
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  employee: Employee = new Employee();

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log('Employee saved!', data);
        this.goToEmployeeList();
      },
      (error) => console.log('Error saving employee:', error)
    );
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
