import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeybordComponent } from './keybord.component';

describe('KeybordComponent', () => {
  let component: KeybordComponent;
  let fixture: ComponentFixture<KeybordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeybordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeybordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
