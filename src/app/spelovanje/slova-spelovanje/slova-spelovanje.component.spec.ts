import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovaSpelovanjeComponent } from './slova-spelovanje.component';

describe('SlovaSpelovanjeComponent', () => {
  let component: SlovaSpelovanjeComponent;
  let fixture: ComponentFixture<SlovaSpelovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlovaSpelovanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlovaSpelovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
