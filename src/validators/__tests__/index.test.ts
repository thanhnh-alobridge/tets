import { validatePassword } from '../password';

/* eslint-disable no-undef */
describe('validate password', () => {
  it('given valid password', () => {
    expect(validatePassword('Passw@rd1')).toBeFalsy();
  });

  it('given invalid password', () => {
    expect(validatePassword('Password悟')).toBeTruthy();
  });
});
