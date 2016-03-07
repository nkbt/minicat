# minicat [![npm](https://img.shields.io/npm/v/minicat.svg?style=flat-square)](https://www.npmjs.com/package/minicat)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/minicat.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/minicat)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/minicat.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/minicat)
[![Coveralls](https://img.shields.io/coveralls/nkbt/minicat.svg?style=flat-square)](https://coveralls.io/r/nkbt/minicat)
[![Dependencies](https://img.shields.io/david/nkbt/minicat.svg?style=flat-square)](https://david-dm.org/nkbt/minicat)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/minicat.svg?style=flat-square)](https://david-dm.org/nkbt/minicat#info=devDependencies)


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

