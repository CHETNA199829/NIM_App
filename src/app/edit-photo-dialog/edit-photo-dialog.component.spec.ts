import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhotoDialogComponent } from './edit-photo-dialog.component';

describe('EditPhotoDialogComponent', () => {
  let component: EditPhotoDialogComponent;
  let fixture: ComponentFixture<EditPhotoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPhotoDialogComponent]
    });
    fixture = TestBed.createComponent(EditPhotoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
