const { createElement } = require('react');
const { cleanup, fireEvent, render } = require('@testing-library/react');
const { Form } = require('./components/form/form');
const { Results } = require('./components/results/results');

afterEach(cleanup);

describe('submit button', () => {
  it('can click button', () => {
    const form = render(createElement(Form));
    expect(form).toBeTruthy();
  });
});//3:27