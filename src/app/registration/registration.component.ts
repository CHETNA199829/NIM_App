
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApicallService } from '../apicall.service';


// declare const moveForm: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registrationForm!: FormGroup;
  // onCancelBtn: any;
apicall: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router,public dialog: MatDialog,private apicallService: ApicallService) {}
    formDetails(){
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
  })
  this.onSubmit = this.onSubmit!.bind(this.apicallService);
  this.onCancel = this.onCancel!.bind(this.apicallService);
}
ngOnInit():void {
 this.formDetails();
//  const onCancelBtn = document.getElementById('oncancel-btn');
//   this.onCancelBtn.addEventListener('click', this.onCancel.bind(this));
// const submitBtn = document.getElementById('submit-btn');
//   submitBtn.addEventListener('click', this.onSubmit.bind(this));
}

onSubmit() {
 // console.log(this.registrationForm.value);
 this.apicallService.registerApiCall(this.apicall, this.registrationForm.value)
    .subscribe(response => {
      console.log('Registration successful', response);
     this.router.navigate(['/profile']);
    }, error => {
      console.error('Registration failed', error);
      });
}
  
onCancel() {
  // Navigate back to the home page
  // You can use the Angular router to navigate back to the home page
  this.router.navigate(['/home']);
  // this.homeComponent.goToHome();
}
  //   goToHome() {
  //   this.router.navigate(['/home']);
  // }

  openRegistrationDialog() {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '400px',
      // Add any additional configuration options here
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The registration form dialog was closed');
      // Add any actions you want to take after the dialog is closed
    })
  }

  
}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
 
