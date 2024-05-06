import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { ApicallService } from '../apicall.service';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // goToHome() {
  //   throw new Error('Method not implemented.');
  // }
  registrationForm: FormGroup;
  endPoint : any;

  constructor(private formBuilder: FormBuilder,private router: Router,private dialog: MatDialog, public apicallService:ApicallService) {
    this.registrationForm = this.formBuilder.group({
      // Add form controls here
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '400px',
      // Add any additional configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The registration form dialog was closed');
    });
  }
  onSearch(): void {
    // Add your search logic here
    console.log('Search button clicked');
  }
}