import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  onSaveStaff() {
    if (this.form.invalid) {
      return;
    }
    this.staffService.createStaff(this.form.value.name, this.form.value.email, this.form.value.phone, this.form.value.address);
    this.form.reset();
  }

}
