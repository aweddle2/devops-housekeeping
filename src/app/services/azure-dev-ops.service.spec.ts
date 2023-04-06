import { TestBed } from '@angular/core/testing';

import { AzureDevOpsService } from './azure-dev-ops.service';

describe('AzureDevOpsService', () => {
  let service: AzureDevOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureDevOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
