// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// Import the testing version of Zone.js which is required for Angular's async operations during testing.
import 'zone.js/testing';

// Import the TestBed utility from Angular core testing to configure and initialize the testing environment.
import { getTestBed } from '@angular/core/testing';

// Import modules required to set up a dynamic browser testing environment.
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Declare a variable "require" with a specific type that includes a context method.
// This is used by webpack to load modules dynamically based on a pattern.
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// Initialize the Angular testing environment by configuring the TestBed with the dynamic testing module.
// This sets up the platform for running tests in a browser environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Use webpack's require.context to search recursively (true) for all files that match the .spec.ts pattern in the current directory ('./').
// This will automatically load all spec files for the tests.
const context = require.context('./', true, /\.spec\.ts$/);

// Iterate over all the keys (paths) returned by the context function and require (load) them.
// This effectively loads all test modules so that they can be executed by the test runner.
context.keys().forEach(context);
