import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
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

  // ✅ Employee 타입에 맞게 id까지 포함해서 초기화
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  // 🔍 컴포넌트가 로딩될 때 employee 정보를 가져옴
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  // 💾 form 제출 처리
  onSubmit() {
    console.log('Employee updated:', this.employee);
    // 예: 서버에 업데이트 요청 보내기
    // this.employeeService.updateEmployee(this.id, this.employee).subscribe(...)
  }
}
