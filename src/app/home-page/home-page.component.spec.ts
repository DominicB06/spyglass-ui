import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

import { UserApiService } from '../user-api.service';
import { MessageService } from 'primeng/api';
import {HttpClientModule} from '@angular/common/http';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HomePageComponent ],
      providers: [UserApiService, MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle login on', () => {
    component.toggleLogin()
    expect(component.login).toBeTruthy()
  });

  it('should toggle login on', () => {
    component.toggleLogin()
    expect(component.login).toBeTruthy()
  });
});
