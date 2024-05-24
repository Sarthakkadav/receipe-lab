import { TestBed } from '@angular/core/testing';

import { LabRecipeService } from './lab-recipe.service';

describe('LabRecipeService', () => {
  let service: LabRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
