import { async, TestBed } from '@angular/core/testing';
import { AlgoContainerModule } from './algo-container.module';

describe('AlgoContainerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlgoContainerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AlgoContainerModule).toBeDefined();
  });
});
