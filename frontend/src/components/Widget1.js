import React from 'react';

class Widget1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          meteo : require('./donnees/weather.json')
        }
            
    }

    infosMeteo()
    {
      const meteo = this.state.meteo.weather[0].main;
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

                  <div class="subDiv30"><center>
                    <h2>Ville : {this.state.meteo.name} </h2>
                    <hr></hr>
                    <p>Température : {this.state.meteo.main.temp}°C </p>
                    <p> Humidité : {this.state.meteo.main.humidity}%</p>
                  </center></div>

                  <div class="subDiv70"><center>
                    <i class={this.infosMeteo()}></i>
                    <h2>{this.state.meteo.weather[0].main}</h2>               
                  </center></div>
                    
                </div>
            </div>
        );
    }
}

export default Widget1;