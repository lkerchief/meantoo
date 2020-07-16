import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { MatCardModule, MatDividerModule, MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports : [ RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        MatDividerModule,
        MatTableModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
