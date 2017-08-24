import { TestBed, inject } from '@angular/core/testing';

import { HistorialService } from './historial.service';

describe('HistorialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistorialService]
    });
  });

  it('should be created', inject([HistorialService], (service: HistorialService) => {
    expect(service).toBeTruthy();
  }));
});
