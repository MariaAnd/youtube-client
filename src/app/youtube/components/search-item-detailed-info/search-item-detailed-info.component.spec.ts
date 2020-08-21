import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemDetailedInfoComponent } from './search-item-detailed-info.component';

describe('SearchItemDetailedInfoComponent', () => {
  let component: SearchItemDetailedInfoComponent;
  let fixture: ComponentFixture<SearchItemDetailedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemDetailedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
