const testWebpack = require('../sample');
test('jest test', () => {
  expect(testWebpack()).toBe(1);
});
