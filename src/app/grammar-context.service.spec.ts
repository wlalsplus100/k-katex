import { TestBed } from '@angular/core/testing';

import { GrammarContextService } from './grammar-context.service';

describe('GrammarContextService', () => {
  let service: GrammarContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammarContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
