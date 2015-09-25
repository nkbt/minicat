var test = require('tape').test;
var path = require('path');
var cat = require('../cat');

// test1.txt has no extra line at the end
var test1 = path.relative(path.join(__dirname, '..'), path.join(__dirname, 'test1.txt'));
// test2.txt has extra line at the end
var test2 = path.relative(path.join(__dirname, '..'), path.join(__dirname, 'test2.txt'));
var wrong = path.relative(path.join(__dirname, '..'), path.join(__dirname, 'wrong.txt'));

test('cat', function (t) {
  t.deepEqual(
    cat([test1]),
    {stderr: '', stdout: 'test1\n'},
    'cat single file');

  t.deepEqual(
    cat([test1, test2]),
    {stderr: '', stdout: 'test1test2\n'},
    'cat multiple files');

  t.deepEqual(
    cat([wrong]),
    {stderr: 'cat: test/wrong.txt: No such file or directory\n', stdout: ''},
    'cat non-existing single file');

  t.deepEqual(
    cat([wrong, test1]),
    {stderr: 'cat: test/wrong.txt: No such file or directory\n', stdout: 'test1\n'},
    'cat non-existing file and a valid file');

  t.end();
});
