var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather;
