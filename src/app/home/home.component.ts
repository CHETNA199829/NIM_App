import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registrationForm = this.formBuilder.group({
      // Add form controls here
    });
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      jobDescription: ['', Validators.required],
      location: ['', Validators.required],
      fullTime: [false],
      partTime: [false],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
}
onSearch() {
  // Add your search logic here
}
goToRegistration() {
  this.router.navigate(['/register']);
}
}
