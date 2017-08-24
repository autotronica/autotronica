import { TestBed, inject } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';

describe('VehiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService]
    });
  });

  it('should be created', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
