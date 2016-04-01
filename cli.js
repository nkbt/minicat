#! /usr/bin/env node

var cat = require('./cat');

var results = cat(process.argv.length > 2 ? process.argv.slice(2) : ['-']);

if (results.stderr.length) {
  process.stderr.write(results.stderr);
}

if (results.stdout.length) {
  process.stdout.write(results.stdout);
}

process.exit(results.stderr.length ? 1 : 0);
