import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPhotoDialogComponent } from '../edit-photo-dialog/edit-photo-dialog.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
   isInputDisabled: boolean;
  //  endPoint: any;
   
  dialogRef!: MatDialogRef<EditPhotoDialogComponent>;

  constructor(private fb: FormBuilder,private dialog: MatDialog) {
    this.isInputDisabled = true;
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      age: [, Validators.required],
      interests: [''],
      address: ['', Validators.required]
    });
   
  }
  ngOnInit(): void {
   this.profileForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: 30,
      interests: 'Reading, Hiking, Cooking',
      address: '123 Main St, Anytown USA'
    });
    // this.dialogRef = this.dialog.open(/* your dialog config */);
    // this.dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.profileForm.get('photo')?.setValue(result.photoUrl);
    //   }
    // });
  }

    // openEditPhotoDialog(): void {
    //   const dialogRef = this.dialog.open(EditPhotoDialogComponent, {
    //     width: '500px',
    //     data: {
    //       photoUrl: this.profileForm.get('photo')?.value
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     if (result) {
    //       this.profileForm.get('photo')?.setValue(result.photoUrl)
    //     }
    //   });
    // }

   
    onSubmit(): void {
      
    }
  }


  