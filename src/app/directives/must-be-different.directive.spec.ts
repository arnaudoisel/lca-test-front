import { MustBeDifferentDirective } from './must-be-different.directive';

describe('MustBeDifferentDirective', () => {
  it('should create an instance', () => {
    const directive = new MustBeDifferentDirective(null);
    expect(directive).toBeTruthy();
  });
});
