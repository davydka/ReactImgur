var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('hash-history');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello!
    </h1>
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
