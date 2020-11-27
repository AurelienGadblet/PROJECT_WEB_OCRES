import React from 'react';
import axios from 'axios';

class Widget1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          recherche: 'Paris',
          affichage: false,
          meteo : [],
        }         
    }

    termeRecherche(e)
    {
      this.setState({recherche: e.target.value})
    }

    getmeteo()
    {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.recherche}&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b`)
      .then(res => {
        const nvmeteo = res.data;
        let affichageok;
        if(nvmeteo==null)
          affichageok = false;
        else
          affichageok = true;
        this.setState({ meteo: nvmeteo });
        this.setState({ affichage: affichageok });
      })
    }

    infosMeteo()
    {
      let meteo;
      if(this.state.affichage == true)
         meteo = this.state.meteo.weather[0].main;
      else
         meteo = 4;
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

    componentDidMount()
    {
      this.getmeteo();
    }

    render()
    {
        return(
            <div class="Widget">
                <center><h1>Météo du jour</h1></center>
                <div class="divWidget">
                    <input type="text" class="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} ></input>
                    <button class ="btnRech" onClick={()=>this.getmeteo()}>Recherche</button>
                </div>
                <hr></hr>
                <div class="divWidget">

                  <div class="subDiv30"><center>
                    {this.state.affichage && (<h2>Ville : {this.state.meteo.name} </h2>)}
                    
                    <hr></hr>
                    {this.state.affichage && (<p>Température : {this.state.meteo.main.temp}°C </p>)}
                    
                    {this.state.affichage && (<p> Humidité : {this.state.meteo.main.humidity}%</p>)}
                    
                  </center></div>

                  <div class="subDiv70"><center>
                    <i class={this.infosMeteo()}></i>
                    {this.state.affichage && (<h2>{this.state.meteo.weather[0].main}</h2>   )}
                                
                  </center></div>
                    
                </div>
            </div>
        );
    }
}

export default Widget1;