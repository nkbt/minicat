var fs = require('fs');
var readFileSync = require('fs-file-sync-fd').readFileSync;

var STDIN_FILENO = 0;

function cat(result, file) {
  var stdout = '';
  var stderr = '';

  try {
    if (file === '-') {
      stdout = result.stdout + readFileSync(STDIN_FILENO, 'utf8');
    } else {
      stdout = result.stdout + fs.readFileSync(file, 'utf8');
    }
    stderr = result.stderr;
  } catch (e) {
    stdout = result.stdout;
    stderr = result.stderr + ['cat: ', file, ': ', 'No such file or directory'].join('');
  }

  return {stdout: stdout, stderr: stderr};
}

function nl(str) {
  return str.length > 0 && str[str.length - 1] !== '\n' ? str + '\n' : str;
}

module.exports = function (files) {
  var results = files.reduce(cat, {stdout: '', stderr: ''});

  return {stdout: nl(results.stdout), stderr: nl(results.stderr)};
};
