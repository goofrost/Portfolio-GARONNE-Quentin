import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerManagementComponent } from './container-management.component';

describe('ContainerManagementComponent', () => {
  let component: ContainerManagementComponent;
  let fixture: ComponentFixture<ContainerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
