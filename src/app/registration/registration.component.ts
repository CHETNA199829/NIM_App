import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,public dialog: MatDialog) {
  this.registrationForm = this.formBuilder.group({
    photo: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    age: [0, Validators.required],
    state: ['', Validators.required],
    country: [''],
    address: [''],
    tags: ['']
  });
  this.onSubmit = this.onSubmit!.bind(this);
  this.onCancel = this.onCancel!.bind(this);
}
ngOnInit() {}

onSubmit() {
  // Save the form data to the database
  console.log(this.registrationForm.value);

  // this.http.post('/api/register', this.registrationForm.value)
  //   .subscribe(response => {
  //     console.log('Registration successful', response);
      // Redirect to the home page or show a success message
    //   this.router.navigate(['/']);
    // }, error => {
    //   console.error('Registration failed', error);
      // Show an error message
    // });
}
  
onCancel() {
  // Navigate back to the home page
  // You can use the Angular router to navigate back to the home page
  this.router.navigate(['/']);
}
  //   goToHome() {
  //   this.router.navigate(['/']);
  // }

  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '400px',
      // Add any additional configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The registration form dialog was closed');
      // Add any actions you want to take after the dialog is closed
    });
  }

}
