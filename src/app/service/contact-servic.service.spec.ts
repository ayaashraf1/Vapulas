import { TestBed, inject } from '@angular/core/testing';

import { ContactServicService } from './contact-servic.service';

describe('ContactServicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactServicService]
    });
  });

  it('should be created', inject([ContactServicService], (service: ContactServicService) => {
    expect(service).toBeTruthy();
  }));
});
