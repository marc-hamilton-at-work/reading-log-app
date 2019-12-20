import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingLogComponent } from './reading-log.component';

describe('ReadingLogComponent', () => {
  let component: ReadingLogComponent;
  let fixture: ComponentFixture<ReadingLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
