import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Staff } from './staff.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staff: Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getStaff();
  }

  getStaff() {
    this.staffService.getStaff().subscribe(staffData => {
      this.staff = staffData;
    });
  }

}
