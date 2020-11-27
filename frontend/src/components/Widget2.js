import React from 'react';
import axios from 'axios';
import fichierutilisateur from './donnees/utilisateur.json';
import fichiertitre from './donnees/toptitresperso.json';
import fichierartiste from './donnees/topartistperso.json';

class Widget2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            topTitle : undefined,
            topArtist : undefined,
            utilisateur : undefined,
            recherche: 'AureKun',
        }
    }

    termeRecherche(e)
    {
      this.setState({recherche: e.target.value})
    }

    getall()
    {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${this.state.recherche}&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvTopTitle = res.data;
          let affichageok;
          if(nvTopTitle==null)
            affichageok = false;
          else
            affichageok = true;
          this.setState({ topTitle: nvTopTitle, affichage1: affichageok  });
        });
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${this.state.recherche}&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvTopArtist = res.data;
          let affichageok;
          if(nvTopArtist==null)
            affichageok = false;
          else
            affichageok = true;
          this.setState({ topArtist: nvTopArtist, affichage2: affichageok  });
        });
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${this.state.recherche}&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvUtilisateur = res.data;
          let affichageok;
          if(nvUtilisateur==null)
            affichageok = false;
          else
            affichageok = true;
          this.setState({ utilisateur: nvUtilisateur, affichage1: affichageok });
        })
    }

    componentDidMount()
    {
      this.getall();
    }


    render=()=>
    {
        return(
            <div className="Widget">
                <center><h1>LastFM - Personnel</h1></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} onKeyPress={(e)=>{if(e.key=='Enter')this.getall()}}></input>
                    <button className ="btnRech" onClick={()=>this.getall()}>Recherche</button>
                </div>
                <hr></hr>
                <div className="divWidget">
                  <div className="subDiv30"><center>
                    {!!this.state.utilisateur && (<>
                    <img src={this.state.utilisateur.user.image[2]["#text"]}></img>
                    <h1>{this.state.utilisateur.user.name}</h1>
                    <p>Nombre d'écoutes : {this.state.utilisateur.user.playcount}</p> 
                    </>)}   
                  </center></div>

                <div className="subDiv30 bordureDG">
                    <center><h2>Top 5 Titres :</h2></center>
                    {!!this.state.topTitle && (<>
                    <h4>- {this.state.topTitle.toptracks.track[0].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[0].artist.name}<br></br>{this.state.topTitle.toptracks.track[0].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[1].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[1].artist.name}<br></br>{this.state.topTitle.toptracks.track[1].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[2].name}</h4>
                    <p> {this.state.topTitle.toptracks.track[2].artist.name}<br></br>{this.state.topTitle.toptracks.track[2].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[3].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[3].artist.name}<br></br>{this.state.topTitle.toptracks.track[3].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[4].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[4].artist.name}<br></br>{this.state.topTitle.toptracks.track[4].playcount} écoutes</p>
                    </>)}
                    
                </div>

                  <div className="subDiv30">
                      
                  <center><h2>Top 5 Artistes :</h2></center>
                    {!!this.state.topArtist && (<>
                    <h4>- {this.state.topArtist.topartists.artist[0].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[0].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[1].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[1].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[2].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[2].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[3].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[3].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[4].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[4].playcount} écoutes</p>
                    </>)}
                  </div>
                    
                </div>
            </div>
        );
    }
} 

export default Widget2;