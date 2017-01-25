var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Navigation component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
