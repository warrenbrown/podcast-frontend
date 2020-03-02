import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastShowComponent } from './podcast-show.component';

describe('PodcastShowComponent', () => {
  let component: PodcastShowComponent;
  let fixture: ComponentFixture<PodcastShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
