import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDividerModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
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
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
