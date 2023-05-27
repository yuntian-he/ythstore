import { TestBed } from '@angular/core/testing';

import { YthShopFormService } from './yth-shop-form.service';

describe('YthShopFormService', () => {
  let service: YthShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YthShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
