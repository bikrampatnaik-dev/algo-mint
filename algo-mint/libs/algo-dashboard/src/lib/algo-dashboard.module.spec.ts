import { async, TestBed } from '@angular/core/testing';
import { AlgoDashboardModule } from './algo-dashboard.module';

describe('AlgoDashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlgoDashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AlgoDashboardModule).toBeDefined();
  });
});
