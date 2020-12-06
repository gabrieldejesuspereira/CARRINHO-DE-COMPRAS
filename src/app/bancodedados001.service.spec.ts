import { TestBed } from '@angular/core/testing';

import { Bancodedados001Service } from './bancodedados001.service';

describe('Bancodedados001Service', () => {
  let service: Bancodedados001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bancodedados001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
