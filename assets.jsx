// (function(root) {
//   'use strict';

React = require('react');
ReactDOM = require('react-dom');
Router = require('react-router').Router;
Route = require('react-router').Route;
IndexRoute = require('react-router').IndexRoute;
Link = require('react-router').Link;

req = require.context("./components", true, /^\.\/.*\.jsx$/);
req.keys().forEach(function(key) { req(key); });

module.exports = this;
// }(this));
