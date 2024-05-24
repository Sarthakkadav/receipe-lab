import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRecipeComponent } from './result-recipe.component';

describe('ResultRecipeComponent', () => {
  let component: ResultRecipeComponent;
  let fixture: ComponentFixture<ResultRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
