var persify = require('./');
var test = require('tape');

test('digit conversion', function(assert) {
  assert.plan(1);
  assert.strictEqual(persify('1234567890'), '۱۲۳۴۵۶۷۸۹۰');
});

test('accept any input', function(assert) {
  assert.plan(7);
  assert.strictEqual(persify('1 سر و 1000 سودا'), '۱ سر و ۱۰۰۰ سودا');
  assert.strictEqual(persify(undefined), 'undefined');
  assert.strictEqual(persify(null), 'null');
  assert.strictEqual(persify(1234567890), '۱۲۳۴۵۶۷۸۹۰');
  assert.strictEqual(persify({}), 'object');
  assert.strictEqual(persify([]), 'object');
  assert.strictEqual(persify(function() {}), 'function');
});
