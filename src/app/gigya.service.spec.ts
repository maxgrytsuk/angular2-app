import { TestBed, inject } from '@angular/core/testing';
import { GigyaService } from './gigya.service';

describe('GigyaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GigyaService]
    });
  });

  it('should ...', inject([GigyaService], (service: GigyaService) => {
    expect(service).toBeTruthy();
  }));
});
