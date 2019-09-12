import { TestBed } from '@angular/core/testing';

import { ProddataService } from './proddata.service';

describe('ProddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProddataService = TestBed.get(ProddataService);
    expect(service).toBeTruthy();
  });
});
