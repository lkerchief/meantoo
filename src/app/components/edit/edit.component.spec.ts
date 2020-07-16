import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDividerModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports : [
        NoopAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatCardModule,
        MatDividerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
