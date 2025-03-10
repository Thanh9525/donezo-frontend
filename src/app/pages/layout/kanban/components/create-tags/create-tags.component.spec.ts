import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagsComponent } from './create-tags.component';

describe('CreateTagComponent', () => {
  let component: CreateTagsComponent;
  let fixture: ComponentFixture<CreateTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
