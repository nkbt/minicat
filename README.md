# minicat

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/minicat.svg?style=svg)](https://circleci.com/gh/nkbt/minicat)
[![Coverage Status](https://coveralls.io/repos/nkbt/minicat/badge.svg?branch=master)](https://coveralls.io/r/nkbt/minicat?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/minicat.svg)](https://david-dm.org/nkbt/minicat)
[![devDependency Status](https://david-dm.org/nkbt/minicat/dev-status.svg)](https://david-dm.org/nkbt/minicat#info=devDependencies)


Windows compatible `cat` shell command polyfill with zero dependencies

## Reason

Doing development on both OSX and Windows I want to have some basic tools to behave equally. Similar to `rimraf`, `minicat` replaces `cat` command and behaves in the same way as original UNIX `cat`.

To make sure it actually behaves the same way, there are some [functional tests](test/functional.js), comparing output for both.

Note: `cat` adds new-line automatically if there is no extra new line at the end of file (or files). This behaviour is reproduced by `minicat` too.


## Installation and usage

#### 1. Global usage

```sh
npm install -g minicat
```

Then whenever you need it:
```sh
minicat package.json
minicat file1.txt file2.txt

# or with mcat shorthand
mcat package.json
```


#### 2. Local usage

```sh
npm install --save-dev minicat
```

Use in npm scripts (works in Windows too):
```json
{
  "scripts": {
    "coveralls": "minicat coverage/lcov.info | coveralls"
  }
}
```

