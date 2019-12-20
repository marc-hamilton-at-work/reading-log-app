import { TestBed } from '@angular/core/testing';

import { ReadingLogService } from './reading-log.service';

describe('ReadingLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadingLogService = TestBed.get(ReadingLogService);
    expect(service).toBeTruthy();
  });
});
