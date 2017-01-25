var React = require('react');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm/>
      </div>
    );
  }
});

module.exports = Weather;
