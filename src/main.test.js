const { expect } = require('chai');
const mock = require('mock-require');
const { spy } = require('sinon');

describe('application runs correctly', () => {
  it('app runs without failing', () => {
    const expressSpy = spy(() => {
      return {
        static() {},
        use() {},
        get() {},
        set() {},
        listen() {},
      };
    });
    expressSpy.static = () => {};
    mock('express', expressSpy);
    require('./main');
    mock.stop('express');
  });
});
