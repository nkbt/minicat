var test = require('tape').test;
var exec = require('child_process').exec;


function exec2(actual, expected, cb) {
  exec(expected, function (error1, stdout1, stderr1) {
    exec(actual, function (error2, stdout2, stderr2) {
      return cb(
        [error1 && error1.message, error2 && error2.message],
        [stdout1, stdout2],
        [stderr1, stderr2]);
    });
  });
}

test('cat single file', function (t) {
  exec2('node cli ./package.json',
    'cat ./package.json',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat multiple files', function (t) {
  exec2('node cli ./package.json ./README.md',
    'cat ./package.json ./README.md',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat non-existing single file', function (t) {
  exec2('node cli whatever',
    'cat whatever',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat non-existing file and a valid file', function (t) {
  exec2('node cli whatever ./package.json',
    'cat whatever ./package.json',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat stdin by default', function (t) {
  exec2('node cli < package.json',
    'cat < package.json',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat stdin by name', function (t) {
  exec2('node cli - < package.json',
    'cat - < package.json',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat file stdin file', function (t) {
  exec2('node cli package.json - README.md < package.json',
    'cat package.json - README.md < package.json',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});


test('cat stdin twice', function (t) {
  exec2('node cli - - < package.json',
    'cat - - < package.json',
    function (error, stdout, stderr) {
      t.equal(stdout[0], stdout[1], 'same stdout');
      t.equal(stderr[0], stderr[1], 'same stderr');
      t.end();
    });
});
