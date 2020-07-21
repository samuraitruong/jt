#!/usr/bin/env node
const fs = require('fs-extra');
const jt = require('./lib');
const [$1, $2, filename, replace, output] = process.argv;

if (filename) {
  if (fs.existsSync(filename)) {
    const json = fs.readJsonSync(filename);
    console.log(jt(json, replace || ''));
  } else {
    console.warn('No source file found %s', filename);
  }
}
