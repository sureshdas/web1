import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from '@angular/router'
import { LoginComponent } from './login.component';
import {MyOwnMaterialModule} from '../../../shared/modules/my-own-material/my-own-material.module'
fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MyOwnMaterialModule],
      providers:[Router],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
