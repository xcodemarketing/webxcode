import { TestBed } from '@angular/core/testing';

import { WebxcodewordService } from './webxcodeword.service';

describe('WebxcodewordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebxcodewordService = TestBed.get(WebxcodewordService);
    expect(service).toBeTruthy();
  });
});
