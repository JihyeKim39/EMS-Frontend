import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  imports: [RouterModule, FormsModule],
  standalone: true,
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  onSubmit() {
    // 서버에 업데이트 요청 보내기
    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe((data) => {
        this.goToEmployeeList();
        console.log('Employee updated:', data);
      });
  }

  // create-employee.component.ts에서 가져옴 [재사용]
  goToEmployeeList() {
    this.router.navigate(['/employees']); // router 사용
  }
}
