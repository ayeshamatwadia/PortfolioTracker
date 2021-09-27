import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSaveComponent } from './share-save.component';

describe('ShareSaveComponent', () => {
  let component: ShareSaveComponent;
  let fixture: ComponentFixture<ShareSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
