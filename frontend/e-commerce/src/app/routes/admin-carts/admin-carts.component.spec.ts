import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCartsComponent } from './admin-carts.component';

describe('AdminCartsComponent', () => {
  let component: AdminCartsComponent;
  let fixture: ComponentFixture<AdminCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
