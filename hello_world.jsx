(function(root) {
  'use strict';

  var assets = require('./assets');

  var Home = React.createClass({
    render: function() {
      return (
        <div>
          Home
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={Home}>
      <Route path="test" component={Another}/>
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
      <Router>{routes}</Router>, document.getElementById('main'));
  });

}(this));
