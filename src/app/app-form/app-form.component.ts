import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private fb: FormBuilder  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      personalData: this.fb.group({
        gender: '',
        firstName: '',
        secondName: '',
        lastName: '',
        dateOfBirth: ''
      }),
      interests: this.fb.array([]),
      contactData: this.fb.group({
        email: '',
        phone: ''
      })
    });
  }


}
