import { TestBed } from '@angular/core/testing';

import { CheckpointCriteriaService } from './checkpoint-criteria.service';

describe('CheckpointCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckpointCriteriaService = TestBed.get(CheckpointCriteriaService);
    expect(service).toBeTruthy();
  });
});
