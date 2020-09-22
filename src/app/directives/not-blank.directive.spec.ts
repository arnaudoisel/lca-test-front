import { NotBlankDirective } from './not-blank.directive';

describe('NotBlankDirective', () => {
  it('should create an instance', () => {
    const directive = new NotBlankDirective(null);
    expect(directive).toBeTruthy();
  });
});
