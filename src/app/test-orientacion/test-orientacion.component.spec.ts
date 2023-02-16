import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOrientacionComponent } from './test-orientacion.component';

describe('TestOrientacionComponent', () => {
  let component: TestOrientacionComponent;
  let fixture: ComponentFixture<TestOrientacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOrientacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
