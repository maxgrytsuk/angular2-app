import { TestBed, inject } from '@angular/core/testing';
import { GigyaApiService } from './gigya-api.service';

describe('GigyaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GigyaApiService]
    });
  });

  it('should ...', inject([GigyaApiService], (service: GigyaApiService) => {
    expect(service).toBeTruthy();
  }));
});
