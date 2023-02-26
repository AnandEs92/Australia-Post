import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCodeComponentComponent } from './post-code-component.component';

describe('PostCodeComponentComponent', () => {
  let component: PostCodeComponentComponent;
  let fixture: ComponentFixture<PostCodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCodeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
