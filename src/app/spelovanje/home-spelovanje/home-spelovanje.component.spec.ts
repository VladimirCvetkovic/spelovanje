import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpelovanjeComponent } from './home-spelovanje.component';

describe('HomeSpelovanjeComponent', () => {
  let component: HomeSpelovanjeComponent;
  let fixture: ComponentFixture<HomeSpelovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpelovanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpelovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
