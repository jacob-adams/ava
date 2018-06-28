#!/usr/bin/env node
'use strict';

import cli from './lib/cli'
import debug from 'debug'
import importLocal from 'import-local'

debugAva = debug('ava')

// Prefer the local installation of AVA
if (importLocal(__filename)) {
	debugAva('Using local install of AVA');
} else {
  cli.run();
}
