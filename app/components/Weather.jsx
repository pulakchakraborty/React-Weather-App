var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Berlin',
      temp: 6
    }
  },
  handleSearch: function (location) {
      this.setState({
        location: location,
        temp: 23
      });
  },
  render: function () {
    var {location, temp} = this.state;
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
