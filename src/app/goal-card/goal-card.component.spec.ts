import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCardComponent } from './goal-card.component';

import { GoalApiService } from '../goal-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('GoalCardComponent', () => {
  let component: GoalCardComponent;
  let fixture: ComponentFixture<GoalCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ GoalCardComponent ],
      providers: [GoalApiService, ConfirmationService, MessageService, {provide: ActivatedRoute,useValue: {snapshot: {paramMap: {get(): number {return 1;},},},},},],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
