var fs = require('fs');

function cat(result, file) {
  var stdout = '';
  var stderr = '';

  try {
    stdout = result.stdout + fs.readFileSync(file, 'utf8');
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
