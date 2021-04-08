import { getGreeting } from '../support/app.po';

describe('kp-todos', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should display welcome message', () => {
    getGreeting().contains('kp-todos app is running KKK!');
  });
});
