module.exports = function (grunt) {
  'use strict';

  //load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  //env cfg
  var pkg = grunt.file.readJSON('package.json');
};
