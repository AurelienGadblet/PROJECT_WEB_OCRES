import React from 'react';

class Widget1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            "coord": { "lon": 2.35, "lat": 48.86 },
            "weather": [
              { "id": 501, "main": "Clear", "description": "moderate rain", "icon": "10n" }
            ],
            "base": "stations",
            "main": {
              "temp": 15.71,
              "pressure": 1006,
              "humidity": 87,
              "temp_min": 14.44,
              "temp_max": 17.22
            },
            "visibility": 10000,
            "wind": { "speed": 5.1, "deg": 210 },
            "clouds": { "all": 100 },
            "dt": 1571085173,
            "sys": {
              "type": 1,
              "id": 6550,
              "message": 0.0074,
              "country": "FR",
              "sunrise": 1571033314,
              "sunset": 1571072670
            },
            "timezone": 7200,
            "id": 2988507,
            "name": "Paris",
            "cod": 200
          }
    }

    infosMeteo()
    {
      const meteo = this.state.weather[0].main;
      switch(meteo)
      {
        case 'Rain':
          return "fas fa-cloud-showers-heavy fa-8x";
          break;
        case 'Clear':
          return "fas fa-sun fa-8x";
          break;
        case 'Clouds':
          return "fas fa-cloud fa-8x";
          break;
        case 'Atmosphere':
          return "fas fa-cloud-rain fa-8x";
          break;
        case 'Snow':
          return "fas fa-snowflake fa-8x";
          break;
        case 'Drizzle':
          return "fas fa-smog fa-8x";
          break;
        case 'Thunderstorm':
          return "fas fa-bolt fa-8x";
          break;
        default:
          return"fas fa-eyes-slash fa-8x";
          break;
      }

      
    }

    render()
    {
        return(
            <div class="Widget">
                <center><h1>Météo du jour</h1></center>
                <div class="divWidget">
                    <p>Rechercher une ville :</p>
                    <input type="search" class="barreRech"></input>
                </div>
                <hr></hr>
                <div class="divWidget">

                  <div class="subDiv1"><center>
                    <h2>Ville : {this.state.name} </h2>
                    <hr></hr>
                    <p>Température : {this.state.main.temp}°C </p>
                    <p> Humidité : {this.state.main.humidity}%</p>
                  </center></div>

                  <div class="subDiv2"><center>
                    <i class={this.infosMeteo()}></i>
                    <h2>{this.state.weather[0].main}</h2>               
                  </center></div>
                    
                </div>
            </div>
        );
    }
}

export default Widget1;