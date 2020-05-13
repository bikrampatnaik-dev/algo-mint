import { async, TestBed } from '@angular/core/testing';
import { AlgoLoginModule } from './algo-login.module';

describe('AlgoLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlgoLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AlgoLoginModule).toBeDefined();
  });
});
